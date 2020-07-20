/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Switch, BackHandler, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Slider from '@react-native-community/slider';
import Header from '../Components/Header';
import St from '../Components/St';
import Admob from '../Components/Admob';
import * as Adhelper from '../Constants/AdUnits';

const Sudarshanastaka = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(null);
  const [darkmode, setDarkMode] = useState(null);
  const [showToggle, setShowToggle] = useState(null);
  const backgroundColor = darkmode ? '#000' : '#fff';
  const textColor = darkmode ? '#fff' : '#000';

  const [font, setFont] = useState(24);
  const storeData = async (value) => {
    try {
      let v = value ? 'true' : 'false';
      await AsyncStorage.setItem('@darkmode', v);
    } catch (e) { }
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
    } catch (e) { }
  };

  useEffect(() => {
    getData();
    const backAction = () => {
      navigation.navigate('ShotramScreen');
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
          title="ಶ್ರೀ ಸುದರ್ಶನ ಅಷ್ಟಕಂ"
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
              line1={'ಪ್ರತಿಭಟಶ್ರೇಣಿ ಭೀಷಣ, ವರಗುಣಸ್ತೋಮ ಭೂಷಣ'}
              line2={'ಜನಿಭಯಸ್ಥಾನ ತಾರಣ, ಜಗದವಸ್ಥಾನ ಕಾರಣ'}
              line3={'ನಿಖಿಲದುಷ್ಕರ್ಮ ಕರ್ಶನ, ನಿಗಮಸದ್ಧರ್ಮ ದರ್ಶನನಂತೈಸ್ತ್ರಯ್ಯಂತೈರನುವಿಹಿತ ಹೇಷಾಹಲಹಲಂ'}
              line4={'ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ, ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ || ೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶುಭಜಗದ್ರೂಪ ಮಂಡನ, ಸುರಗಣತ್ರಾಸ ಖಂಡನ'}
              line2={'ಶತಮಖಬ್ರಹ್ಮ ವಂದಿತ, ಶತಪಥಬ್ರಹ್ಮ ನಂದಿತ|'}
              line3={'ಪ್ರಥಿತವಿದ್ವತ್ ಸಪಕ್ಷಿತ, ಭಜದಹಿರ್ಬುಧ್ನ್ಯ ಲಕ್ಷಿತ'}
              line4={'ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ, ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ || ೨ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಿಜಪದಪ್ರೀತ ಸದ್ಗಣ, ನಿರುಪಧಿಸ್ಫೀತ ಷಡ್ಗುಣ'}
              line2={'ನಿಗಮ ನಿರ್ವ್ಯೂಢ ವೈಭವ, ನಿಜಪರ ವ್ಯೂಹ ವೈಭವ|'}
              line3={'ಹರಿ ಹಯ ದ್ವೇಷಿ ದಾರಣ, ಹರ ಪುರ ಪ್ಲೋಷ ಕಾರಣ'}
              line4={'ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ, ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ || ೩ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸ್ಫುಟತಟಿಜ್ಜಾಲ ಪಿಂಜರ, ಪೃಥುತರಜ್ವಾಲ ಪಂಜರ'}
              line2={'ಪರಿಗತ ಪ್ರತ್ನವಿಗ್ರಹ, ಪರಿಮಿತಪ್ರಜ್ಞ ದುರ್ಗ್ರಹ |'}
              line3={'ಪ್ರಹರಣ ಗ್ರಾಮ ಮಂಡಿತ, ಪರಿಜನ ತ್ರಾಣ ಪಂಡಿತ'}
              line4={'ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ, ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ || ೪ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಭುವನ ನೇತಸ್ತ್ರಯೀಮಯ, ಸವನತೇಜಸ್ತ್ರಯೀಮಯ'}
              line2={'ನಿರವಧಿ ಸ್ವಾದು ಚಿನ್ಮಯ, ನಿಖಿಲ ಶಕ್ತೇ ಜಗನ್ಮಯ |'}
              line3={'ಅಮಿತ ವಿಶ್ವಕ್ರಿಯಾಮಯ, ಶಮಿತ ವಿಶ್ವಗ್ಭಯಾಮಯ'}
              line4={'ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ, ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ || ೫ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮಹಿತ ಸಂಪತ್ ಸದಕ್ಷರ, ವಿಹಿತಸಂಪತ್ ಷಡಕ್ಷರ'}
              line2={'ಷಡರಚಕ್ರ ಪ್ರತಿಷ್ಠಿತ, ಸಕಲ ತತ್ತ್ವ ಪ್ರತಿಷ್ಠಿತ |'}
              line3={'ವಿವಿಧ ಸಂಕಲ್ಪ ಕಲ್ಪಕ, ವಿಬುಧಸಂಕಲ್ಪ ಕಲ್ಪಕ'}
              line4={'ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ, ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ || ೬ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರತಿಮುಖಾಲೀಢ ಬಂಧುರ, ಪೃಥುಮಹಾಹೇತಿ ದಂತುರ'}
              line2={'ವಿಕಟಮಾಲಾಪರಿಷ್ಕೃತ, ವಿವಿಧ ಮಾಯ ಬಹಿಷ್ಕೃತ |'}
              line3={'ಸ್ಥಿರಮಹಾಯಂತ್ರ ತಂತ್ರಿತ, ದೃಢ ದಯಾ ತಂತ್ರ ಯಂತ್ರಿತ'}
              line4={'ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ, ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ || ೭ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದನುಜ ವಿಸ್ತಾರ ಕರ್ತನ, ದನುಜವಿದ್ಯಾವಿಕರ್ತನ'}
              line2={'ಜನಿತಮಿಸ್ರಾ ವಿಕರ್ತನ, ಭಜದವಿದ್ಯಾ ನಿವರ್ತನ |'}
              line3={'ಅಮರ ದೃಷ್ಟ ಸ್ವ ವಿಕ್ರಮ, ಸಮರ ಜುಷ್ಟ ಭ್ರಮಿಕ್ರಮ'}
              line4={'ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ, ಜಯ ಜಯ ಶ್ರೀ ಸುದರ್ಶನ || ೮ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ದ್ವಿಚತುಷ್ಕಮಿದಂ ಪ್ರಭೂತಸಾರಂ'}
              line2={'ಪಠತಾಂ ವೇಂಕಟನಾಯಕ ಪ್ರಣೀತಮ್ |'}
              line3={'ವಿಷಮೇಽಪಿ ಮನೋರಥಃ ಪ್ರಧಾವನ್'}
              line4={'ನ ವಿಹನ್ಯೇತ ರಥಾಂಗ ಧುರ್ಯ ಗುಪ್ತಃ || ೯ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಇತಿ ಶ್ರೀ ವೇದಾನ್ತಾಚಾರ್ಯಸ್ಯ ಕೃತಿಷು ಸುದರ್ಶನಾಷ್ಟಕಮ್ ||'}
            />
          </View>
        </ScrollView>
        <Admob
          type={'banner'}
          unitId={Adhelper.GenerateId()}
        />
      </React.Fragment>
    </View>

  );
};


export default Sudarshanastaka;
