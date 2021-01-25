/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useContext} from 'react';
import {View, BackHandler, ScrollView} from 'react-native';
import {Container} from 'native-base';

import St from '../Components/St';
import Admob from '../Components/Admob';
import HeaderComponent from '../Components/HeaderComponent';
import SliderComponent from '../Components/SliderComponent';
import {ThemeContext} from '../providers/ThemeProvider';

const DeshikaMangalam = ({navigation}) => {
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
          title={'ಶ್ರೀ ದೇಶಿಕಮಂಗಳಂ'}
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
              line1={'ಶ್ರೀಮಲ್ಲಕ್ಷ್ಮಣ ಯೋಗೀಂದ್ರ ಸಿಧ್ಧಾಂತ ವಿಜಯದ್ವಜಂ|'}
              line2={'ವಿಶ್ವಾಮಿತ್ರ ಕುಲೋದ್ಭೂತಂ ವರದಾರ್ಯಮಹಂ ಭಜೇ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸರ್ವತಂತ್ರ ಸ್ವತಂತ್ರಾಯ ಸಿಂಹಾಯ ಕವಿವಾದಿನಾಂ |'}
              line2={'ವೇದಾಂತಾಚಾರ್ಯ ವರ್ಯಾಯ ವೇಂಕಟೇಶಾಯ ಮಂಗಳಂ ||1||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ನಭಸ್ಯಮಾಸಿ ಶ್ರೋಣಾಯಾಂ ಅವತೀರ್ಣಾಯ ಸೂರಯೇ |'}
              line2={'ವಿಶ್ವಾಮಿತ್ರಾನ್ವಯಾಯಾಸ್ತು ವೇಂಕಟೇಶಾಯ ಮಂಗಳಂ ||2||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪಿತಾ ಯಸ್ಯಾನಂತಸೂರಿಃ ಪುಂಡರೀಕಾಕ್ಷ ಯಜ್ವನಃ |'}
              line2={'ಪೌತ್ರೋ ಯಸ್ತನಯಸ್ತೋತಾರಂಬಾಯಾಸ್ತಸ್ಯ ಮಂಗಳಂ ||3||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವೇಂಕಟಾಶಾವತಾರೋಯಂ ತದ್ಘಂಟಾಂಶೋಥವಾ ಭವೇತ್|'}
              line2={'ಯತೀಂದ್ರಾಂಶೋಥವೇತ್ಯೇವಂ ವಿತಕಾರ್ಯ್ಯಾಸ್ತು ಮಂಗಳಂ ||4||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶ್ರೀಭಾಷ್ಯಕಾರಃ ಪಂಥಾನಂ ಆತ್ಮನಾ ದರ್ಶಿತಂ ಪುನಃ|'}
              line2={'ಉದ್ದರ್ತುಮಾಗತೋ ನೂನಂ ಇತ್ಯುಕ್ತಾಯಾಸ್ತು ಮಂಗಳಂ||5||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಯೋ ಬಾಲ್ಯೇ ವರದಾರ್ಯಸ್ಯ ಪ್ರಾಚಾರ್ಯಸ್ಯ ಪರಾಂ ದಯಾಂ|'}
              line2={'ಅವಾಪ್ಯ ವೃದ್ಧಿಂ ಗಮಿತಃ ತಸ್ಮೈ ಯೋಗ್ಯಾಯ ಮಂಗಳಂ ||6||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ರಾಮಾನುಜಾರ್ಯಾದಾತ್ರೇಯಾತ್ ಮಾತುಲಾತ್ ಸಕಲಾಃ ಕಲಾಃ|'}
              line2={'ಅವಾಪ ವಿಂಶತ್ಯಬ್ದೇ ಯಃ ತಸ್ಮೈ ಪ್ರಾಜ್ಞಾಯ ಮಂಗಳಂ ||7||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶ್ರುತಪ್ರಕಾಶಿಕಾ ಭೂಮೌ ಯೇನಾದೌ ಪರಿರಕ್ಷಿತಾ |'}
              line2={'ಪ್ರವರ್ತಿತಾ ಚ ಪಾತ್ರೇಷು ತಸ್ಮೈ ಶ್ರೇಷ್ಠಾಯ ಮಂಗಳಂ||8||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಾಂಸ್ಕೃತೀಭಿದಾರ್ರ್ಮಿಡೀಭಿಃ ಬಹ್ವೀಭಿಃ ಕೃತಿಭಿರ್ಜನಾನ್ |'}
              line2={'ಯಸ್ಸಮುಜ್ಜೀವಯಾಮಾಸ ತಸ್ಮೈ ಸೇವ್ಯಾಯ ಮಂಗಳಂ||9||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಯಃ ಖ್ಯಾತಿ ಲಾಭ ಪುಜಾಸು ವಿಮುಖೋ ವೈಷ್ಣವೇ ಜನೇ |'}
              line2={'ಕ್ರಯಣೀಯ ದಶಾಂ ಪ್ರಾಪ್ತಃ ತಸ್ಮೈ ಭವ್ಯಾಯ ಮಂಗಳಂ ||10||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಯಸ್ಮಾದೇವ ಮಯಾ ಸರ್ವಂ ಶಾಸ್ತ್ರಮಗ್ರಾಹಿ ನಾನ್ಯತಃ |'}
              line2={'ತಸ್ಮೈ ವೇಂಕಟನಾಥಾಯ ಮಮ ನಾಥಾಯ ಮಂಗಳಂ ||11||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಪಿತ್ರೇ ಬ್ರಹ್ಮೋಪದೇಷ್ಟೇ ಮೇ ಗುರುವೇ ದೈವತಾಯ ಚ|'}
              line2={'ಪ್ರಾಪ್ಯಾಯ ಪ್ರಾಪಕಾಯಾಸ್ತು ವೇಂಕಟೇಶಾಯ ಮಂಗಳಂ||12||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಯಃ ಕೃತಂ ವರದಾರ್ಯೇಣ  ವೇದಾಂತಾಚಾರ್ಯ ಮಂಗಳಂ |'}
              line2={'ಆಶಾಸ್ತೇನುದಿನಂ ಸೋಪಿ ಭವೇನ್ ಮಂಗಳ ಭಾಜನಂ ||13||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಭಾದ್ರಪದ ಮಾಸ್ತಿ ವಿಷ್ಣುವಿಮಲರ್ಕ್ಷೆ'}
              line2={'ವೇಂಕಟಮಹೀಧ್ರಪತಿ ತೀರ್ಥದಿನ ಭೂತೇ |'}
              line3={'ಪ್ರಾದುರಭವಜ್ಜಗತಿ ದೈತ್ಯ ರಿಪುಘಂಟಾ '}
              line4={'ಹಂತಕವಿತಾರ್ಕಿಕ ಮೃಗೇಂದ್ರ ಗುರುಮೂರ್ತ್ಯಾ ||14||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸಶಂಖ ಚಕ್ರ ಲಾಂಛನಃ ಸದೂಧ್ವ್ರ್ಯ ಪುಂಡ್ರ ಮಂಡಿತಃ |'}
              line2={'ಸಕಂಠ ಲಗ್ನ ಸತ್ತುಲಸ್ಯ ನರ್ಘ ಪದ್ಮ ಮಾಲಿಕಃ |'}
              line3={'ಸಿತಾಂತರೀಯ ಸೂತ್ತರೀಯ ಯಜ್ಞ ಸೂತ್ರ ಶೋಭಿತಃ,'}
              line4={'ಮಮಾವಿರಸ್ತು ಮಾನಸೇ ಗುರುಃ ಸ ವೇಂಕಟೇಶ್ವರಃ ||15||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಅನಂತ ಸೂರಿ ಸೂನವೇ ಭಿನಂದ್ಯಮಾನ ವೈಭವಾತ್'}
              line2={'ದಿಗಂತ ವಾದಿಹಂಸ ಜೈತ್ರಕಾಲ ಮೇಘ ದೇಶಿಕಾತ್ |'}
              line3={'ಉಪಾತ್ತ ಸರ್ವಶಾಸನಾಯ ಹಂತ ವರ್ಷ ವಿಂಶತೌ |'}
              line4={'ಪುನಃ ಪುನರ್ನಮಸ್ಕ್ರಿಯಾಸ್ತು ವೇಂಕಟೇಶ ಸೂರಯೇ ||16||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಗುರೌ ವಾದಿಹಂಸಾಂ ಬುದಾಚಾರ್ಯ ಶಿಷ್ಯೇ'}
              line2={'ಜನಾ ಭಕ್ತಿಹೀನಾ ಯತೀಂದ್ರಾ ಪ್ರಿಯಾಃಸ್ಯುಃ |'}
              line3={'ಯತೀಂದ್ರಾ ಪ್ರಿಯಾವಿಷ್ಣು ಕಾರುಣ್ಯ ದೂರಾಃ,'}
              line4={'ಕುತೋ ಮುಕ್ತಿವಾರ್ತಾ ಹಿ ತಾದೃಗ್ವಿಧಾನಾಂ ||17||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ವೇದೇ ಸಂಜಾತ ಖೇದೇ ಮುನಿಜನ ವಚನೇ'}
              line2={'ಪ್ರಾಪ್ತ ನಿತ್ಯಾವಮಾನೇ'}
              line3={'ಸಂಕೀರ್ಣೇ ಸರ್ವವರ್ಣೇ ಸತಿ ತದನುಗುಣೇ'}
              line4={'ನಿಷ್ಪ್ರಮಾಣೇ ಪುರಾಣೇ |'}
              line5={'ಮಾಯಾವಾದೇ ಸಮೋದೇ ಕಲಿಕಲುಷವಶಾ ಚ್ಛೂನ್ಯವಾದೇ ವಿವಾದೇ'}
              line6={'ಧರ್ಮತ್ರಾಣಾಯಯೋಭೂತ್ ಸಜಯತಿಭಗವಾನ್ ವಿಷ್ಣುಘಂಟಾವತಾರಃ ||'}
            />
          </View>
        </ScrollView>

        <Admob />
      </View>
    </Container>
  );
};

export default DeshikaMangalam;
