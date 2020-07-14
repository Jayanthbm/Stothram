/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, BackHandler, Switch, ToastAndroid, TouchableWithoutFeedback, ImageBackground, ScrollView, Linking } from 'react-native';
import Header from '../Components/Header';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Admob from '../Components/Admob';
import * as Adhelper from '../Constants/AdUnits';
const SettingsScreen = ({ navigation }) => {
  //Global Settings
  const [darkmode, setDarkMode] = useState(null);
  const [darkmodeSwitch, setDarkModeSwitch] = useState(null);
  const [darktoggle, setDarktoggle] = useState(null);
  const [darktoggleSwitch, setDarktoggleSwitch] = useState(null);

  //Background Color and Text Color
  let backgroundColor = darkmode ? '#000' : '#fff';
  let textColor = darkmode ? '#fff' : '#000';

  //Profile Image
  const jayanth = require('../Assets/Images/jayanth.webp');
  const yoga = require('../Assets/Images/yoga.webp');

  //Functions

  //Storing Data to Async Storage
  const storeDarkmode = async (value) => {
    try {
      let v = value ? 'true' : 'false';
      await AsyncStorage.setItem('@darkmode', v);
    } catch (e) {
      // saving error
    }
  };
  const storeDarkmodeToggle = async (value) => {
    try {
      let v = value ? 'true' : 'false';
      await AsyncStorage.setItem('@darkmodetoggle', v);
    } catch (e) {
      // saving error
    }
  };

  //Toast message

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const showDarkModeToast = () => {
    let message = darkmode ? 'Light Mode Enabled' : 'Dark Mode Enabled';
    showToast(message);
  };

  const showDarkModeToggleToast = () => {
    let message = darktoggleSwitch ? 'Toggle Disabled' : 'Toggle Enabled';
    showToast(message);
  };

  //Get Data from Async Storage
  const getData = async () => {
    try {
      const dm = await AsyncStorage.getItem('@darkmode');
      if (dm !== null) {
        if (dm === 'true') {
          setDarkMode(true);
          setDarkModeSwitch(true);
        }
        if (dm === 'false') {
          setDarkMode(false);
          setDarkModeSwitch(false);
        }
      } else {
        storeDarkmode(false);
        setDarkMode(false);
        setDarkModeSwitch(false);
      }
      const dmt = await AsyncStorage.getItem('@darkmodetoggle');
      if (dmt !== null) {
        if (dmt === 'true') {
          setDarktoggle(true);
          setDarktoggleSwitch(true);
        }
        if (dmt === 'false') {
          setDarktoggle(false);
          setDarktoggleSwitch(false);
        }
      } else {
        storeDarkmodeToggle(true);
        setDarktoggle(true);
        setDarktoggleSwitch(true);
      }

    } catch (e) { }
  };

  //Open url
  const whatsApp = async (number) => {
    let url = `whatsapp://send?text=hello&phone=${number}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      showToast('WhatsApp Not Found');
    }
  };

  const mailTo = async (id) => {
    let url = `mailto:${id}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      showToast('No Mail Client Available');
    }
  };

  const Instagram = async (id) => {
    let url = `instagram://user?username=${id}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      showToast('Instagram App Not Available.. Trying to Open in Browser');
      let url1 = `https://www.instagram.com/${id}`;
      const supported1 = await Linking.canOpenURL(url);
      if (supported1) {
        await Linking.openURL(url1);
      } else {
        showToast('No Compatible App found to Open Link');
      }
    }
  };

  const Youtube = async (channelId) => {
    let url = `https://www.youtube.com/channel/${channelId}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      showToast('No Compatible App found to Open Link');
    }
  };
  //Styles

  const styles = {
    Container: {
      backgroundColor: backgroundColor,
      flex: 1,
    },
    subheading: {
      backgroundColor: darkmode ? '#D44638' : '#00acee',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },
    subheadingText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 25,
    },
    subheadingIcon: {
      marginEnd: 6,
      color: '#fff',
      fontSize: 25,
    },
    switchStyle: {
      marginTop: 6,
    },
    ListView: {
      flexDirection: 'row',
      marginLeft: 40,
      marginBottom: 10,
    },
    ListViewText: {
      fontSize: 25,
      color: textColor,
      marginEnd: 40,
    },
    CreatedView: {
      flexDirection: 'row',
      marginBottom: 10,
      marginStart: 10,
    },
    RoundedImage: {
      width: 120,
      height: 120,
      borderRadius: 150 / 2,
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: 'red',
    },
    CreatedViewText: {
      color: textColor,
      fontSize: 22,
      marginTop: 25,
    },
    leftView: {
      width: '34%',
    },
    rightView: {
      width: '60%',
    },
    IconWrapper: {
      marginTop: 10,
      flexDirection: 'row',
    },
    FooterView: {
      flexDirection: 'row',
      backgroundColor: backgroundColor,
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    FooterViewText: {
      fontSize: 25,
      color: textColor,
      marginRight: 10,
    },
    FooterViewIcon: {
      fontSize: 22,
      color: '#dc3545',
      marginRight: 10,
    },
  };


  useEffect(() => {
    getData();
    const backAction = () => {
      navigation.navigate('HomeScreen');
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView style={styles.Container}>
      <View>
        <Header title={'Settings'} darkmode={darkmode} />
        <React.Fragment>
          {/* Setting 1 */}
          <View style={styles.subheading}>
            <Icon name="layout" style={styles.subheadingIcon} />
            <Text style={styles.subheadingText}>Theme</Text>
          </View>
          <View style={styles.ListView}>
            <Text style={styles.ListViewText}>Dark Theme</Text>
            <Switch
              style={styles.switchStyle}
              value={darkmodeSwitch}
              onValueChange={() => {
                setDarkModeSwitch(!darkmodeSwitch);
                storeDarkmode(!darkmode);
                setDarkMode(!darkmode);
                showDarkModeToast();
                RNRestart.Restart();
              }}
            />
          </View>
          <View style={styles.ListView}>
            <Text style={styles.ListViewText}>Toggle in Every Page</Text>
            <Switch
              style={styles.switchStyle}
              value={darktoggleSwitch}
              onValueChange={() => {
                setDarktoggleSwitch(!darktoggleSwitch);
                storeDarkmodeToggle(!darktoggle);
                storeDarkmodeToggle(!darktoggle);
                showDarkModeToggleToast();
              }}
            />
          </View>
          {/* Setting 2 */}
          <View style={styles.subheading}>
            <Icon name="team" style={styles.subheadingIcon} />
            <Text style={styles.subheadingText}>Created By</Text>
          </View>

          <View style={styles.CreatedView}>
            <View style={styles.leftView}>
              <ImageBackground source={jayanth} style={styles.RoundedImage} />
            </View>
            <View style={styles.rightView}>
              <Text style={styles.CreatedViewText}>Jayanth</Text>
              <View style={styles.IconWrapper}>

                <TouchableWithoutFeedback
                  onPress={() => {
                    whatsApp(918892218173);
                  }}>
                  <Icon1
                    name="whatsapp"
                    size={40}
                    style={{
                      marginEnd: 6,
                      color: '#4FCE5D',
                    }}
                  />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                  onPress={() => {
                    mailTo('jayanthbharadwajm@gmail.com');
                  }}>
                  <Icon
                    name="mail"
                    size={40}
                    style={{
                      marginEnd: 6,
                      color: '#D44638',
                    }}
                  />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                  onPress={() => {
                    Instagram('jayanthbharadwaj');
                  }}>
                  <Icon
                    name="instagram"
                    size={40}
                    style={{
                      marginEnd: 6,
                      color: '#3f729b',
                    }}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>

          <View style={styles.CreatedView}>
            <View style={styles.leftView}>
              <ImageBackground
                source={yoga}
                style={styles.RoundedImage} />
            </View>
            <View style={styles.rightView}>
              <Text style={styles.CreatedViewText}>Yoga</Text>
              <View style={styles.IconWrapper}>

                <TouchableWithoutFeedback
                  onPress={() => {
                    whatsApp(917337765908);
                  }}>
                  <Icon1
                    name="whatsapp"
                    size={40}
                    style={{
                      marginEnd: 6,
                      color: '#4FCE5D',
                    }}
                  />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                  onPress={() => {
                    mailTo('');
                  }}>
                  <Icon
                    name="mail"
                    size={40}
                    style={{
                      marginEnd: 6,
                      color: '#D44638',
                    }}
                  />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                  onPress={() => {
                    Instagram('y_n_simha');
                  }}>
                  <Icon
                    name="instagram"
                    size={40}
                    style={{
                      marginEnd: 6,
                      color: '#3f729b',
                    }}
                  />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => {
                    Youtube('UCKYG5e1yNCiGwxhave8O9vQ');
                  }}>
                  <Icon
                    name="youtube"
                    size={40}
                    style={{
                      marginEnd: 6,
                      color: '#c4302b',
                    }}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </React.Fragment>
      </View>

      {/* Footer */}
      <View style={styles.FooterView}>
        <Text style={styles.FooterViewText}>Made With</Text>
        <Icon name="heart" style={styles.FooterViewIcon} />
        <Text style={styles.FooterViewText}>In India </Text>
      </View>
      <Admob
        type={'banner'}
        unitId={Adhelper.GenerateId()}
      />
    </ScrollView>
  );
};

export default SettingsScreen;
