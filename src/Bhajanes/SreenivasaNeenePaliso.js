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

const SreenivasaNeenePaliso = ({ navigation }) => {
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
                    title="ಶ್ರೀನಿವಾಸ ನೀನೇ ಪಾಲಿಸೋ"
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
                            line1={'ಶ್ರೀನಿವಾಸ ನೀನೇ ಪಾಲಿಸೋ ಶ್ರಿತಜನ ಪಾಲ'}
                            line2={'ಗಾನಲೋಲ ಶ್ರೀ ಮುಕುಂದನೇ || ಪ ||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಧ್ಯಾನಮಾಳ್ಪ ಸಜ್ಜನರ ಮಾನದಿಂ ಪರಿಪಾಲಿಪ'}
                            line2={'ವೇಣುಗೋಪಾಲಾ ಮುಕುಂದ ವೇದವೇದ್ಯ ನಿತ್ಯಾನಂದ ||ಅಪ||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಎಂದಿಗೆ ನಿನ್ನ ಪಾದಾಬ್ಜವ ಪೊಂದುವ ಸುಖ'}
                            line2={'ಎಂದಿಗೆ ಲಭಯವೋ ಮಾಧವ'}
                            line3={'ಅಂಧಕಾರಣ್ಯದಲ್ಲಿ ನಿಂದು ತತ್ತರಿಸುತಿಹೆನೊ'}
                            line4={'ಬಂದು ಬಂದು ಈ ಭವದಿ ಬೆಂದು ನೊಂದೇನೊ ಮುಕುಂದ||೧||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಎಷ್ಟು ದಿನ ಕಷ್ಟ ಪಡುವುದೊ'}
                            line2={'ಯಶೋದೆ ಕಂದ ದೃಷ್ಟಿಯಿಂದ ನೋಡಲಾಗದೆ'}
                            line3={'ಮುಟ್ಟಿ ನಿನ್ನ ಭಜಿಸಲಾರೆ ಕೆಟ್ಟ ನರಜನ್ಮದೊಳು'}
                            line4={'ದುಷ್ಟ ಕಾರ್ಯ ಮಾಡಿದಾಗ್ಯು ಇಷ್ಟನಾಗಿ ಕೈಯಪಿಡಿದು ||೨||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅನಿದಿನ ಅನೇಕ ರೋಗಂಗಳಾ ಅನುಭವಿಸುವೆನು'}
                            line2={'ಘನ ಮಹಿಮ ನೀನೆ ಬಲ್ಲೆಯಾ'}
                            line3={'ತನುವಿನಲ್ಲಿ ಬಲವಿಲ್ಲ ನೆನೆದ ಮಾತ್ರ ಸಲಹುವ'}
                            line4={'ಹನುಮದೀಶ ಪುರನ್ದರ ವಿಠಲನೇ ಬೇಗ ಬಲಿದು ||೩||'}
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


export default SreenivasaNeenePaliso;
