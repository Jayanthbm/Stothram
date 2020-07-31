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

const SriramChandirane = ({ navigation }) => {
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
        } catch (e) {
            // error reading value
        }
    };

    useEffect(() => {
        getData();
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
                    title="ಶ್ರೀ ರಾಮಚಂದಿರನೆ ಶ್ರೀ ಲೋಲ ಸುಂದರನೆ"
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
                            line1={'ಶ್ರೀ ರಾಮಚಂದಿರನೆ ಶ್ರೀ ಲೋಲ ಸುಂದರನೆ'}
                            line2={'ಶ್ರೀಮನ್ನಾರಾಯಣ ರಾಮ್ ರಾಮ್ ರಾಮ್'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'1.ದಶರಥ ಪುತ್ತಿರನೆ ದಶಾರಮಿತ್ತಿರನೆ'}
                            line2={'ಕಾಟಕ ಸಂಹಾರನೆ ರಾಮ್ ರಾಮ್ ರಾಮ್'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'2. ವೈಕುಂಠವಾಸನೆ ವನವಿಹಾರನೆ'}
                            line2={'ಶೇಷಾದ್ರಿಶಯನನೆ ರಾಮ್ ರಾಮ್ ರಾಮ್'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'3. ಪಾಲನೆ ಪರಿಪಾಲನೆ ಗೋಕುಲ ಸುಂದರನೆ ಗೋಪೀಕುಮಾರನೆ'}
                            line2={'ಗೋವಿಂದ ರಮಣನೆ ರಾಮ್ ರಾಮ್ ರಾಮ್'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'4. ಸಾರ ಸುಗುಣ ಶರೀರನೆ, ರಾಮಾಭಿರಾಮನೆ ರಘುಕುಲ ಸೋಮನೆ,'}
                            line2={'ಜಾನಕೀಯ ವಲ್ಲಭನೆ ರಾಮ್ ರಾಮ್ ರಾಮ್'}
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


export default SriramChandirane;
