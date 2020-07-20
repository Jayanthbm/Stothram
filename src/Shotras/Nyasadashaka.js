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

const Nyasadashaka = ({ navigation }) => {
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
                    title="ಶ್ರೀ ನ್ಯಾಸದಶಕಂ"
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
                            line1={'ಶ್ರೀಮಾನ್ ವೇಂಕಟನಾಥಾರ್ಯಃ ಕವಿತಾರ್ಕಿಕಕೇಸರೀ |'}
                            line2={'ವೇದಾಂತಾಚಾರ್ಯವರ್ಯೋಮೇ ಸನ್ನಿಧತ್ತಾಂ ಸದಾಹೃದಿ||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅಹಂ ಮದ್ರಕ್ಷಣ ಭರೋ ಮದ್ರಕ್ಷಣ ಫಲಂ ತಥಾ | '}
                            line2={'ಮಮ ಶ್ರೀಪತೇರೇವೇತ್ಯಾತ್ಮಾನಂ ನಿಕ್ಷಿಪೇತ್ ಬುಧಃ ||1||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನ್ಯಸ್ಯಾಮ್ಯಕಿಂಚನಃ ಶ್ರೀಮನ್ ಅನುಕೂಲೋನ್ಯವರ್ಜಿತಃ |'}
                            line2={'ವಿಶ್ವಾಸ ಪ್ರಾರ್ಥನಾ ಪುರ್ವಂ ಆತ್ಮರಕ್ಷಾ ಭರಂ ತ್ವಯಿ ||2||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸ್ವಾಮೀ ಸ್ವಶೇಷಂ ಸ್ವವಶಂ ಸ್ವಭರತ್ವೇನ ನಿರ್ಭರಂ |'}
                            line2={'ಸ್ವದತ್ತಸ್ವಧಿಯಾ ಸ್ವಾರ್ಥಂ ಸ್ವಸ್ಮಿನ್ ನ್ಯಸ್ಯತಿ ಮಾಂಸ್ವಯಂ||3||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶ್ರೀಮನ್ನಭೀಷ್ಟ ವರದ ತ್ವಾಮಸ್ಮಿ ಶರಣಂ ಗತಃ |'}
                            line2={'ಏತದ್ದೇಹಾವಸಾನೇ ಮಾಂ ತ್ವತ್ಪಾದಂ ಪ್ರಾಪಯ ಸ್ವಯಂ||4||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ತ್ವಚ್ಛೇಷತ್ವೇ ಸ್ಥಿರಧಿಯಂ ತ್ವತ್ಪ್ರಾಪ್ತ್ಯೇಕ ಪ್ರಯೋಜನಂ |'}
                            line2={'ನಿಷಿದ್ಧ ಕಾಮ್ಯ ರಹಿತಂ ಕುರು ಮಾಂ ನಿತ್ಯ ಕಿಂಕರಂ ||5||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ದೇವೀ ಭೂಷಣ ಹೇತ್ಯಾದಿ ಜುಷ್ಟಸ್ಯ ಭಗವಂಸ್ತವ |'}
                            line2={'ನಿತ್ಯಂನಿರಪರಾಧೇಷು ಕೈಂಕರ್ಯೇಷು ನಿಯುಂಕ್ಷ್ವಮಾಂ||6||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಮಾಂ ಮದೀಯಂ ಚ ನಿಖಿಲಂ ಚೇತನಾಚೇತನಾತ್ಮಕಂ |'}
                            line2={'ಸ್ವಕೈಂಕರ್ಯೋಪಕರಣಂ ವರದ ಸ್ವೀಕುರು ಸ್ವಯಂ ||7||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ತ್ವದೇಕ ರಕ್ಷ್ಯಸ್ಯ ಮಮ ತ್ವಮೇವ ಕರುಣಾಕರ |'}
                            line2={'ನ ಪ್ರವರ್ತಯ ಪಾಪಾನಿ ಪ್ರವೃತ್ತಾನಿ ನಿವರ್ತಯ ||8||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅಕೃತ್ಯಾನಾಂ ಚ ಕರಣಂ ಕೃತ್ಯಾನಾಂ ವರ್ಜನಂ ಚ ಮೇ |'}
                            line2={'ಕ್ಷಮಸ್ವ ನಿಖಿಲಂ ದೇವ ಪ್ರಣತಾರ್ತಿಹರ ಪ್ರಭೋ ||9||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶ್ರೀಮಾನ್ ನಿಯತ ಪಂಚಾಂಗಂ ಮದ್ರಕ್ಷಣ ಭರಾರ್ಪಣಂ |'}
                            line2={'ಅಚೀಕರತ್ ಸ್ವಯಂ ಸ್ವಸ್ಮಿನ್ ಅತೋಹಮಿಹ ನಿರ್ಭರಃ ||10||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸಂಸಾರಾ ವರ್ತವೇಗ ಪ್ರಶಮನ ಶುಭದೃಗ್ದೇಶಿಕ ಪ್ರೇಕ್ಷಿತೋಹಂ '}
                            line2={'ಸಂತ್ಯಕ್ತೋನ್ಯೈರುಪಾಯೈ ರನುಚಿತಚರಿತೇ ಷ್ವದ್ಯಶಾಂತಾಭಿ ಸಂಧಿಃ |'}
                            line3={'ನಿಃ ಶಂಕಸ್ತತ್ವದೃಷ್ಟ್ಯಾ ನಿರವಧಿಕದಯಂ ಪ್ರಾಥರ್ಯ್‌ ಸಂರಕ್ಷಕಂತ್ವಾಂ '}
                            line4={'ನ್ಯಸ್ಯತ್ವತ್ಪಾದಪದ್ಮೇ ವರದ ನಿಜಭರಂ ನಿರ್ಭರೋ ನಿರ್ಭಯೋಸ್ಮಿ ||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕವಿತಾರ್ಕಿಕ ಸಿಂಹಾಯ ಕಲ್ಯಾಣ ಗುಣಶಾಲಿನೇ |'}
                            line2={'ಶ್ರೀಮತೇ ವೇಂಕಟೇಶಾಯ ವೇದಾಂತ ಗುರವೇ ನಮಃ ||'}
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


export default Nyasadashaka;
