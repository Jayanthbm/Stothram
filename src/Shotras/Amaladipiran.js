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

const Amaladipiran = ({ navigation }) => {
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
                    title="ಅಮಲನಾದಿಪಿರಾನ್"
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
                            line1={'ಆಪಾದಚೂಡಮನುಭೂಯ ಹರಿಂ ಶಯಾನಮ್'}
                            line2={' ಮಧ್ಯೇ ಕವೇರ ದುಹಿತುರ್ಮುದಿತಾನ್ತರಾತ್ಮಾ |'}
                            line3={'ಅದ್ರಷ್ಟೃತಾಂ ನಯನಯೋರ್ವಿಷಯಾನ್ತರಾಣಾಮ್'}
                            line4={'ಯೋ ನಿಶ್ಚಿಕಾಯ ಮನವೈ ಮುನಿವಾಹನಂ ತಂ ||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಾಟ್ಟವೇಕಣ್ಡ ಪಾದ ಕಮಲಮ್'}
                            line2={'ತೇಟ್ಟರುಂ ಉದರಬನ್ದಮ್ ತಿರುಮಾರ್ವುಕಣ್ಡಮ್ಚೆವ್ವಾಯ್'}
                            line3={'ವಾಟ್ಟಮಿಲ್ ಕಣ್ಗಳ್ ಮೇನಿ ಮುನಿಯೇರಿತ್ತನಿ '}
                            line4={'ಪಾಟ್ಟಿನಾಲ್ ಕಣ್ಡುವಾಳುಮ್ ಪಾಣತಾರ್ತ್ಳ್ ಪgವಿÀನೋಮೇ ||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'$ ಅಮಲನಾದಿಪಿರಾನ್* ಅಡಿಯಾರ್ಕೆನ್ನೈ ಆಟ್ಪಡುತ್ತವಿಮಲò* '}
                            line2={'ವಿಣ್ಣವರ್ ಕೋò * ವಿರೈಯಾರ್ ಪೊಳಿಲ್ ವೇಙ್ಗಡವò * ನಿ'}
                            line3={'ಮಲòನಿನ್ಮಲò ನೀದಿವಾನವò* ನೀಳ್ಮದಿಳ್ಅರಙ್ಗತ್ತಮ್ಮಾನ್*'}
                            line4={'ತಿರುಕ್ಕಮಲ ಪಾದಂವನ್ದು * ಎò ಕಣ್ಣಿನುಳ್ಳನ ವೊಕ್ಕಿನ್ರದೇ || 1||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಉವನ್ದ ಉಳ್ಳತ್ತನಾಯ್ * ಉಲಗಮಳನ್ದು ಅಣ್ಡಮುರ'}
                            line2={'ನಿವನ್ದ ನೀಳ್ಮುಡಿಯò * ಅನ್ರುನೇರ್ನ್ದ ನಿಶಾಚರರೈ*'}
                            line3={'ಕ್ಕವರ್ಂದ- ವೆಙ್ಗಣೈ ಕಾಗುತ್ತò * ಕಡಿಯಾರ್ ಪೊಳಿಲ್ಅರಙ್ಗತ್ತಮ್ಮಾò*'}
                            line4={' ಅರೈಚ್ಚಿವನ್ದ ಆಡೈಯಿನ್ಮೇಲ್* ಚೆನ್ರದಾಮ್ ಎನ್ ಚಿನ್ದನೈಯೇ ||2||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={' ಮನ್ದಿಪಾಯ್ * ವಡವೇಙ್ಗಡ ಮಾಮಲೈ * ವಾನವರ್UÀಳ್ '}
                            line2={'ಚನ್ದಿಚೆಯ್ಯ ನಿನ್ರಾನ್* ಅರಙ್ಗತ್ತರವಿನ್ ಅಣೈಯಾò* ಅನ್ದಿಪೋಲ್'}
                            line3={'ನಿರತಾq್ತೈಯುಮ್* ಅದನ್ಮೇಲ್ ಅಯನೈ ಪ್ಪಡೈತ್ತದೋರೆಳಿಲ್*'}
                            line4={'ಉಂದಿ ಮೇಲದನ್ರೋ * ಅಡಿಯೇನ್ ಉಳ್ಳತ್ತಿನ್ ಉಯಿರೇ ||3||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಚzÄÀರಮಾಮದಿಳ್ ಚೂಳ್ * ಇಲಙõ್ಗೈಕ್ಕಿರೈವò ತಲೈಪತ್ತು'}
                            line2={'ಉದಿರವೋಟ್ಟಿ * ಓರ್ವೆಙ್ಗಣೈ ಉಯ್ತ್ತವò * ಓದವಣ್ಣò *'}
                            line3={'ಮದುರಮಾ ವಣ್ಡುಪಾಡ* ಮಾಮಯಿಲಾಡgಙÀ್ಗತ್ತಮ್ಮಾò*'}
                            line4={'ತಿರುವಯಿಟ್ರು ಉದರಬನ್ದಮ್* ಎನ್ನುಳ್ಳತ್ತುಳ್ ನಿನ್ರುಲಾಗಿನ್ರದೇ||4||'}
                        />

                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪಾರಮಾಯ * ಪಳವಿನೈ ಪಟ್ರರುತ್ತು * ಎನ್ನೈತ್ತò '}
                            line2={'ವಾರಮಾಕ್ಕಿ ವೈತ್ತಾò* ವೈತ್ತದನ್ರಿ ಎನ್ನುಳ್ ಪುಗುನ್ದಾನ್*'}
                            line3={'ಕೋರಮಾದವಂ ಶೆಯ್ದನòಕೊಲ್ಅರಿಯೇò* ಅರಙ್ಗತ್ತಮ್ಮಾò*'}
                            line4={'ತಿರುವಾರ ಮಾರ್ಬದನ್ರೋ* ಅಡಿಯೇನೈ ಆಟ್ಕೊಣ್ಡದೇ ||5||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ತುಣ್ಡವೆಣ್ ಪಿರೈಯನ್ * ತುಯರ್ ತೀರ್ತವನ್* ಅಞ್ಜಿರೈಯ '}
                            line2={'ವಣ್ಡುವಾಳ್ ಪೊಳಿಲ್ಚೂಳ್ *ಅರಙ್ಗನಗರ್ಮೇಯವಪ್ಪò * '}
                            line3={'ಅಣ್ಡರಣ್ಡ ಪಗಿರಣ್ಡತ್ತು * ಒರುಮಾನಿಲಮ್ ಎಳುಮಾಲ್ವರೈ*'}
                            line4={'ಮುಟ್ರುಮುಣ್ಡ ಕಣ್ಡಮ್ಕಣ್ಡೀರ್* ಅಡಿಯೇನೈ ಉಯ್ಯಕ್ಕೊಣ್ಡದೇ|| 6||'}
                        />

                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕೈಯ್ಯಿನಾರ್*ಚುರಿ ಚಙ್ಗನಲ್ ಆಳಿಯರ್*ನೀಳ್ವರೈಪೋಲ್ ಮೆಯ್ಯ-'}
                            line2={'ನಾರ್* ತುಳಬವಿರೈಯಾರ್ ಕಮಳ್ನೀಣ್ಮುಡಿ ಎಮ್ ಐಯ್ಯನಾರ್* '}
                            line3={'ಅಣಿಯರಙ್ಗನಾರ್ * ಅರವಿನಣೈ ಮಿಶೈ ಮೇಯ ಮಾಯನಾರ್*'}
                            line4={'ಚೆಯ್ಯವಾಯ್ಐಯ್ಯೋ* ಎನ್ನೈಚ್ಚಿನ್ದೈ ಕವರ್ನ್ದದುವೇ ||7||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪರಿಯನಾಗಿ ವನ್ದ * ಅವುಣನ್ ಉಡಲ್ ಕೀಣ್ಡ *  '}
                            line2={'ಅಮರರ್ಕ್ಕು ಅರಿಯ ಆದಿಪ್ಪಿರಾò* ಅರಙ್ಗತ್ತಮಲò ಮುಗತ್ತು* '}
                            line3={'ಕರಿಯವಾಗಿ ಪ್ಪುಡೈಪರನ್ದು * ಮಿಳಿರ್ನ್ದು ಚೆವ್ವರಿಯೋಡಿ'}
                            line4={' ನೀಣ್ಡ ಅಪ್ಪೆರಿಯ ವಾಯಕಣ್ಗಳ್* ಎನ್ನೈಪ್ಪೇದೈಮೈ ಚೆಯ್ದನವೇ|| 8||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಆಲಮಾ ಮರತ್ತಿನಿಲೈ ಮೇಲ್ * ಒರುಬಾಲಕನಾಯ್'}
                            line2={'ಞõÁಲಮೇಳುಂ ಉಣ್ಡಾನ್* ಅರಙ್ಗತ್ತರವಿನಣೈಯಾò* ಕೋಲಮಾ- '}
                            line3={'ಮಣಿಯಾರಮುಂ * ಮುತ್ತುತಾª್ತÀÄಮುಂ ಮುಡಿವಿಲ್ಲದೋರೆಳಿಲ್* '}
                            line4={'ನೀಲಮೇನಿ ಐಯ್ಯೋ * ನಿರೈಕೊಣ್ಡದುಎನ್ನೆಞ್ಜಿನೈಯೇ ||9||'}
                        />

                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'$ ಕೊಣ್ಡಲ್ ವಣ್ಣನೈ * ಕ್ಕೋªಲÀನಾಯ್ ವೆಣ್ಣೈ ಉಣ್ಡವಾಯò * '}
                            line2={'ಎನ್ನುಳ್ಳಮ್ ಕವರ್ನ್ದಾನೈ ** '}
                            line3={' ಅಣ್ಡರ್ ಕೋò * ಅಣಿಯರಙ್ಗò *  '}
                            line4={'ಎನ್ ಅಮುದಿನೈ ಕಂಡ ಕಣ್ಗಳ್ * ಮಟ್ರೊನ್ರಿನೈ ಕ್ಕಾಣಾವೇ ||10||'}
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


export default Amaladipiran;
