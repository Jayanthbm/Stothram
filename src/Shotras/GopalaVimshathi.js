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

const GopalaVimshathi = ({ navigation }) => {
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
          title="ಗೋಪಾಲ ವಿಂಶತಿ"
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
              line1={'ವಂದೇ ಬೃಂದಾವನಚರಂ ವಲ್ಲವೀ ಜನವಲ್ಲಭಂ |'}
              line2={'ಜಯಂತೀಸಂಭವಂ ಧಾಮ ವೈಜಯಂತೀ ವಿಭೂಷಣಮ್ || ೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಾಚಂ ನಿಜಾಂಕರಸಿಕಾಂ ಪ್ರಸಮೀಕ್ಷಮಾಣೋ'}
              line2={'ವಕ್ತ್ರಾರವಿಂದವಿನಿವೇಶಿತಪಾಂಚಜನ್ಯಃ |'}
              line3={'ವರ್ಣತ್ರಿಕೋಣರುಚಿರೇ ವರಪುಂಡರೀಕೇ'}
              line4={'ಬದ್ಧಾಸನೋ ಜಯತಿ ವಲ್ಲವಚಕ್ರವರ್ತೀ || ೨ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಆಮ್ನಾಯಗಂಧಿರುಚಿರಸ್ಫುರಿತಾಧರೋಷ್ಠಂ'}
              line2={'ಆಸ್ರಾವಿಲೇಕ್ಷಣಮನುಕ್ಷಣಮಂದಹಾಸಂ |'}
              line3={'ಗೋಪಾಲಡಿಂಭವಪುಷಂ ಕುಹನಾ ಜನನ್ಯಾಃ'}
              line4={'ಪ್ರಾಣಸ್ತನಂಧಯಮವೈಮಿ ಪರಂ ಪುಮಾಂಸಮ್ || ೩ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಆವಿರ್ಭವತ್ವನಿಭೃತಾಭರಣಂ ಪುರಸ್ತಾತ್'}
              line2={'ಆಕುಂಚಿತೈಕಚರಣಂ ನಿಭೃತಾನ್ಯಪಾದಂ |'}
              line3={'ದಧ್ನಾನಿಮಂಥಮುಖರೇಣ ನಿಬದ್ಧತಾಳಂ'}
              line4={'ನಾಥಸ್ಯ ನಂದಭವನೇ ನವನೀತನಾಟ್ಯಮ್ || ೪ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಹರ್ತುಂ ಕುಂಭೇ ವಿನಿಹಿತಕರಸ್ಸ್ವಾದು ಹೈಯಂಗವೀನಂ'}
              line2={'ದೃಷ್ಟ್ವಾ ದಾಮಗ್ರಹಣಚಟುಲಾಂ ಮಾತರಂ ಜಾತರೋಷಾಂ |'}
              line3={'ಪಾಯಾದೀಷತ್ಪ್ರಚಲಿತಪದೋ ನಾಪಗಚ್ಛನ್ನ ತಿಷ್ಠನ್'}
              line4={'ಮಿಥ್ಯಾಗೋಪಸ್ಸಪದಿ ನಯನೇ ಮೀಲಯನ್ ವಿಶ್ವಗೋಪ್ತಾ || ೫ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವ್ರಜಯೋಷಿದಪಾಂಗ ವೇದನೀಯಂ'}
              line2={'ಮಧುರಾಭಾಗ್ಯಮನನ್ಯಭೋಗ್ಯಮೀಡೇ |'}
              line3={'ವಸುದೇವವಧೂ ಸ್ತನಂಧಯಂ ತತ್'}
              line4={'ಕಿಮಪಿ ಬ್ರಹ್ಮ ಕಿಶೋರಭಾವದೃಶ್ಯಮ್ || ೬ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪರಿವರ್ತಿತಕಂಧರಂ ಭಯೇನ'}
              line2={'ಸ್ಮಿತಫುಲ್ಲಾಧರಪಲ್ಲವಂ ಸ್ಮರಾಮಿ |'}
              line3={'ವಿಟಪಿತ್ವನಿರಾಸಕಂ ಕಯೋಶ್ಚಿತ್'}
              line4={'ವಿಪುಲೋಲೂಖಲಕರ್ಷಕಂ ಕುಮಾರಮ್ || ೭ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಿಕಟೇಷು ನಿಶಾಮಯಾಮಿ ನಿತ್ಯಂ'}
              line2={'ನಿಗಮಾಂತೈರಧುನಾಽಪಿ ಮೃಗ್ಯಮಾಣಂ |'}
              line3={'ಯಮಳಾರ್ಜುನದೃಷ್ಟಬಾಲಕೇಳಿಂ'}
              line4={'ಯಮುನಾಸಾಕ್ಷಿಕಯೌವನಂ ಯುವಾನಮ್ || ೮ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪದವೀಮದವೀಯಸೀಂ ವಿಮುಕ್ತೇಃ'}
              line2={'ಅಟವೀ ಸಂಪದಮಂಬು ವಾಹಯಂತೀಂ |'}
              line3={'ಅರುಣಾಧರಸಾಭಿಲಾಷವಂಶಾಂ'}
              line4={'ಕರುಣಾಂ ಕಾರಣಮಾನುಷೀಂ ಭಜಾಮಿ || ೯ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅನಿಮೇಷನಿಷೇವಣೀಯಮಕ್ಷ್ಣೋಃ'}
              line2={'ಅಜಹದ್ಯೌವನಮಾವಿರಸ್ತು ಚಿತ್ತೇ |'}
              line3={'ಕಲಹಾಯಿತಕುಂತಲಂ ಕಲಾಪೈಃ'}
              line4={'ಕರುಣೋನ್ಮಾದಕವಿಭ್ರಮಂ ಮಹೋ ಮೇ || ೧೦ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅನುಯಾಯಿಮನೋಜ್ಞವಂಶನಾಳೈಃ'}
              line2={'ಅವತು ಸ್ಪರ್ಶಿತವಲ್ಲವೀವಿಮೋಹೈಃ |'}
              line3={'ಅನಘಸ್ಮಿತಶೀತಲೈರಸೌ ಮಾಮ್'}
              line4={'ಅನುಕಂಪಾಸರಿದಂಬುಜೈರಪಾಂಗೈಃ || ೧೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಧರಾಹಿತಚಾರುವಂಶನಾಳಾಃ'}
              line2={'ಮಕುಟಾಲಂಬಿಮಯೂರಪಿಂಛಮಾಲಾಃ |'}
              line3={'ಹರಿನೀಲಶಿಲಾವಿಭಂಗನೀಲಾಃ'}
              line4={'ಪ್ರತಿಭಾಸ್ಸಂತು ಮಮಾಂತಿಮಪ್ರಯಾಣೇ || ೧೨ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಖಿಲಾನವಲೋಕಯಾಮಿ ಕಾಲಾನ್'}
              line2={'ಮಹಿಳಾಧೀನಭುಜಾಂತರಸ್ಯಯೂನಃ |'}
              line3={'ಅಭಿಲಾಷಪದಂ ವ್ರಜಾಂಗನಾನಾಮ್'}
              line4={'ಅಭಿಲಾಪಕ್ರಮದೂರಮಾಭಿರೂಪ್ಯಮ್ || ೧೩ |'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಹೃದಿ ಮುಗ್ಧಶಿಖಂಡಮಂಡನೋ'}
              line2={'ಲಿಖಿತಃ ಕೇನ ಮಮೈಷ ಶಿಲ್ಪಿನಾ |'}
              line3={'ಮದನಾತುರಪಲ್ಲವಾಂಗನಾ-'}
              line4={'ವದನಾಂಭೋಜದಿವಾಕರೋ ಯುವಾ || ೧೪ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮಹಸೇ ಮಹಿತಾಯ ಮೌಳಿನಾ'}
              line2={'ವಿನತೇನಾಂಜಲಿಮಂಜನತ್ವಿಷೇ |'}
              line3={'ಕಲಯಾಮಿ ವಿಮುಗ್ಧವಲ್ಲವೀ-'}
              line4={'ವಲಯಾಭಾಷಿತಮಂಜುವೇಣವೇ || ೧೫ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಜಯತಿ ಲಲಿತವೃತ್ತಿಂ ಶಿಕ್ಷಿತೋ ವಲ್ಲವೀನಾಂ'}
              line2={'ಶಿಥಿಲವಲಯಶಿಂಜಾಶೀತಲೈರ್ಹಸ್ತತಾಳೈಃ |'}
              line3={'ಅಖಿಲಭುವನರಕ್ಷಾಗೋಪವೇಷಸ್ಯ ವಿಷ್ಣೋಃ'}
              line4={'ಅಧರಮಣಿಸುಧಾಯಾಮಂಶವಾನ್ವಂಶನಾಳಃ || ೧೬ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಚಿತ್ರಾಕಲ್ಪ ಶ್ರವಸಿ ಕಲಯನ್ ಲಾಂಗಲೀಕರ್ಣಪೂರಂ'}
              line2={'ಬರ್ಹೋತ್ತಂಸಸ್ಫುರಿತಚಿಕುರೋ ಬಂಧುಜೀವಂ ದಧಾನಃ |'}
              line3={'ಗುಂಜಾಬದ್ಧಾಮುರಸಿ ಲಲಿತಾಂ ಧಾರಯನ್ ಹಾರಯಷ್ಟಿಂ'}
              line4={'ಗೋಪಸ್ತ್ರೀಣಾಂ ಜಯತಿ ಕಿತವಃ ಕೋಽಪಿ ಕೌಮಾರಹಾರೀ || ೧೭ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಲೀಲಾಯಷ್ಟಿಂ ಕರಕಿಸಲಯೇ ದಕ್ಷಿಣೇ ನ್ಯಸ್ಯ ಧನ್ಯಾಂ'}
              line2={'ಅಂಸೇ ದೇವ್ಯಾಃ ಪುಲಕರುಚಿರೇ ಸನ್ನಿವಿಷ್ಟಾನ್ಯಬಾಹುಃ |'}
              line3={'ಮೇಘಶ್ಯಾಮೋ ಜಯತಿ ಲಲಿತೋ ಮೇಖಲಾದತ್ತವೇಣುಃ '}
              line4={'ಗುಂಜಾಪೀಡಸ್ಫುರಿತಚಿಕುರೋ ಗೋಪಕನ್ಯಾಭುಜಂಗಃ || ೧೮ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪ್ರತ್ಯಾಲೀಢಸ್ಥಿತಿಮಧಿಗತಾಂ ಪ್ರಾಪ್ತಗಾಢಾಂಗಪಾಳಿಂ'}
              line2={'ಪಶ್ಚಾದೀಷನ್ಮಿಳಿತನಯನಾಂ ಪ್ರೇಯಸೀಂ ಪ್ರೇಕ್ಷಮಾಣಃ |'}
              line3={'ಭಸ್ತ್ರಾಯಂತ್ರಪ್ರಣಿಹಿತಕರೋ ಭಕ್ತಜೀವಾತುರವ್ಯಾತ್'}
              line4={'ವಾರಿಕ್ರೀಡಾನಿಬಿಡವಸನೋ ವಲ್ಲವೀವಲ್ಲಭೋ ನಃ || ೧೯ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಾಸೋ ಹೃತ್ವಾ ದಿನಕರಸುತಾಸನ್ನಿಧೌ ವಲ್ಲವೀನಾಂ'}
              line2={'ಲೀಲಾಸ್ಮೇರೋ ಜಯತಿ ಲಲಿತಾಮಾಸ್ಥಿತಃ ಕುಂದಶಾಖಾಂ |'}
              line3={'ಸವ್ರೀಡಾಭಿಸ್ತದನು ವಸನೇ ತಾಭಿರಭ್ಯರ್ಥ್ಯಮಾನೇ'}
              line4={'ಕಾಮೀ ಕಶ್ಚಿತ್ಕರಕಮಲಯೋರಂಜಲಿಂ ಯಾಚಮಾನಃ || ೨೦ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಇತ್ಯನನ್ಯಮನಸಾ ವಿನಿರ್ಮಿತಾಂ'}
              line2={'ವೇಂಕಟೇಶಕವಿನಾ ಸ್ತುತಿಂ ಪಠನ್ |'}
              line3={'ದಿವ್ಯವೇಣುರಸಿಕಂ ಸಮೀಕ್ಷತೇ'}
              line4={'ದೈವತಂ ಕಿಮಪಿ ಯೌವತಪ್ರಿಯಮ್ || ೨೧ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಇತಿ ಶ್ರೀವೇದಾಂತಾಚಾರ್ಯಸ್ಯ ಕೃತಿಷು ಗೋಪಾಲವಿಂಶತಿಃ ||'}
            />

          </View>
        </ScrollView>
        <Admob />
      </React.Fragment>
    </View>

  );
};


export default GopalaVimshathi;