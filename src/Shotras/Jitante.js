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

const Jitante = ({ navigation }) => {
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
                    title="ಜಿತಂತೇ ಸ್ತೋತ್ರಂ"
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
                            line1={'ಜಿತಂತೇ ಪುಂಡರೀಕಾಕ್ಷ ನಮಸ್ತೇ ವಿಶ್ವಭಾವನ |'}
                            line2={'ನಮಸ್ತೇಸ್ತು ಹೃಷೀಕೇಶ ಮಹಾಪುರುಷ ಪುರ್ವಜ ||1||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ದೇವಾನಾಂ ದಾನವಾನಾಂ ಚ ಸಾಮಾನ್ಯಂ ಅಧಿದೈವತಂ |'}
                            line2={'ಸರ್ವದಾ ಚರಣದ್ವಂದ್ವಂ ವೃಜಾಮಿ ಶರಣಂ ತವ||2||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಏಕಸ್ತ್ವಮಸಿ ಲೋಕಸ್ಯ ಸ್ರಷ್ಟಾ ಸಂಹಾರಕಸ್ತಥಾ|'}
                            line2={'ಅಧ್ಯಕ್ಷಶ್ಚಾನುಮಂತಾ ಚ ಗುಣಮಾಯಾ ಸಮಾವೃತಃ||3||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸಂಸಾರ ಸಾಗರಂ ಘೋರಂ ಅನಂತಕ್ಲೇಶ ಭಾಜನಂ |'}
                            line2={'ತ್ವಾ ಮೇವ ಶರಣಂ ಪ್ರಾಪ್ಯ ನಿಸ್ತರಂತಿ ಮನೀಷಿಣಃ ||4||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನ ತೇ ರೂಪಂ ನ ಚಾಕಾರೋ ನಾಯುಧಾನಿ ನ ಚಾಸ್ಪದಂ| '}
                            line2={'ತಥಾಪಿ ಪುರುಷಾಕಾರೋ ಭಕ್ತಾನಾಂ ತ್ವಂ ಪ್ರಕಾಶಸೇ ||5||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನೈವ ಕಿಂಚಿತ್ಪರೋಕ್ಷಂ ತೇ ಪ್ರತ್ಯಕ್ಷೋಸಿ ನ ಕಸ್ಯಚಿತ್ |'}
                            line2={'ನೈವ ಕಿಂಚಿದಸಿದ್ಧಂ ತೇ ನ ಚ ಸಿದ್ಧೋಸಿ ಕಸ್ಯಚಿತ್ ||6||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಾರ್ಯಾಣಾಂ ಕಾರಣಂ ಪುರ್ವಂ ವಚಸಾಂ ವಾಚ್ಯಮುತ್ತಮಂ|'}
                            line2={'ಯೋಗಾನಾಂ ಪರಮಾಂ ಸಿದ್ಧಿಂ ಪರಮಂ ತೇ ಪದಂ ವಿದುಃ||7||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅಹಂ ಭೀತೋಸ್ಮಿ ದೇವೇಶ ಸಂಸಾರೇಸ್ಮಿನ್ ಭಯಾವಹೇ |'}
                            line2={'ಪಾಹಿ ಮಾಂ ಪುಂಡರೀಕಾಕ್ಷ ನ ಜಾನೇ ಶರಣಂ ಪರಂ ||8||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಾಲೇಷ್ವಪಿ ಚ ಸರ್ವೇಷು ದಿಕ್ಷು ಸರ್ವಾಸುಚಾಚ್ಯುತ |'}
                            line2={'ಶರೀರೇ ಚ ಗತೌ ಚಾಪಿ ವತರ್Àತೇ ಮೆ ಮಹದ್ಭಯಂ ||9||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ತ್ವತ್ಪಾದ ಕಮಲಾದನ್ನ್ಯನ್ನ ಮೇ ಜನ್ಮಾಂತರೇಷ್ವಪಿ|'}
                            line2={'ನಿಮಿತ್ತಂ ಕುಶಲಸ್ಯಾಸ್ತಿ ಯೇನ ಗಚ್ಛಾಮಿ ಸದ್ಗತಿಂ ||10||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಿಜ್ಞಾನಂ ಯದಿದಂ ಪ್ರಾಪ್ತಂ ಯದಿದಂ ಸ್ಥಾನಮಾರ್ಜಿತಂ | '}
                            line2={'ಜನ್ಮಾಂತರೇಪಿ ಮೇ ದೇವ ಮಾ ಭೂತಸ್ಯ ಪರೀಕ್ಷಯಃ ||11||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ದುರ್ಗತಾವಪಿ ಜಾತಾಯಾಂ ತ್ವದ್ಗತೋ ಮೇ ಮನೋರಥಃ|'}
                            line2={'ಯದಿ ನಾಶಂ ನ ವಿಂದೇತ ತಾವತಾಸ್ಮಿ ಕೃತೀ ಸದಾ ||12||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನ ಕಾಮಕಲುಷಂ ಚಿತ್ತಂ ಮಮತೇ ಪಾದಯೋಃ ಸ್ಥಿತಂ | '}
                            line2={'ಕಾಮಯೇ ವೈಷ್ಣವತ್ವಂ ತು ಸರ್ವಜನ್ಮಸು ಕೇವಲಂ ||13||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸರ್ವೇಷು ದೇಶ ಕಾಲೇಷು ಸರ್ವಾವಸ್ಥಾಸು ಚಾಚ್ಯುತ | '}
                            line2={'ಕಿಂಕರೋಸ್ಮಿ ಹೃಷೀಕೇಶ ಭೂಯೋ ಭೂಯೋಸ್ಮಿ ಕಿಂಕರಃ||14||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಇತ್ಯೇವ ಮನಯಾಸ್ತುತ್ಯಾ ಸ್ತುತ್ವಾ ದೇವಂ ದಿನೇ ದಿನೇ |'}
                            line2={'ಕಿಂಕರೋಸ್ಮೀತಿ ಚಾತ್ಮಾನಂ ದೇವಾಯೈವಂ ನಿವೇದಯೇತ್||15||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಯಚ್ಚಾಪರಾಧಂ ಕೃತವಾನ್ ಅಜ್ಞಾನಾತ್ ಪುರುಷೋತ್ತಮ |'}
                            line2={'ಮದ್ಭಕ್ತ ಇತಿ ದೇವೇಶ ತತ್ಸರ್ವಂ ಕ್ಷಂತುಮರ್ಹಸಿ ||16||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅಹಂಕಾರಾರ್ಥ ಕಾಮೇಷು ಪ್ರೀತಿರದ್ಯೈವ ನಶ್ಶತು |'}
                            line2={'ತ್ವಾಂ ಪ್ರಪನ್ನಸ್ಯ ಮೇ ದೇವ ವರ್ಧತಾಂ ಶ್ರೀಮತಿ ತ್ವಯಿ||17||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕ್ವಾಹಮತ್ಯಂತ ದುರ್ಬುದ್ಧಿಃ ಕ್ವ ಚಾತ್ಮ ಹಿತವೀಕ್ಷಣಂ |'}
                            line2={'ಯದ್ಧಿತಂ ಮಮ ದೇವೇಶ ತದಾಜ್ಞಾಪಯ ಮಾಧವ ||18||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಸೋಹಂ ತೇ ದೇವ ದೇವೇಶ ನಾರ್ಚನಾದೌ ಸ್ತುತೌ ನ ಚ |'}
                            line2={'ಸಾಮಥರ್ಯ್‌ವಾನ್ ಕೃಪಾಮಾತ್ರ ಮನೋವೃತ್ತಿಃ ಪ್ರಸೀದಮೇ||19||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಉಪಚಾರಾ ಪದೇಶೇನ ಕೃತಾನ ಹರಹರ್ಮಯಾ |'}
                            line2={'ಅಪಚಾರಾನಿ ಮಾನ್ ಸರ್ವಾನ್ ಕ್ಷಮಸ್ವ ಪುರುಷೋತ್ತಮ||20||'}
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


export default Jitante;
