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

const ShuddaBrahma = ({ navigation }) => {
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
                    title="ನಾಮರಾಮಾಯಣಂ"
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
                            line1={'ರಾಮ ರಾಮ ಜಯ ರಾಜಾ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ರಾಮ ರಾಮ ಜಯ ಸೀತಾ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಬಾಲಕಾಂಡಂ-'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶುದ್ಧಬ್ರಹ್ಮಪರಾತ್ಪರ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಾಲಾತ್ಮಕಪರಮೇಶ್ವರ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶೇಷತಲ್ಪಸುಖನಿದ್ರಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಬ್ರಹ್ಮಾದ್ಯಮರಪ್ರಾರ್ಥಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಚಂಡಕಿರಣಕುಲಮಂಡನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶ್ರೀಮದ್ದಶರಥನಂದನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕೌಸಲ್ಯಾಸುಖವರ್ಧನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಿಶ್ವಾಮಿತ್ರಪ್ರಿಯಧನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಘೋರತಾಟಕಾಘಾತುಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಮಾರೀಚಾದಿನಿಪಾತಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕೌಶಿಕಮಖಸಂರಕ್ಷಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶ್ರೀಮದಹಲ್ಯೋದ್ಧಾರಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಗೌತಮಮುನಿಸಂಪೂಜಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸುರಮುನಿವರಗಣಸಂಸ್ತುತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನಾವಿಕಧಾವಿತಮೃದುಪದ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಮಿಥಿಲಾಪುರಜನಮೋಹಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಿದೇಹಮಾನಸರಂಜಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ತ್ರ್ಯಂಬಕಕಾರ್ಮುಕಭಂಜಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸೀತಾರ್ಪಿತವರಮಾಲಿಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕೃತವೈವಾಹಿಕಕೌತುಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಭಾರ್ಗವದರ್ಪವಿನಾಶಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶ್ರೀಮದಯೋಧ್ಯಾಪಾಲಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅಯೋಧ್ಯಾಕಾಂಡಂ-'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅಗಣಿತಗುಣಗಣಭೂಷಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅವನೀತನಯಾಕಾಮಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ರಾಕಾಚಂದ್ರಸಮಾನನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪಿತೃವಾಕ್ಯಾಶ್ರಿತಕಾನನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪ್ರಿಯಗುಹವಿನಿವೇದಿತಪದ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪ್ರಕ್ಷಾಳಿತನಿಜಮೃದುಪದ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಭರದ್ವಾಜಮುಖಾನಂದಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಚಿತ್ರಕೂಟಾದ್ರಿನಿಕೇತನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ದಶರಥಸಂತತಚಿಂತಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕೈಕೇಯೀತನಯಾರ್ಚಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಿರಚಿತನಿಜಪಿತೃಕರ್ಮಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಭರತಾರ್ಪಿತನಿಜಪಾದುಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅರಣ್ಯಕಾಂಡಂ-'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ದಂಡಕಾವನಜನಪಾವನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ದುಷ್ಟವಿರಾಧವಿನಾಶನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶರಭಂಗಸುತೀಕ್ಷ್ಣಾರ್ಚಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅಗಸ್ತ್ಯಾನುಗ್ರಹವರ್ಧಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಗೃಧ್ರಾಧಿಪಸಂಸೇವಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪಂಚವಟೀತಟಸುಸ್ಥಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶೂರ್ಪಣಖಾರ್ತಿವಿಧಾಯಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಖರದೂಷಣಮುಖಸೂದಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸೀತಾಪ್ರಿಯಹರಿಣಾನುಗ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಮಾರೀಚಾರ್ತಿಕೃತಾಶುಗ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಿನಷ್ಟಸೀತಾನ್ವೇಷಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಗೃಧ್ರಾಧಿಪಗತಿದಾಯಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶಬರೀದತ್ತಫಲಾಶನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಬಂಧಬಾಹುಚ್ಛೇದನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಿಷ್ಕಿಂಧಾಕಾಂಡಂ-'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಹನುಮತ್ಸೇವಿತನಿಜಪದ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನತಸುಗ್ರೀವಾಭೀಷ್ಟದ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಗರ್ವಿತವಾಲಿಸಂಹಾರಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಾನರದೂತಪ್ರೇಷಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಹಿತಕರಲಕ್ಷ್ಮಣಸಂಯುತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸುಂದರಕಾಂಡಂ-'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಪಿವರಸಂತತಸಂಸ್ಮೃತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ತದ್ಗತಿವಿಘ್ನಧ್ವಂಸಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸೀತಾಪ್ರಾಣಾಧಾರಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ದುಷ್ಟದಶಾನನದೂಷಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶಿಷ್ಟಹನೂಮದ್ಭೂಷಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸೀತವೇದಿತಕಾಕಾವನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕೃತಚೂಡಾಮಣಿದರ್ಶನ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಪಿವರವಚನಾಶ್ವಾಸಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಯುದ್ಧಕಾಂಡಂ-'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ರಾವಣನಿಧನಪ್ರಸ್ಥಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಾನರಸೈನ್ಯಸಮಾವೃತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶೋಷಿತಶರದೀಶಾರ್ಥಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಿಭೀಷಣಾಭಯದಾಯಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪರ್ವತಸೇತುನಿಬಂಧಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕುಂಭಕರ್ಣಶಿರಶ್ಛೇದಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ರಾಕ್ಷಸಸಂಘವಿಮರ್ದಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅಹಿಮಹಿರಾವಣಚಾರಣ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸಂಹೃತದಶಮುಖರಾವಣ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಿಧಿಭವಮುಖಸುರಸಂಸ್ತುತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಖಃಸ್ಥಿತದಶರಥವೀಕ್ಷಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸೀತಾದರ್ಶನಮೋದಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅಭಿಷಿಕ್ತವಿಭೀಷಣನತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪುಷ್ಪಕಯಾನಾರೋಹಣ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಭರದ್ವಾಜಾಭಿನಿಷೇವಣ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಭರತಪ್ರಾಣಪ್ರಿಯಕರ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸಾಕೇತಪುರೀಭೂಷಣ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸಕಲಸ್ವೀಯಸಮಾನಸ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ರತ್ನಲಸತ್ಪೀಠಾಸ್ಥಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪಟ್ಟಾಭಿಷೇಕಾಲಂಕೃತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪಾರ್ಥಿವಕುಲಸಮ್ಮಾನಿತ ರಾಮ |'}
                        />

                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಿಭೀಷಣಾರ್ಪಿತರಂಗಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕೀಶಕುಲಾನುಗ್ರಹಕರ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸಕಲಜೀವಸಂರಕ್ಷಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸಮಸ್ತಲೋಕಾಧಾರಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಉತ್ತರಕಾಂಡಂ-'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಆಗತಮುನಿಗಣಸಂಸ್ತುತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಿಶ್ರುತದಶಕಂಠೋದ್ಭವ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸಿತಾಲಿಂಗನನಿರ್ವೃತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನೀತಿಸುರಕ್ಷಿತಜನಪದ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಿಪಿನತ್ಯಾಜಿತಜನಕಜ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಾರಿತಲವಣಾಸುರವಧ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸ್ವರ್ಗತಶಂಬುಕಸಂಸ್ತುತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸ್ವತನಯಕುಶಲವನಂದಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅಶ್ವಮೇಧಕ್ರತುದೀಕ್ಷಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಾಲಾವೇದಿತಸುರಪದ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಆಯೋಧ್ಯಕಜನಮುಕ್ತಿದ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಿಧಿಮುಖವಿಬುಧಾನಂದಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ತೇಜೋಮಯನಿಜರೂಪಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸಂಸೃತಿಬಂಧವಿಮೋಚಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಧರ್ಮಸ್ಥಾಪನತತ್ಪರ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಭಕ್ತಿಪರಾಯಣಮುಕ್ತಿದ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸರ್ವಚರಾಚರಪಾಲಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸರ್ವಭವಾಮಯವಾರಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವೈಕುಂಠಾಲಯಸಂಸ್ಥಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನಿತ್ಯಾನಂದಪದಸ್ಥಿತ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ರಾಮ ರಾಮ ಜಯ ರಾಜಾ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ರಾಮ ರಾಮ ಜಯ ಸೀತಾ ರಾಮ ||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಮಂಗಳಂ-'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಭಯಹರ ಮಂಗಳ ದಶರಥ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಜಯ ಜಯ ಮಂಗಳ ಸೀತಾ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಮಂಗಳಕರ ಜಯ ಮಂಗಳ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸಂಗತಶುಭವಿಭವೋದಯ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಆನಂದಾಮೃತವರ್ಷಕ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಆಶ್ರಿತವತ್ಸಲ ಜಯ ಜಯ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ರಘುಪತಿ ರಾಘವ ರಾಜಾ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪತಿತಪಾವನ ಸೀತಾ ರಾಮ |'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಇತಿ ನಾಮ ರಾಮಾಯಣಮ್ |'}
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


export default ShuddaBrahma;
