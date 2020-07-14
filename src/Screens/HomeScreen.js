/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, BackHandler, Alert, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import { FlatGrid } from 'react-native-super-grid';
import Admob from '../Components/Admob';
import * as Adhelper from '../Constants/AdUnits';
const HomeScreen = ({ navigation }) => {
  const [darkmode, setDarkMode] = useState(null);
  const [dataarray, setDataarray] = useState(null);

  let backgroundColor = darkmode ? '#000' : '#fff';
  let textColor = darkmode ? '#fff' : '#000';

  const setDefaultData = () => {
    setDataarray([
      {
        id: 1,
        title: 'Sotras',
        goto: 'ShotramScreen',
        code: '#1abc9c',
        text: '#fff',
        icon: 'database',
      },
      {
        id: 2,
        title: 'Bhajanes',
        goto: 'BhajaneScreen',
        code: '#3498db',
        text: '#fff',
        icon: 'profile',
      },
    ]);
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@darkmode');
      if (value !== null) {
        if (value === 'true') {
          setDarkMode(true);
        }
        if (value === 'false') {
          setDarkMode(false);
        }
      }
      const dmt = await AsyncStorage.getItem('@darkmodetoggle');
      if (dmt === null) {
        await AsyncStorage.setItem('@darkmodetoggle', 'true');
      }
    } catch (e) {
      // error reading value
    }
  };

  const styles = {
    Container: {
      backgroundColor: backgroundColor,
      flex: 1,
      alignItems: 'center',
    },
    flatGridWrapper: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    headingText: {
      color: textColor,
      fontSize: 45,
      textAlign: 'center',
    },
    IconStyle: {
      marginEnd: 6,
      color: '#fff',
      fontSize: 80,
      fontWeight: '600',
      textAlign: 'center',
    },
  };

  function Item({ title, goto, code, text, icon }) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate(goto);
        }}>
        <View style={{
          backgroundColor: code,
          justifyContent: 'flex-end',
          borderRadius: 10,
          padding: 10,
          height: 150,
        }}>
          <Icon name={icon} style={styles.IconStyle} />
          <Text style={{
            fontSize: 20,
            color: text,
            fontWeight: '600',
            textAlign: 'center',
          }
          }>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  useEffect(() => {
    getData();
    setDefaultData();
    const backAction = () => {
      Alert.alert('Hold on!', 'Do you want to Exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.Container}>
      <Admob
        type={'banner'}
        unitId={Adhelper.GenerateId()}
      />
      <View style={styles.flatGridWrapper}>
        <Text style={styles.headingText}>Select One</Text>
      </View>
      {dataarray && dataarray != null && (
        <FlatGrid
          itemDimension={130}
          data={dataarray}
          style={{
            flex: 1,
          }}
          spacing={15}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              goto={item.goto}
              code={item.code}
              text={item.text}
              icon={item.icon}
            />
          )}
        />
      )}
      <Admob
        type={'banner'}
        unitId={Adhelper.GenerateId()}
      />
    </View>
  );
};
export default HomeScreen;
