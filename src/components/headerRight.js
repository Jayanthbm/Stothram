import { useNetInfo } from '@react-native-community/netinfo';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { CACHED_DATA_KEYS } from '../constants';
import { ThemeContext } from '../contexts/themeContext';
import { COLOR_SCHEME, commonStyles } from '../styles/styles';
import {
  compareTimeDifference,
  getItem,
  getJSON,
  storeItem,
} from '../utils/dataUtils';
import CustomIcon from './customIcon';
import CustomModal from './customModal';
import ImageButton from './imageButton';

const generateStyles = headertext => {
  return StyleSheet.create({
    headerRightContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    headerIcon: {
      marginRight: 12,
      marginLeft: 12,
      color: headertext,
    },
    radioButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 10,
    },
    radioButtonLabel: {
      marginTop: 5,
      fontFamily: 'NotoSans',
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 20,
    },
  });
};

const CustomHeaderRight = ({
  navigation,
  showSettings,
  showViewToggle,
  reRender,
  showLangPickerIcon,
  openPicker,
}) => {
  const { darkmode, toggleDarkMode, darkSwitch, viewType, toggleViewType } =
    useContext(ThemeContext);
  const [moneyModal, setMoneyModal] = useState(false);

  const netInfo = useNetInfo();
  const hideDialog = () => {
    setAmount(1);
    setMoney(1);
    setMoneyModal(false);
  };

  const [amount, setAmount] = useState(1);
  const [money, setMoney] = useState(1);

  const [upiId, setUpiId] = useState('');
  const [upidata, setUpiData] = useState(null);

  useEffect(() => {
    async function init() {
      setUpiId(await getItem(CACHED_DATA_KEYS.UPI_ID));
      setUpiData(await getJSON(CACHED_DATA_KEYS.UPI_DATA));
    }
    init();
  }, [reRender]);

  const showDialog = async () => {
    if (!netInfo.isConnected) {
      Alert.alert('Please connect to the internet');
      return;
    }
    if (!upiId || upiId === '') {
      Alert.alert('Coming Soon');
      return;
    }
    setMoneyModal(true);
    await storeItem(CACHED_DATA_KEYS.MONEY_POPUP, 'true');
    await storeItem(
      `${CACHED_DATA_KEYS.MONEY_POPUP}_lastFetchTime`,
      new Date().getTime().toString(),
    );
  };

  useEffect(() => {
    async function init() {
      const lastFetchTime = await getItem(
        `${CACHED_DATA_KEYS.MONEY_POPUP}_lastFetchTime`,
      );
      if (!lastFetchTime) {
        showDialog();
      }
      const currentTime = new Date().getTime();
      const shouldShouldPopUp = compareTimeDifference(
        currentTime,
        lastFetchTime,
        30 * 24 * 60 * 60 * 1000, // 30 days
      );
      if (shouldShouldPopUp) {
        showDialog();
      }
    }
    if (upiId && upiId !== '') {
      init();
    }
  }, [upiId]);
  //generate 10 letter transaction id include letter and numbers
  function genearteTransactionId() {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  const openPaymentApp = async (payApp, amnt) => {
    if (isNaN(amnt)) {
      alert('Please enter valid amount');
      return;
    }
    if (amnt < 1) {
      alert('Please enter amount greater than 0');
      return;
    }
    let url = '';
    switch (payApp) {
      case 'PAYTM':
        url = 'paytmmp://';
        break;
      case 'GPAY':
        url = 'tez://upi/';
        break;
      case 'PHONEPE':
        url = 'phonepe://';
        break;
      case 'BHIM':
        url = 'upi://';
    }

    url =
      url +
      `pay?pa=${upiId}&pn=${upidata?.payee_name}&tn=${
        upidata?.transaction_note
      }&am=${amnt}&cu=INR&mc=0000&tr=${genearteTransactionId()}`;

    hideDialog();
    setAmount(1);
    setMoney(1);
    try {
      await Linking.openURL(url);
    } catch (err) {
      console.error('ERROR : ', err);
    }
  };

  const styles = generateStyles(
    COLOR_SCHEME[darkmode ? 'DARK' : 'LIGHT'].headertext,
  );

  return (
    <>
      <View style={styles.headerRightContainer}>
        {!showLangPickerIcon && (
          <CustomIcon
            onPress={showDialog}
            name="rupee"
            size={26}
            library="FontAwesome"
            style={styles.headerIcon}
          />
        )}

        {showViewToggle && (
          <CustomIcon
            onPress={toggleViewType}
            name={viewType === 'list' ? 'grid' : 'list'}
            size={26}
            library="Feather"
            style={styles.headerIcon}
          />
        )}
        {darkSwitch && (
          <CustomIcon
            onPress={toggleDarkMode}
            name={darkmode ? 'sun' : 'moon'}
            size={26}
            style={{
              ...styles.headerIcon,
              color: darkmode
                ? '#f1e408'
                : COLOR_SCHEME[darkmode ? 'DARK' : 'LIGHT'].headertext,
            }}
            library="Feather"
          />
        )}
        {showSettings && (
          <CustomIcon
            onPress={() => navigation.navigate('Settings')}
            name="settings"
            size={26}
            library="Feather"
            style={styles.headerIcon}
          />
        )}
        {showLangPickerIcon && (
          <CustomIcon
            onPress={openPicker}
            name={'language'}
            size={26}
            library="FontAwesome"
            style={styles.headerIcon}
          />
        )}
      </View>
      <CustomModal
        visible={moneyModal}
        onClose={hideDialog}
        title="Contribute to Stothram">
        {upidata && upidata?.upi_amounts.length > 0 ? (
          <>
            <Text
              style={{
                color: COLOR_SCHEME[darkmode ? 'DARK' : 'LIGHT'].textColor,
                fontFamily: 'NotoSans',
              }}>
              Choose amount
            </Text>
            <View style={styles.radioButtons}>
              {upidata?.upi_amounts?.map(mappedAmount => (
                <TouchableOpacity
                  key={mappedAmount}
                  onPress={() => {
                    setAmount(mappedAmount);
                    setMoney(mappedAmount);
                  }}>
                  <CustomIcon
                    name="circle"
                    size={20}
                    library="FontAwesome"
                    color={mappedAmount === money ? '#007BFF' : '#ccc'}
                  />
                  <Text
                    style={[
                      styles.radioButtonLabel,
                      {
                        color:
                          COLOR_SCHEME[darkmode ? 'DARK' : 'LIGHT'].textColor,
                      },
                    ]}>
                    ₹{mappedAmount}
                  </Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                onPress={() => {
                  setAmount('custom');
                  setMoney(null);
                }}>
                <CustomIcon
                  name="circle"
                  size={20}
                  library="FontAwesome"
                  color={amount === 'custom' ? '#007BFF' : '#ccc'}
                />
                <Text
                  style={[
                    styles.radioButtonLabel,
                    {
                      color:
                        COLOR_SCHEME[darkmode ? 'DARK' : 'LIGHT'].textColor,
                    },
                  ]}>
                  Custom ₹
                </Text>
              </TouchableOpacity>
            </View>
            {amount === 'custom' && (
              <TextInput
                label="Choose amount"
                placeholder="Enter amount"
                placeholderTextColor={
                  COLOR_SCHEME[darkmode ? 'DARK' : 'LIGHT'].textColor
                }
                value={money ? money.toString() : ''}
                keyboardType="numeric"
                onChangeText={text => setMoney(text)}
                style={{
                  paddingVertical: 3,
                  fontSize: 16,
                  borderColor:
                    COLOR_SCHEME[darkmode ? 'DARK' : 'LIGHT'].headerBackground,
                  borderWidth: 2,
                  color: COLOR_SCHEME[darkmode ? 'DARK' : 'LIGHT'].textColor,
                  marginBottom: 10,
                  fontFamily: 'NotoSans',
                }}
              />
            )}
            <Text
              style={{
                color: COLOR_SCHEME[darkmode ? 'DARK' : 'LIGHT'].textColor,
                textAlign: 'center',
                fontFamily: 'NotoSans',
              }}>
              Choose App to pay
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 10,
              }}>
              <ImageButton
                onPress={() => openPaymentApp('PHONEPE', money)}
                name={'PHONEPE'}
              />

              <ImageButton
                onPress={() => openPaymentApp('GPAY', money)}
                name={'GPAY'}
              />

              <ImageButton
                onPress={() => {
                  openPaymentApp('PAYTM', money);
                }}
                name={'PAYTM'}
              />

              <ImageButton
                onPress={() => openPaymentApp('BHIM', money)}
                name={'BHIM'}
              />
            </View>
          </>
        ) : (
          <>
            <Text>Coming Soon</Text>
          </>
        )}

        <View style={styles.modalButtons}>
          <Text style={commonStyles.textButton} onPress={hideDialog}>
            Cancel
          </Text>
        </View>
      </CustomModal>
    </>
  );
};

CustomHeaderRight.propTypes = {
  navigation: PropTypes.object.isRequired,
  showSettings: PropTypes.bool,
  showViewToggle: PropTypes.bool,
};

export default React.memo(CustomHeaderRight);
