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

const KanninunShiruttamb = ({ navigation }) => {
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
                    title="ಕಣ್ಣಿನುಣ್ ಶಿರುತ್ತಾಮ್ಬು"
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
                            line1={'ಅವಿದಿತ ವಿಷಯಾಂತರಶ್ಶಠಾರೇಃ'}
                            line2={'ಉಪನಿಷದಾಂ ಉಪಗಾನಮಾತ್ರಭೋಗಃ |'}
                            line3={' ಅಪಿ ಚ ಗುಣವಶಾತ್ ತದೇಕಶೇಷೀ  '}
                            line4={' ಮಧುರಕವಿರ್ ಹೃದಯೇ ಮಮಾವಿರಸ್ತು || '}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವೇರೊನ್ರುಮ್ ನಾನರಿಯೇನ್ ವೇದಂ ತಮಿಳ್ಶೆಯ್ದ'}
                            line2={' ಮಾರò ಶಡಗೋಪò ವಣ್ಕುರುಹೂರ್ ಏರೆಙ್ಗಳ್-'}
                            line3={'ವಾಳ್ವಾಮೆನ್ರೇತ್ತುಮ್ ಮಧುರ ಕವಿಯಾರ್ '}
                            line4={'ಎಮ್ಮೈ ಆಳ್ವಾರವರೇ ಅರಣ್ ||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'$ ಕಣ್ಣಿನುಣ್ ಚಿರುತ್ತಾಮ್ಬಿನಾಲ್, ಕಟ್ಟುಣ್ಣ-'}
                            line2={'ಪ್ಪಣ್ಣಿಯ ಪೆರುಮಾಯò ಎನ್ನಪ್ಪನಿಲ್  '}
                            line3={'ನಣ್ಣಿ ತ್ತೆòಕುರುಹೂರ್, ನಮ್ಬಿ ಎನ್ರಕ್ಕಾಲ್ '}
                            line4={'ಅಣ್ಣಿಕ್ಕುಮ್ ಅಮುದೂರುಮ್, ಎನ್ನಾವುಕ್ಕೇ ||1||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನಾವಿನಾಲ್ ನವಿಟ್ರು, ಇನ್ಬಂ ಎಯ್ದಿನೇò  '}
                            line2={'ಮೇವಿನೇò, ಅವò ಪೊನ್ನಡಿ ಮೆಯ್ಮ್ಮೈಯೇ '}
                            line3={'ದೇವು ಮತ್ತರಿಯೇò, ಕುರುಹೂರ್ ನಮ್ಬಿ  '}
                            line4={'ಪಾವಿನಿನ್ನಿಶೈ, ಪಾಡಿತ್ತಿರಿವನೇ ||2||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ತಿರಿತನ್ದಾಹಿಲುಮ್, ದೇವಪಿರಾನುಡೈ '}
                            line2={'ಕ್ಕರಿಯಕೋಲ, ತಿರುವುರುಕ್ಕಾಣ್ಬò ನಾò '}
                            line3={'ಪೆರಿಯವಣ್ ಕುರುಹೂರ್, ನಹರ್ ನಮ್ಬಿಕ್ಕಾಳ್-'}
                            line4={'ಉರಿಯನಾಯ್ ಅಡಿಯೇò, ಪೆಟ್ರ ನನ್ಮೈಯೇ ||3|| '}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನನ್ಮೈಯಾಲ್ ಮಿಕ್ಕ, ನಾನ್ಮರೈಯಾಳರ್ಗಳ್ '}
                            line2={'ಪುನ್ಮೈಯಾಗ, ಕ್ಕರುದುವರಾದಲಿನ್ '}
                            line3={'ಅನ್ನೈಯಾಯ್ ಅತ್ತನಾಯ್, ಎನ್ನೈಯಾಣ್ಡಿಡುಮ್- '}
                            line4={'ತನ್ಮೈಯಾò  ಚಡಗೊಪò ಎò ನಮ್ಬಿಯೇ ||4||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ನಮ್ಬಿನೇò, ಪಿರರ್ ನò ಪೊರುಳ್ ತನ್ನೈಯುಮ್  '}
                            line2={'ನಮ್ಬಿನೇò, ಮಡವಾರೈಯುಮ್ ಮುನ್ನೆಲಾಮ್  '}
                            line3={'ಚೆಮ್ಬೊò ಮಾಡ, ತ್ತಿರುಕ್ಕುರುಗೂರ್ ನಮ್ಬಿಕ್ಕುಅನ್ಬನಾಯ್ '}
                            line4={'ಅಡಿಯೇò, ಚದಿರ್ತೇನ್ ಇನ್ರೇ ||5||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಇನ್ರುತೊಟ್ಟುಮ್, ಎಳುಮೈಯುಮ್ ಎಮ್ಬಿರಾò  '}
                            line2={'ನಿನ್ರು ತò ಪುಗಳ್, ಏತ್ತವರುಳಿನಾನ್ '}
                            line3={'ಕುನ್ರಮಾಡ, ತಿರುಕ್ಕುರುಗೂರ್ ನಮ್ಬಿ  '}
                            line4={'ಎನ್ರುಮ್ ಎನ್ನೈ, ಇಗಳ್ವಿಲನ್ ಕಾಣ್ಮಿನೇ ||6||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಕಣ್ಡು ಕೊಣ್ಡೆನ್ನೈ , ಕ್ಕಾರಿಮಾರಪ್ಪಿರಾನ್  '}
                            line2={'ಪಣ್ಡೈವಲ್ವಿನೈ , ಪಾಟ್ರಿಯರುಳಿನಾನ್ '}
                            line3={'ಎಣ್ತಿಶೈಯುಮ್, ಅರಿಯ ಇಯಮ್ಬುಗೇò '}
                            line4={'ಒಣ್ತಮಿಲ್, ಚ್ಚಡಗೋಪನರುಳೈಯೇ ||7||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಅರುಳ್ ಕೊಣ್ಡಾಡುಮ್, ಅಡಿಯವರ್ ಇನ್ಬುರ   '}
                            line2={'ಅರುಳಿನಾò, ಅವ್ವರುಮರೈಯಿò ಪೊರುಳ್ '}
                            line3={'ಅರುಳ್ಕೊಣ್ಡು , ಆಯಿರಮ್ ಇನ್ತಮಿಳ್ ಪಾಡಿನಾನ್   '}
                            line4={'ಅರುಳ್ ಕಣ್ಡೀರ್, ಇವ್ವುಲಗಿನಿಲ್ ಮಿಕ್ಕದೇ ||8||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಮಿಕ್ಕ ವೇದಿಯರ್, ವೇದತ್ತಿನ್ ಉಟ್ಪೊರುಳ್  '}
                            line2={'ನಿರ್ಕಪ್ಪಾಡಿ, ಎನ್ನೆಞ್ಜುಳ್ ನಿರುತ್ತಿನಾò  '}
                            line3={'ತಕ್ಕ ಚೀರ್, ಚ್ಚಡಗೋಪò ಎನ್ನಮ್ಬಿಕ್ಕು '}
                            line4={'ಆಳ್ ಪುಕ್ಕಕಾದಲ್, ಅಡಿಮೈ ಪ್ಪಯನನ್ರೇ ||9||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'$ ಪಯನನ್ರಾಗಿಲುಮ್, ಪಾಙ್ಗಲ್ಲರಾಗಿಲುಮ್  '}
                            line2={'ಚೆಯಲ್ ನನ್ರಾಗ, ತ್ತಿರುತ್ತಿಪ್ಪಣಿಕೊಳ್ವಾನ್  '}
                            line3={'ಕುಯಿಲ್ನಿನ್ರಾರ್ ಪೊಳಿಲ್ಶೂಳ್, ಕುರುಗೂರ್ನಮ್ಬಿ '}
                            line4={'ಮುಯಲ್ಗಿನ್ರೇನ್, ಉನ್ದನ್ ಮೊಯ್ಕಳರ್ಕನ್ಬೈಯೇ||10||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'$ ಅನ್ಬನ್ತನ್ನೈ , ಅಡೈನ್ದವರ್ಗಟ್ಕೆಲ್ಲಾಂ ಅನ್ಬò '}
                            line2={'ತೆನ್ ಕುರುಹೂರ್, ನಹರ್ ನಮ್ಬಿಕ್ಕು  '}
                            line3={'ಅನ್ಬನಾಯ್, ಮಧುರಕವಿ ಚೊನ್ನಶೊಲ್ ನಮ್ಬುವಾರ್ಪದಿ  '}
                            line4={'ವೈಹುನ್ದಮ್ ಕಾಣ್ಮಿನೇ||11||'}
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


export default KanninunShiruttamb;