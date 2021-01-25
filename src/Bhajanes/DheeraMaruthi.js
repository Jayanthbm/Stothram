/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useContext} from 'react';
import {View, BackHandler, ScrollView} from 'react-native';
import {Container} from 'native-base';

import St from '../Components/St';
import Admob from '../Components/Admob';
import HeaderComponent from '../Components/HeaderComponent';
import SliderComponent from '../Components/SliderComponent';
import {ThemeContext} from '../providers/ThemeProvider';

const DheeraMaruthi = ({navigation}) => {
  const {backgroundColor, textColor, font} = useContext(ThemeContext);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('BhajaneScreen');
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
            navigation.navigate('BhajaneScreen');
          }}
          title={'ಧೀರ ಮಾರುತಿ ಗಂಭೀರ ಮಾರುತಿ'}
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
              line1={'ಧೀರ ಮಾರುತಿ ಗಂಭೀರ ಮಾರುತಿ |'}
              line2={'ಶೂರ ಮಾರುತಿ ರಾಮಶೂರ ಮಾರುತಿ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಶಕ್ತ ಮಾರುತಿ ರಾಮ ಭಕ್ತ ಮಾರುತಿ|'}
              line2={'ಅಂಜನಿ ಮಾರುತಿ ಹನುಮಂತ ಮಾರುತಿ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಹನುಮಂತ ಮಾರುತಿ  ಬಲವಂತ ಮಾರುತಿ |'}
              line2={'ಬಲವಂತ ಮಾರುತ ಗುಣವಂತ ಮಾರುತಿ ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮಾರುತಿ ಮಾರುತಿ ಮಾರುತಿ ಮಾರುತಿ '}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಧೀರ ಮಾರುತಿ ಗಂಭೀರ ಮಾರುತಿ |'}
              line2={'ಶೂರ ಮಾರುತಿ ರಾಮಶೂರ ಮಾರುತಿ||'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಗೀತಾ ಮಾರುತಿ ಸಂಗೀತ ಮಾರುತಿ '}
              line2={'ಯೋಗಿ ಮಾರುತಿ ಪರಮತ್ಯಾಗಿ ಮಾರುತಿ'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ತ್ಯಾಗಿ ಮಾರುತಿ ವಿರಾಗಿ ಮಾರುತಿ'}
              line2={'ಪವನ ಮಾರುತಿ ಲಂಕಾ ದಹನ ಮಾರುತಿ'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಮೌನಿ ಮಾರುತಿ ಮಹಾಜ್ಞಾನಿ ಮಾರುತಿ'}
              line2={'ದಕ್ಷ ಮಾರುತಿ ಲಕ್ಷ್ಮಣ ರಕ್ಷಾ ಮಾರುತಿ'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಸದಯಾ ಮಾರುತಿ ರಾಮ ಹೃದಯ ಮಾರುತಿ'}
              line2={'ರಾಮಧೂತ ಮಾರುತಿ ಭೀಮಕಾಯ ಮಾರುತಿ'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಎತ್ತಿ ನಿನಗೆ ಆರತಿ ಮಾಡುವೆ ನಿನ್ನ ಕೀರುತಿ'}
              line2={'ಮಾರುತಿ ಮಾರುತಿ ಮಾರುತಿ'}
            />
            <St
              color={textColor}
              fontSize={font}
              line1={'ಧೀರ ಮಾರುತಿ ಗಂಭೀರ ಮಾರುತಿ |'}
              line2={'ಶೂರ ಮಾರುತಿ ರಾಮಶೂರ ಮಾರುತಿ||'}
            />
          </View>
        </ScrollView>

        <Admob />
      </View>
    </Container>
  );
};

export default DheeraMaruthi;
