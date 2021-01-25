/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useContext} from 'react';
import {View, BackHandler, ScrollView} from 'react-native';
import {Container} from 'native-base';

import St from '../Components/St';
import Admob from '../Components/Admob';
import HeaderComponent from '../Components/HeaderComponent';
import SliderComponent from '../Components/SliderComponent';
import {ThemeContext} from '../providers/ThemeProvider';

const Tirupalland = ({navigation}) => {
  const {backgroundColor, textColor, font} = useContext(ThemeContext);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('ShotramScreen');
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);
  return (
    <Container>
      <View style={{flex: 1, backgroundColor: backgroundColor}}>
        <HeaderComponent
          backAction={() => {
            navigation.navigate('ShotramScreen');
          }}
          title={'ತಿರುಪ್ಪಲ್ಲಾಂಡು'}
        />
        <SliderComponent />
        <ScrollView>
          <View
            style={{
              marginLeft: 7,
              marginRight: 1,
            }}>
            <St
              color={textColor}
              fontSize={font}
              line1={'ಗುರುಮುಖಮನಧೀತ್ಯ ಪ್ರಾಹ ವೇದಾನಶೇಷಾò'}
              line2={'ನರಪತಿ ಪರಿಕ್ಲ್ಪ್ತಂ ಶುಲ್ಕಮಾದಾತು ಕಾಮಃ |'}
              line3={'ಶ್ವಶುರಮಮರವಂದ್ಯಂ ರಂಗನಾಥಸ್ಯ ಸಾಕ್ಷಾತ್ '}
              line4={'ದ್ವಿಜಕುಲತಿಲಕಂ ತಂ ವಿಷ್ಣುಚಿತ್ತಂ ನಮಾಮಿ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮಿನ್ನಾರ್ ತಡಮದಿಳ್ಚೂಳ್ ವಿಲ್ಲಿಪುತ್ತೂರ್ ಎನ್ರೊರುಕಾಲ್'}
              line2={'ಚೊನ್ನಾರ್ ಕಳರ್ ಕಮಲಂ ಚೂಡಿನೋಂ |'}
              line3={'ಮುನ್ನಾಳ್ ಕಿಳಿಯರುತ್ತಾನ್ ಎನ್ರುರೈತ್ತೋಂ'}
              line4={'ಕೀಳ್ಮೈಯಿನಿಲ್ ಚೇರುಂ ವಳಿಯರುತ್ತೋಂ ನೆಂಜಮೇ ವಂದು||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪಾಂಡಿಯನ್ ಕೊಂಡಾಡ ಪಟ್ಟರ್ಪಿರಾನ್ ವಂದಾನೆನ್ರು'}
              line2={'ಈಂಡಿಯ ಚಂಗಂ ಎಡುತ್ತೂದ |'}
              line3={'ವೇಂಡಿಯ ವೇದಂಗಳೋದಿ ವಿರೈಂದು ಕಿಳಿಯರುತ್ತಾನ್'}
              line4={'ಪಾದಂಗಳ್ ಯಾಮುಡೈಯ ಪಟ್ರು ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪಲ್ಲಾಂಡು ಪಲ್ಲಾಂಡು ಪಲ್ಲಾಯಿರುತ್ತಾಂಡು,'}
              line2={'ಪಲಕೋಡಿ ನೂರಾಯಿರಂ,'}
              line3={'ಮಲ್ಲಾಂಡು ತಿಣ್ಣೋಳ್ ಮಣಿವಣ್ಣಾ,'}
              line4={'ಉನ್ ಚೇವಡಿ ಚೆವ್ವಿ ತಿರುಕ್ಕಾಪ್ಪು ||1||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಡಿಯೋಮೋಡುಂ ನಿನ್ನೋಡುಂ,'}
              line2={'ಪಿರಿವಿನ್ರಿ ಆಯಿರಂ ಪಲ್ಲಾಂಡು ವಡಿವಾಯ್ ನಿನ್ವಲ ಮಾರ್ಬಿನಿಲ್,'}
              line3={'ವಾಳ್ಗಿನ್ರ ಮಂಗೈಯುಂ ಪಲ್ಲಾಂಡು ವಡಿವಾರ್ ಚೋದಿ ವಳತ್ತುರೈಯುಂ,'}
              line4={'ಚುಡಿರಾಳಿಯುಂ ಪಲ್ಲಾಂಡು ಪಡೈಪೋರ್ ಪುಕ್ಕು ಮುಳಂಗುಂ,'}
              line5={'ಅಪ್ಪಾಂಜಚನ್ನಿಯಮುಂ ಪಲ್ಲಾಂಡೆ ||2||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವಾಳಾಟ್ಪಟ್ಟು ನಿನ್ರೀರುಳ್ಳೀರೇಲ್, ವಂದುಮಣ್ಣುಂ ಮಣಮುಂಕೊಣ್ಮಿನ್'}
              line2={'ಕೂಳಾಟ್ಪಟ್ಟು ನಿನ್ರೀರ್ಕಳೈ, ಎಂಗಳ್ಕುಳುವಿನಿಲ್ ಪುಹುದಲೊಟ್ಟೋಂ'}
              line3={'ಏಳಾಟ್ಕಾಲುಂ ಪಳಿಪ್ಪಿಲೋಂ ನಾಂಗಳ್, ಇರಾಕ್ಕದರ್ವಾಳ್'}
              line4={
                'ಇಲಂಗೈ ಪಾಳಾಳಾಗ ಪ್ಪಡೈಪೊರುದಾನುಕ್ಕು, ಪ್ಪಲಾಂ್ಲಡು ಕೂರುದುಮೇ||3||'
              }
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಏಡುನಿಲತ್ತಿಲ್ ಇಡುವದನ್ ಮುನ್ನಂವಂದು, ಎಂಗಳ್ ಕುಳಾಂಪುಗುಂದು'}
              line2={'ಕೂಡು ಮನಮುಡೈಯೀರ್ಗಳ್, ವರಮ್ಬೊಳಿ ವಂದೊಲ್ಲೈಕ್ಕೂಡುಮಿನೋ'}
              line3={'ನಾಡುಂ ನಗರಮುಂ ನನ್ಗರಿಯ, ನಮೋ ನಾರಾಯಣಾಯವೆನ್ರು'}
              line4={'ಪಾಡುಮನ ಮುಡೈಪತ್ತರುಳ್ಳೀರ್, ವಂದು ಪಲ್ಲಾಂಡು ಕೂರುಮಿನೇ||4||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅಂಡ ಕ್ಕುಲತ್ತುಕ್ಕದಿಪತಿಯಾಗಿ, ಅಶುರರ್ ಇರಾಕ್ಕದರೈ'}
              line2={'ಇಂಡೈ ಕ್ಕುಲತ್ತೈ ಎಡುತ್ತುಕ್ಕಳೈಂದ, ಇರುಡೀಕೇಶನ್ ತನಕ್ಕು'}
              line3={'ತೊಣ್ಡ ಕ್ಕುಲತ್ತಿಲುಳ್ಳೀರ್ ವಂದಡಿತೊಳುದು, ಆಯಿರನಾಮಮ್ಚೊಲ್ಲಿ'}
              line4={
                'ಪಂಡೈಕ್ಕುಲತ್ತೈ ತ್ತವಿರ್ಂದು, ಪಲಾಂ್ಲಡು ಪಲಾ¬್ಲÄರತಾಂ್ತಡೆನ್ಮಿನೇ||5||'
              }
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಎಂದೈ ತಂದೈತಂದೈ ತಂದೈತಂ ಮೂತ್ತಪ್ಪನ್* ಏಳ್ಪಡಿಗಾಲ್ ತೊಡಂಗಿ'}
              line2={'ವಂದು ವಳಿವಳಿ ಆಟ್ ಚೆಯ್ಗಿನ್ರೋಂ * ತಿರುವೋಣ ತ್ತಿರುವಿಳವಿಲ್-'}
              line3={'ಅಂದಿಯಮ್ಬೋದಿಲ್ ಅರಿಯುರುವಾಗಿ, ಅರಿಯೈ ಅಳಿತ್ತವನೈ '}
              line4={'ಪಂದನೈತ್ತೀರ ಪಲ್ಲಾಂಡು, ಪಲಾ¬್ಲÄರತಾಂ್ತಡೆನ್ರು ಪಾಡುದುಮೇ ||6||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತೀಯಿಲ್ ಪೊಲಿಗಿನ್ರ ಚೆಞ್ಜುಡರಾಳಿ, ತಿಗಳ್ ತಿರುಚಕ್ಕರತ್ತಿನ್'}
              line2={
                'ಕೋಯಿಲ್ ಪೊರಿಯಾಲೇ ಒಟ್ರುಂಡುನಿನ್ರು, ಕುಡಿಕುಡಿ ಆಟ್ಚೆಯ್ಗಿನ್ರೋಂ '
              }
              line3={'ಮಾಯ ಪ್ಪೊರುಪಡೈವಾಣನೈ, ಆಯಿರಂದೋಳುಂ ಪೊಳಿಕುರುದಿಪಾಯ'}
              line4={'ಚುಳಟ್ರಿಯ ಆಳಿ ವಲ್ಲಾನುಕ್ಕು, ¥¯ÀÁಂ್ಲಡು ಕೂರುದುಮೇ ||7||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={
                'ನೆಯ್ಯಿಡೈ ನಲ್ಲದೋರ್ ಚೋರುಂ, ನಿಯತಮುಂ ಅತ್ತಾಣಿ ಚ್ಚೇವಕಮುಂ ಕೈಯಡೈ '
              }
              line2={'ಕ್ಕಾಯುಂ ಕಳುತ್ತುಕ್ಕು ಪ್ಪುಣೊಡು, ಕಾದುಕ್ಕು ಕ್ಕುಂಡಲಮುಂ*   '}
              line3={'ಮೆಯ್ಯಿಡ ನಲ್ಲದೋರ್ ಚಾಂದಮುಂ ತಂದು, ಎನ್ನೈ ವೆಳ್ಳುಯಿರಾಕ್ಕವಲ್ಲ*'}
              line4={
                'ಪೈಯುqೖೆ ನಾಗ ಪ್ಪಗೈ ಕ್ಕೊಡಿಯಾನುಕ್ಕು, ಪ್ಪಲಾಂ್ಲಡು ಕೂರುವನೇ ||8||'
              }
            />
            <St
              color={textColor}
              fontSize={font}
              line1={
                'ಉಡುತ್ತು P್ಕÀಳೈಂದನಿನ್ ಪೀದಗವಾಡೈ ಉಡುತ್ತು*ಕ್ಕಲತ್ತದುಂಡು*ತೊಡುತ್ತ'
              }
              line2={'ತುಳಾಯ್ಮಲರ್ಚೂಡಿP್ಕÀಳೈಂದನ,ಚೂಡುಮ್ಇತ್ತೊಂಡರ್ಗಳೋಂ'}
              line3={'ವಿಡುತ್ತ ತಿಶೈP್ಕÀರುಮಂ ತಿರುತ್ತಿ, ತ್ತಿರುವೋಣ ತ್ತಿರುವಿಳವಿಲ್'}
              line4={
                'ಪಡುತ್ತಪ್ಪೈನ್ನಾಗಣೈ ಪ್ಪಳ್ಳಿಕ್ಕೊಂಡಾನುPÄÀ್ಕ, ಪ್ಪಲ್ಲಾಂಡು ಕೂರುದುಮೇ ||9||'
              }
            />
            <St
              color={textColor}
              fontSize={font}
              line1={
                'ಎನ್ನಾಳ್ಎಮ್ಬೆರುಮಾನ್, ಉನ್ತನP್ಕÀಡಿಯೋಂಎನ್ರು ಎಳುತು¥್ತÀ್ಪಟ್ಟಅನ್ನಾಳೇ'
              }
              line2={'ಅಡಿಯೋಂಗಳ್ ಅಡಿPÄÀ್ಕಡಿಲ್, ವೀಡುಪೆಟ್ರು ಉಯ್ಂದದು ಕಾಣ್'}
              line3={'ಚೆನ್ನಾಳ್ತೋಟ್ರಿ , ತ್ತಿರುಮದುರೈಯುಳ್ ಚಿಲೈಕುನಿತು ್ತ* ಐಂದಲೈಯ-'}
              line4={
                'ಪ್ಪೈನ್ನಾಗತ್ತಲೈ ಪ್ಪಾಯ್ಂದವನೇ*ಉನ್ನೈ ಪ್ಪಲ್ಲಾಂಡು ಕೂರುದುಮೇ ||10||'
              }
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'$ ಅಲ್ವಳಕ್ಕೊನ್ರುಮಿಲ್ಲಾ, ಅಣಿಕೋಟ್ಟಿಯರ್ಕೋನ್*ಅಬಿಮಾನತುಂಗನ್-  '}
              line2={'ಚೆಲ್ವನೈ ಪ್ಪೋಲ, ತ್ತಿರುಮಾಲೇ ನಾನುಮ್ ಉನPÄÀ್ಕ ಪ್ಪಳವಡಿಯೇನ್ '}
              line3={'ನಲ್ವಗೈಯಾಲ್ ನಮೋ ನಾರಾಯಣಾವೆನ್ರು , ನಾಮಂ ಪಲಪರವಿ'}
              line4={'ಪಲ್ವಗೈಯಾಲುಂ ಪವಿತ್ತಿರನೇ, ಉನ್ನೈ ಪ್ಪಲ್ಲಾಂಡು ಕೂರುವನೇ ||11||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪಲ್ಲಾಂಡೆನ್ರು ಪವಿತ್ತಿರನೈ , ಪರಮೇಟ್ಟಿಯೈ * ಚಾಙರ್ಗ್ಮೆನ್ನುಂ-'}
              line2={
                'ವಿಲ್ಲಾಂಡಾನ್ ತನ್ನೈ, ವಿಲ್ಲಿಪುತ್ತೂರ್ ವಿಟ್ಟುಚಿತ್ತನ್ ವಿರುಮ್ಬಿಯಚೊಲ್'
              }
              line3={'ನಲ್ಲಾಂಡೆನ್ರು ನವಿನ್ರುರೈಪ್ಪಾರ್, ನಮೋ ನಾರಾಯಣಾಯವೆನ್ರು'}
              line4={'ಪಲ್ಲಾಂಡುಂ ಪರಮಾತ್ಮನೈ, ಚೂಳ್ಂದಿರುಂದೇತ್ತುವರ್ಪಲ್ಲಾಂಡೇ ||12||'}
            />
          </View>
        </ScrollView>

        <Admob />
      </View>
    </Container>
  );
};

export default Tirupalland;
