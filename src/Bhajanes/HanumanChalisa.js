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

const HanumanChalisa = ({ navigation }) => {
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
          title="ಹನುಮಾನ್ ಚಾಲಿಸಾ"
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
              line1={'ದೋಹಾ'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶ್ರೀ ಗುರು ಚರಣ ಸರೋಜ ರಜ ನಿಜಮನ ಮುಕುರ ಸುಧಾರಿ |'}
              line2={'ವರಣೌ ರಘುQವರ ವಿಮಲಯಶ ಜೋ ದಾಯಕ ಫಲಚಾರಿ ||'}
              line3={'ಬುದ್ಧಿಹೀನ ತನುಜಾನಿಕೈ ಸುಮಿರೌ ಪವನ ಕುಮಾರ |'}
              line4={'ಬಲ ಬುದ್ಧಿ ವಿದ್ಯಾ ದೇಹು ಮೋಹಿ ಹರಹು ಕಲೇಶ ವಿಕಾರ್ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಚೌಪಾಈ'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಜಯ ಹನುಮಾನ ಜ್ಞಾನ ಗುಣ ಸಾಗರ |'}
              line2={'ಜಯ ಕಪೀಶ ತಿಹು ಲೋಕ ಉಜಾಗರ || 1 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ರಾಮದೂತ ಅತುಲಿತ ಬಲಧಾಮಾ |'}
              line2={'ಅಂಜನಿ ಪುತ್ರ ಪವನಸುತ ನಾಮಾ || 2 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮಹಾವೀರ ವಿಕ್ರಮ ಬಜರಂಗೀ |'}
              line2={'ಕುಮತಿ ನಿವಾರ ಸುಮತಿ ಕೇ ಸಂಗೀ ||3 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಕಂಚನ ವರಣ ವಿರಾಜ ಸುವೇಶಾ |'}
              line2={'ಕಾನನ ಕುಂಡಲ ಕುಂಚಿತ ಕೇಶಾ || 4 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಹಾಥವಜ್ರ ಔ ಧ್ವಜಾ ವಿರಾಜೈ |'}
              line2={'ಕಾಂಥೇ ಮೂಂಜ ಜನೇವೂ ಸಾಜೈ || 5||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶಂಕರ ಸುವನ ಕೇಸರೀ ನಂದನ |'}
              line2={'ತೇಜ ಪ್ರತಾಪ ಮಹಾಜಗ ವಂದನ || 6 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಿದ್ಯಾವಾನ ಗುಣೀ ಅತಿ ಚಾತುರ |'}
              line2={'ರಾಮ ಕಾಜ ಕರಿವೇ ಕೋ ಆತುರ || 7 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರಭು ಚರಿತ್ರ ಸುನಿವೇ ಕೋ ರಸಿಯಾ |'}
              line2={'ರಾಮಲಖನ ಸೀತಾ ಮನ ಬಸಿಯಾ || 8||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸೂಕ್ಷ್ಮ ರೂಪಧರಿ ಸಿಯಹಿ ದಿಖಾವಾ |'}
              line2={'ವಿಕಟ ರೂಪಧರಿ ಲಂಕ ಜರಾವಾ || 9 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಭೀಮ ರೂಪಧರಿ ಅಸುರ ಸಂಹಾರೇ |'}
              line2={'ರಾಮಚಂದ್ರ ಕೇ ಕಾಜ ಸಂವಾರೇ || 10 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಲಾಯ ಸಂಜೀವನ ಲಖನ ಜಿಯಾಯೇ |'}
              line2={'ಶ್ರೀ ರಘುವೀರ ಹರಷಿ ಉರಲಾಯೇ || 11 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ರಘುಪತಿ ಕೀನ್ಹೀ ಬಹುತ ಬಡಾಯೀ |'}
              line2={'ತುಮ ಮಮ ಪ್ರಿಯ ಭರತಹಿ ಸಮ ಭಾಯೀ || 12 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಹಸ ವದನ ತುಮ್ಹರೋ ಯಶಗಾವೈ |'}
              line2={'ಅಸ ಕಹಿ ಶ್ರೀಪತಿ ಕಂಠ ಲಗಾವೈ || 13 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸನಕಾದಿಕ ಬ್ರಹ್ಮಾದಿ ಮುನೀಶಾ |'}
              line2={'ನಾರದ ಶಾರದ ಸಹಿತ ಅಹೀಶಾ || 14 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಯಮ ಕುಬೇರ ದಿಗಪಾಲ ಜಹಾಂ ತೇ |'}
              line2={'ಕವಿ ಕೋವಿದ ಕಹಿ ಸಕೇ ಕಹಾಂ ತೇ || 15 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತುಮ ಉಪಕಾರ ಸುಗ್ರೀವಹಿ ಕೀನ್ಹಾ |'}
              line2={'ರಾಮ ಮಿಲಾಯ ರಾಜಪದ ದೀನ್ಹಾ || 16 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತುಮ್ಹರೋ ಮಂತ್ರ ವಿಭೀಷಣ ಮಾನಾ |'}
              line2={'ಲಂಕೇಶ್ವರ ಭಯೇ ಸಬ ಜಗ ಜಾನಾ || 17 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಯುಗ ಸಹಸ್ರ ಯೋಜನ ಪರ ಭಾನೂ |'}
              line2={'ಲೀಲ್ಯೋ ತಾಹಿ ಮಧುರ ಫಲ ಜಾನೂ || 18 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರಭು ಮುದ್ರಿಕಾ ಮೇಲಿ ಮುಖ ಮಾಹೀ |'}
              line2={'ಜಲಧಿ ಲಾಂಘಿ ಗಯೇ ಅಚರಜ ನಾಹೀ || 19 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದುರ್ಗಮ ಕಾಜ ಜಗತ ಕೇ ಜೇತೇ |'}
              line2={'ಸುಗಮ ಅನುಗ್ರಹ ತುಮ್ಹರೇ ತೇತೇ || 20 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ರಾಮ ದುಆರೇ ತುಮ ರಖವಾರೇ |'}
              line2={'ಹೋತ ನ ಆಜ್ಞಾ ಬಿನು ಪೈಸಾರೇ || 21 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಬ ಸುಖ ಲಹೈ ತುಮ್ಹಾರೀ ಶರಣಾ |'}
              line2={'ತುಮ ರಕ್ಷಕ ಕಾಹೂ ಕೋ ಡರ ನಾ || 22 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಆಪನ ತೇಜ ತುಮ್ಹಾರೋ ಆಪೈ |'}
              line2={'ತೀನೋಂ ಲೋಕ ಹಾಂಕ ತೇ ಕಾಂಪೈ || 23 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಭೂತ ಪಿಶಾಚ ನಿಕಟ ನಹಿ ಆವೈ |'}
              line2={'ಮಹವೀರ ಜಬ ನಾಮ ಸುನಾವೈ || 24 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಾಸೈ ರೋಗ ಹರೈ ಸಬ ಪೀರಾ |'}
              line2={'ಜಪತ ನಿರಂತರ ಹನುಮತ ವೀರಾ || 25 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಂಕಟ ಸೇಂ ಹನುಮಾನ ಛುಡಾವೈ |'}
              line2={'ಮನ ಕ್ರಮ ವಚನ ಧ್ಯಾನ ಜೋ ಲಾವೈ || 26 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಬ ಪರ ರಾಮ ತಪಸ್ವೀ ರಾಜಾ |'}
              line2={'ತಿನಕೇ ಕಾಜ ಸಕಲ ತುಮ ಸಾಜಾ || 27 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಔರ ಮನೋರಧ ಜೋ ಕೋಯಿ ಲಾವೈ |'}
              line2={'ತಾಸು ಅಮಿತ ಜೀವನ ಫಲ ಪಾವೈ || 28 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಚಾರೋ ಯುಗ ಪರಿತಾಪ ತುಮ್ಹಾರಾ |'}
              line2={'ಹೈ ಪರಸಿದ್ಧ ಜಗತ ಉಜಿಯಾರಾ || 29 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಾಧು ಸಂತ ಕೇ ತುಮ ರಖವಾರೇ |'}
              line2={'ಅಸುರ ನಿಕಂದನ ರಾಮ ದುಲಾರೇ || 30 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಷ್ಠಸಿದ್ಧಿ ನವ ನಿಧಿ ಕೇ ದಾತಾ |'}
              line2={'ಅಸ ವರ ದೀನ್ಹ ಜಾನಕೀ ಮಾತಾ || 31 ||'}
            /><St
              color={textColor}
              fontSize={font}
              line1={'ರಾಮ ರಸಾಯನ ತುಮ್ಹಾರೇ ಪಾಸಾ |'}
              line2={'ಸಾದ ರಹೋ ರಘುಪತಿ ಕೇ ದಾಸಾ || 32 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತುಮ್ಹರೇ ಭಜನ ರಾಮಕೋ ಪಾವೈ |'}
              line2={'ಜನ್ಮ ಜನ್ಮ ಕೇ ದುಖ ಬಿಸರಾವೈ || 33 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಂತ ಕಾಲ ರಘುವರ ಪುರಜಾಯೀ |'}
              line2={'ಜಹಾಂ ಜನ್ಮ ಹರಿಭಕ್ತ ಕಹಾಯೀ || 34 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಔರ ದೇವತಾ ಚಿತ್ತ ನ ಧರಯೀ |'}
              line2={'ಹನುಮತ ಸೇಯಿ ಸರ್ವ ಸುಖ ಕರಯೀ || 35 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಂಕಟ ಕಟೈ ಮಿಟೈ ಸಬ ಪೀರಾ |'}
              line2={'ಜೋ ಸುಮಿರೈ ಹನುಮತ ಬಲ ವೀರಾ || 36 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಜೈ ಜೈ ಜೈ ಹನುಮಾನ ಗೋಸಾಯೀ |'}
              line2={'ಕೃಪಾ ಕರೋ ಗುರುದೇವ ಕೀ ನಾಯೀ || 37 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಜೋ ಶತ ವಾರ ಪಾಠ ಕರ ಕೋಯೀ |'}
              line2={'ಛೂಟಹಿ ಬಂದಿ ಮಹಾ ಸುಖ ಹೋಯೀ || 38 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಜೋ ಯಹ ಪಡೈ ಹನುಮಾನ ಚಾಲೀಸಾ |'}
              line2={'ಹೋಯ ಸಿದ್ಧಿ ಸಾಖೀ ಗೌರೀಶಾ || 39 ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತುಲಸೀದಾಸ ಸದಾ ಹರಿ ಚೇರಾ |'}
              line2={'ಕೀಜೈ ನಾಥ ಹೃದಯ ಮಹ ಡೇರಾ || 40 ||'}
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


export default HanumanChalisa;