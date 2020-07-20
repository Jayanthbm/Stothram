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

const ShatumuraiValitirunam = ({ navigation }) => {
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
                    title="ಶಾತ್ತುಮರೈ & ವಾಳಿತ್ತಿರುನಾಮಮ್"
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
                            line1={'ಸರ್ವದೇಶ ದಶಾಕಾಲೇಷ್ವವ್ಯಾಹತ ಪರಾಕ್ರಮಾ |'}
                            line2={'ರಾಮಾನುಜಾರ್ಯ ದಿವ್ಯಾಜಾ ್ಞವರ್ಧತಾಂ ಅಭಿವರ್ಧತಾಂ ||'}
                            line3={'ರಾಮಾನುಜಾರ್ಯ ದಿವ್ಯಾಜಾ ್ಞಪ್ರತಿವಾಸರಮುಜ್ವಲಾ |'}
                            line4={'ದಿಗಂತವ್ಯಾಪಿನೀ ಭೂಯಾತ್ಸಾಹಿ ಲೋಕಹಿತೈಷಿಣೀ ||'}
                            line5={'ಶ್ರೀಮನ್ ಶ್ರೀರಂಗ ಶ್ರಿಯಮನುಪz್ರವÁಮನುದಿನಂ ಸಂವದರ್sಯ|'}
                            line6={'ಶ್ರೀಮನ್ ಶ್ರೀರಂಗ ಶ್ರಿಯಮನುಪz್ರವÁಮನುದಿನಂ ಸಂವದರ್sಯ|'}
                            line7={'ನಮೋ ರಾಮಾನುಜಾರ್ಯಾಯ ವೇದಾಂತಾರ್ಥ ಪ್ರದಾಯಿನೇ|'}
                            line8={'ಆತ್ರೇಯ ಪದ್ಮನಾಭಾರ್ಯ ಸುತಾಯ ಗುಣಶಾಲಿನೇ||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶ್ರೀಮನ್ ಶ್ರೀರಂಗ ಶ್ರಿಯಮನುಪz್ರವÁಮನುದಿನಂಸಂವರ್ದsಯ||'}
                            line2={'ನಮೋ ರಾಮಾನುಜಾರ್ಯಾಯ ವೇದಾಂತಾರ್ಥ ಪ್ರದಾಯಿನೇ|'}
                            line3={'ಆತ್ರೇಯ ಪದ್ಮನಾಭಾರ್ಯ ಸುತಾಯ ಗುಣಶಾಲಿನೇ||'}
                            line4={'ರಾಮಾನುಜ ದಯಾಪಾತ್ರಂ ಜ್ಞಾನವೈರಾಗ್ಯ ಭೂಷಣಂ |'}
                            line5={'ಶ್ರೀಮದ್ವೇಂಕಟನಾಥಾರ್ಯಂ ವಂದೇ ವೇದಾಂತ ದೇಶಿಕಮ್ ||'}
                            line6={'ವಾಳಿಯಿ ರಾಮಾನುಜ ಪಿಳ್ಳಾನ್ ಮಾದಗವಾಲ್ ವಾಳುಂ'}
                            line7={'ಅಣಿನಿಗಮಾಂತಗುರು ವಾಳಿಯವನ್, ಮಾರನ್ ಮರೈಯುಂ'}
                            line8={'ಇರಾಮಾನುಜನ್ ಭಾಷ್ಯಮುಮ್  ತೇರುಂಪಡಿ ಉರೈಕ್ಕುಂ ಶೀರ್'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಂಜಪ್ಪರ ಶಮಯಂ ಮಾಟ್ರವಂದೋನ್ ವಾಳಿಯೇ'}
                            line2={'ಮನ್ನುಪುಗಳ್ ಪ್ಪುದೂರಾನ್ ಮನಮುಗಪ್ಪೋನ್ ವಾಳಿಯೇ'}
                            line3={'ಕಂಜತ್ತಿರುಮಂಗೈ ಉಗಕ್ಕವಂದೋನ್ ವಾಳಿಯೇ'}
                            line4={'ಕಲಿಯನುರೈ ಕುಡಿಕೊಂಡ ಕgÄÀತ್ತುಡೈಯೋನ್ ವಾಳಿಯೇ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶೆಂಜೊಲ್ ತಮಿಳ್ಮರೈಗಳ್ ತೆಳಿಂದುರೈಪ್ಪೋನ್ ವಾಳಿಯೇ'}
                            line2={'ತಿರುಮಲೈಮಾಲ್ ತಿರುಮಣಿಯಾಯ್ ಚ್ಚಿರಕ್ಕವಂದೋನ್ ವಾಳಿಯೇ'}
                            line3={'ತಂಜಪ್ಪರಗತಿಯೈ ತ್ತಂದರುಳ್ವೋನ್ ವಾಳಿಯೇ'}
                            line4={'ಶೆಣ್ತಮಿಳ್ ತ್ತೂಪುಲ್ ತಿರುವೇಂಗಡವನ್ ವಾಳಿಯೇ'}
                        />

                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನಾನಿಲಮುಂ ತಾನ್ವಾಳ, ನಾನ್ಮರೈಗಳ್ ತಾಮ್ವಾಳ'}
                            line2={'ಮಾನಹರಿನ್ ಮಾರನ್ ಮರೈವಾಳ-'}
                            line3={'ಜ್ಞಾನಿಯರ್ಗಳ್ ಶೆನ್ನಿಯಣಿಶೇರ್ ತೂಪ್ಪುಲ್'}
                            line4={'ವೇದಾಂತ zೕೆಶಿಕನೆೇ ಇನ್ನುಮ್ಮೊರು ನೂಟ್ರಾಂಡಿರುಮ್!'}
                            line5={'ವಾಳಿಯಣಿ ತೂಪ್ಪುಲ್ ವರುಮ್ ನಿಗಮಾಂತಾಶಿರಿಯನ್'}
                            line6={'ವಾಳಿಯವನ್ ಪಾದಾರವಿಂದಮಲರ್,  ವಾಳಿಯವನ್'}
                            line7={'ಕೋದಿಲಾತ್ತಾಣ್, ಮಲರೈಕ್ಕೊಂಡಾಡಿಕ್ಕೊಂಡಿರಿಕ್ಕುಮ್!'}
                            line8={'ತೀದಿಲಾ ನಲ್ಲೋರ್ ತಿರಳ್ ||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ತಿರುವಾಡಿ - ಪ್ಪುರಟ್ರಿಲ್ ಶೆಗ ತ್ತುದಿತ್ತಾಳ್ ವಾಳಿಯೇ'}
                            line2={'ತಿರುಪ್ಪಾವೈ ಮುಪ್ಪದುಂ ಶೆಪ್ಪಿನಾಳ್ ವಾಳಿಯೇ'}
                            line3={'ಪೆರಿಯಾಳ್ವಾರ್ ಪೆಟ್ರೆಡುತ್ತ ಪೆಣ್ಪಿಳ್ಳೈ ವಾಳಿಯೇ'}
                            line4={'ಪೆರುಂಬೂದೂರ್ ಮಾ ಮುನಿಕ್ಕು ಪಿನ್ನಾನಾಳ್ ವಾಳಿಯೇ'}
                            line5={'ಒರು £ ÀÆತ್ತು ನಾಲ್ಪತ್ತುಮೂನ್ರು ಉರೈತ್ತಾಳ್ ವಾಳಿಯೇ'}
                            line6={'ಉಯರರಂಗರ್ಕೇ ಕಣ್ಣಿ ಉಗಂದಳಿತ್ತಾಳ್ ವಾಳಿಯೇ'}
                            line7={'ಮರುವಾರುಂ ತಿರುಮಲ್ಲಿ ವಳಿನಾಡು ವಾಳಿಯೇ'}
                            line8={'ವಣ್ಪುದುವೈ ನಗರ್ ಕೋದೈ ! ಮಲರ್ಪದಂಗಳ್ ವಾಳಿಯೇ |'}
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


export default ShatumuraiValitirunam;
