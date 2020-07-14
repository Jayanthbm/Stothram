/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Switch, Dimensions, BackHandler, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Slider from '@react-native-community/slider';
import Header from '../Components/Header';
import St from '../Components/St';
import Admob from '../Components/Admob';
import * as Adhelper from '../Constants/AdUnits';

const ThugireRangana = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(null);
  const [darkmode, setDarkMode] = useState(null);
  const [showToggle, setShowToggle] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [orientation, setOrientation] = useState('portrait');
  const backgroundColor = darkmode ? '#000' : '#fff';
  const textColor = darkmode ? '#fff' : '#000';

  const [font, setFont] = useState(24);
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


  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  Dimensions.addEventListener('change', () => {
    let orr = isPortrait() ? 'portrait' : 'landscape';
    if (orr === 'portrait') {
      setFont(24);
    }
    if (orr === 'landscape') {
      setFont(38);
    }
    setOrientation(orr);
  });

  useEffect(() => {
    getData();
    let or = isPortrait() ? 'portrait' : 'landscape';
    setOrientation(or);
    const backAction = () => {
      navigation.navigate('BhajaneScreen');
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
        <Header
          title="ತೂಗಿರೆ ರಂಗನ ತೂಗಿರೆ ಕೃಷ್ಣನ "
          darkmode={darkmode}
        />
        <Slider
          value={font}
          onValueChange={value => setFont(value)}
          minimumValue={15}
          maximumValue={50}
          style={{
            marginStart: 15,
            marginEnd: 15,
          }}
        />
        <ScrollView>
          <View
            style={{
              marginLeft: 7,
              marginRight: 1,
            }}
          >
            <St
              color={textColor}
              fontSize={font}
              line1={'ತೂಗಿರೆ ರಂಗನ ತೂಗಿರೆ ಕೃಷ್ಣನ'}
              line2={'ತೂಗಿರೆ ಅಚ್ಯುತಾನಂತನ'}
              line3={'ತೂಗಿರೆ ವರಗಿರಿಯಪ್ಪ ತಿಮ್ಮಪ್ಪನ'}
              line4={'ತೂಗಿರೆ ಕಾವೇರಿ ರಂಗಯ್ಯನ'}
              line5={'ನಾಗಲೋಕದಲ್ಲಿ ನಾರಾಯಣ ಮಲಗ್ಯಾನೆ'}
              line6={'ನಾಗ ಕನ್ನಿಕೆಯರು ತೂಗಿರೆ'}
              line7={'ನಾಗವೇಣಿಯರು ನೇಣ ಪಿಡಿದುಕೊಂಡು'}
              line8={'ಬೇಗನೆ ತೊಟ್ಟಿಲ ತೂಗಿರೆ || ೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಇಂದ್ರಲೋಕದಲ್ಲುಪೇಂದ್ರ ಮಲಗ್ಯಾನೆ'}
              line2={'ಇಂದುಮುಖಿಯರೆಲ್ಲ ತೂಗಿರೆ'}
              line3={'ಇಂದ್ರ ಕನ್ನಿಕೆಯರು ಚಂದದಿ ಬಂದು'}
              line4={'ಮುಕುಂದನ ತೊಟ್ಟಿಲ ತೂಗಿರೆ || ೨ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಆಲದೆಲೆಯ ಮೇಲೆ ಶ್ರೀಲೋಲ ಮಲಗ್ಯಾನೆ'}
              line2={'ನೀಲಕುಂತಳೆಯರು ತೂಗಿರೆ'}
              line3={'ವ್ಯಾಳಶಯನ ಹರಿ ಮಲಗು ಮಲಗೆಂದು'}
              line4={'ಬಾಲ ಕೃಷ್ಣಯ್ಯನ ತೂಗಿರೆ || ೩ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಾಸಿರ ನಾಮನೆ ಸರ್ವೋತ್ತಮನೆಂದು'}
              line2={'ಸೂಸುತ್ತ ತೊಟ್ಟಿಲ ತೂಗಿರೆ'}
              line3={'ವಲೇಸಾಗಿ ಮಡುವಿನೊಳ್ ಶೇಷನ ತುಳಿದಿಟ್ಟ'}
              line4={'ದೋಷ ವಿದೂರನ ತೂಗಿರೆ || ೪ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅರಳೆಲೆ ಮಾಗಾಯಿ ಕೊರಳ ಮುತ್ತಿನ ಹಾರ'}
              line2={'ತರಳನ ತೊಟ್ಟಿಲ ತೂಗಿರೆ'}
              line3={'ಸಿರಿದೇವಿ ರಮಣನೆ ಪುರಂದರ ವಿಠಲನೆ'}
              line4={'ಕರುಣದಿ ಮಲಗೆಂದು ತೂಗಿರೆ || ೫ ||'}
            />
          </View>
        </ScrollView>
        <Admob
          type={'banner'}
          unitId={Adhelper.GenerateId()}
        />
      </React.Fragment >
    </View >

  );
};


export default ThugireRangana;
