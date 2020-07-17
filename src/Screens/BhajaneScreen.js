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
const BhajaneScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(null);
  const [darkmode, setDarkMode] = useState(null);
  const [showToggle, setShowToggle] = useState(null);

  const backgroundColor = darkmode ? '#000' : '#fff';
  const textColor = darkmode ? '#fff' : '#000';
  const [searchvalue, onChangeText] = useState('');

  const [dataarray, setDataarray] = useState(null);

  const image = require('../Assets/Images/god.webp');
  const setDefaultData = () => {
    setDataarray([
      {
        id: 1,
        title: 'BhajaYatirajam',
        displayTitle: 'ಭಜ ಯತಿರಾಜಂ',
        goto: 'BhajaYatirajam',
      },
      {
        id: 2,
        title: 'Thugire Rangana Thugire Krishnana',
        goto: 'ThugireRangana',
        displayTitle: 'ತೂಗಿರೆ ರಂಗನ',
      },
      {
        id: 3,
        title: 'Hanuman Chalisa',
        goto: 'HanumanChalisa',
        displayTitle: 'ಹನುಮಾನ್ ಚಾಲಿಸಾ',
      },
      {
        id: 4,
        title: 'Hare Krishna Mantram',
        goto: 'HareKrishnaMantram',
        displayTitle: 'ಹರೇ ಕೃಷ್ಣ ಮಂತ್ರಂ',
      },
      {
        id: 4,
        title: 'ShuddaBrahma',
        goto: 'ShuddaBrahma',
        displayTitle: 'ಶುದ್ಧಬ್ರಹ್ಮ',
      },
      {
        id: 5,
        title: 'SreenivasaNeenePaliso',
        goto: 'SreenivasaNeenePaliso',
        displayTitle: 'ಶ್ರೀನಿವಾಸ ನೀನೇ ಪಾಲಿಸೋ',
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
        title="Bhajanes"
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
export default BhajaneScreen;
