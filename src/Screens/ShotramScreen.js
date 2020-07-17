/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Switch, Text, BackHandler, TextInput, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { FlatGrid } from 'react-native-super-grid';
import Header from '../Components/Header';
import Admob from '../Components/Admob';
import * as Adhelper from '../Constants/AdUnits';
const ShotramScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(null);
  const [darkmode, setDarkMode] = useState(null);
  const [showToggle, setShowToggle] = useState(null);
  const backgroundColor = darkmode ? '#000' : '#fff';
  const textColor = darkmode ? '#fff' : '#000';
  const [searchvalue, onChangeText] = useState('');

  const [dataarray, setDataarray] = useState(null);

  const setDefaultData = () => {
    setDataarray([
      {
        id: 1,
        title: 'Dashavatara',
        goto: 'Dashavatara',
        displayTitle: 'ದಶಾವತಾರ ಸ್ತೋತ್ರಂ',
      },
      {
        id: 2,
        title: 'GodaStuti',
        goto: 'GodaSthuti',
        displayTitle: 'ಗೋದಾ ಸ್ತುತಿಃ',
      },
      {
        id: 3,
        title: 'GopalaVimshathi',
        goto: 'GopalaVimshathi',
        displayTitle: 'ಗೋಪಾಲ ವಿಂಶತಿ',
      },
      {
        id: 4,
        title: 'Hayagriva',
        displayTitle: 'ಹಯಗ್ರೀವ ಸ್ತೋತ್ರಂ',
        goto: 'Hayagriva',
      },
      {
        id: 5,
        title: 'MukundaMala',
        displayTitle: 'ಮುಕುಂದಮಾಲಾ',
        goto: 'MukundaMala',
      },
      {
        id: 6,
        title: 'RaghuveeraGadya',
        displayTitle: ' ಶ್ರೀ ರಘುವೀರ ಗದ್ಯಂ',
        goto: 'RaghuveeraGadya',
      },
      {
        id: 7,
        title: 'Sudarshanastaka',
        displayTitle: 'ಶ್ರೀ ಸುದರ್ಶನ ಅಷ್ಟಕಂ',
        goto: 'Sudarshanastaka',
      },
      {
        id: 8,
        title: 'Tiruppavai',
        displayTitle: 'ತಿರುಪ್ಪಾವೈ',
        goto: 'Tiruppavai',
      },
      {
        id: 9,
        title: 'GarudaDandakam',
        displayTitle: 'ಶ್ರೀ ಗರುಡ ದಂಡಕಂ',
        goto: 'GarudaDandakam',
      },
      {
        id: 10,
        title: 'VishnuSahasranamam',
        displayTitle: 'ವಿಷ್ಣು ಸಹಸ್ರ ನಾಮ',
        goto: 'VishnuSahasranamam',
      },
      {
        id: 11,
        title: 'Jitante',
        displayTitle: 'ಜಿತಂತೇ ಸ್ತೋತ್ರಂ',
        goto: 'Jitante',
      },
      {
        id: 12,
        title: 'Nyasadashaka',
        displayTitle: 'ಶ್ರೀ ನ್ಯಾಸದಶಕಂ',
        goto: 'Nyasadashaka',
      },
    ]);
  };
  const storeData = async (value) => {
    try {
      let v = value ? 'true' : 'false';
      await AsyncStorage.setItem('@darkmode', v);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@darkmode');
      if (value !== null) {
        if (value === 'true') {
          setDarkMode(true);
          setIsEnabled(true);
        }
        if (value === 'false') {
          setDarkMode(false);
          setIsEnabled(false);
        }
      }
      const dmt = await AsyncStorage.getItem('@darkmodetoggle');
      if (dmt !== null) {
        if (dmt === 'true') {
          setShowToggle(true);
        }
        if (dmt === 'false') {
          setShowToggle(false);
        }
      } else {
        setShowToggle(true);
      }
    } catch (e) {
      // error reading value
    }
  };


  const searchFilterFunction = text => {
    if (text) {
      const newData = dataarray.filter(item => {
        const itemData = item.title.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setDataarray(newData);
    } else {
      setDefaultData();
    }
  };
  function Item({ title, goto, displayTitle }) {
    let image = require('../Assets/Images/god.webp');
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate(goto);
        }}>
        <View style={{
          justifyContent: 'flex-end',
          borderRadius: 5,
          padding: 10,
          height: 150,
          borderColor: 'grey',
        }}>
          <ImageBackground
            source={image}
            style={{
              flex: 1,
              resizeMode: 'cover',
              justifyContent: 'center',
              borderColor: textColor,
              borderWidth: 1,
            }} />
          <Text style={{
            fontSize: 20,
            color: textColor,
            fontWeight: '600',
            textAlign: 'center',
          }
          }>{displayTitle ? displayTitle : title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  useEffect(() => {
    getData();
    setDefaultData();
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
    <View style={{ backgroundColor: backgroundColor, flex: 1 }} >
      <Header
        title="Sotras"
        darkmode={darkmode}
      />
      <React.Fragment>
        {showToggle && showToggle === true && (
          <Switch
            style={{
              marginTop: '3%',
            }}
            value={isEnabled}
            onValueChange={() => {
              setIsEnabled(!isEnabled);
              storeData(!darkmode);
              setDarkMode(!darkmode);
            }}
          />
        )}
        <TextInput
          placeholder="Search"
          placeholderTextColor={textColor}
          value={searchvalue}
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 10,
            marginStart: 20,
            marginEnd: 20,
            fontSize: 15,
            color: textColor,
          }}
          textAlign={'center'}
          autoCapitalize={'none'}
          autoCompleteType={'off'}
          autoCorrect={false}
          onChangeText={text => {
            onChangeText(text);
            searchFilterFunction(text);
          }}
        />
        {dataarray && dataarray != null && (
          <FlatGrid
            itemDimension={130}
            data={dataarray}
            style={{
              marginTop: 10,
              flex: 1,
            }}
            // staticDimension={300}
            // fixed
            spacing={10}
            renderItem={({ item }) => (
              <Item
                title={item.title}
                goto={item.goto}
                displayTitle={item.displayTitle}
              />
            )}
          />
        )}
      </React.Fragment>
      <Admob
        type={'banner'}
        unitId={Adhelper.GenerateId()}
      />
    </View>

  );
};
export default ShotramScreen;
