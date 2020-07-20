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

const Shatumurai = ({ navigation }) => {
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
                    title="ಶಾತ್ತುಮರೈ"
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
                            line1={'ತಿರುಪ್ಪಾವೈ'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಶಿತ್ತಂ ಶಿರುಕಾಲೇ ವಂದುನ್ನೈ ಶೇವಿತ್ತು,'}
                            line2={'ಉನ್ ಪೋತ್ತಾಮರೈ ಯಡಿಯೇ ಪೋತ್ತುಂ ಪೋರುಳ್ ಕೇಳಾಯ್,'}
                            line3={'ಪೆತ್ತಂ ಮೇಯ್ ತುಣ್ಣುಂ ಕುಲತ್ತೀಲ್ ಪಿರಂದು,'}
                            line4={'ನೀಕುತ್ತೇವಲಂಗಳೈ ಕೊಳ್ಳಾಮಲ್ ಪೋಗಾದು,'}
                            line5={'ಇತ್ತೈಪರ್ರೈಕೊಳ್ವಾನನ್ನು ಕಾಣ್ ಗೋವಿಂದಾ,'}
                            line6={'ಎತೈಕ್ಕುಂ ಏಳ್ ಏಳ್ ಪಿರವಿಕ್ಕುಂ,'}
                            line7={'ಉಂದನ್ನೋಡುತೋ ಮೇಯಾವೋಂ ಉನಕ್ಕೇ ನಾಮಾಳ್ ಚ್ಚೈವೋಂ ,'}
                            line8={'ಮತೈನಂಕಾಮಂಗಳ್ ಮಾತ್ತೇಲೋರೆಂಬಾವಾಯ್'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಂಗಕ್ಕಡಲ್ ಕಡೈನ್ಧ.ಮಾಧಾವನೇ ಕೇಶವನೈ,'}
                            line2={'ತಿಂಗಳ್ ತಿರುಮುಗತ್ತುಚ್ಚೇಯೀಡೈಯಾಲ್ ಶನ್ನಿರೈಂಜಿ,'}
                            line3={'ಅಂಗಪ್ಪರೈಗೊಂಡವಾತ್ರೈ ,'}
                            line4={'ಅಣಿಪುದುವೈ ಪೆಂಗಮಲತ್ತಂಡೆರಿಯಲ್ ಪಟ್ಟರ್ ಪಿರಾನ್ ಗೋದೈಶೊನ್ನ ,'}
                            line5={'ಶಂಗತ್ತಮಿ ಮಾಲೈಮುಪ್ಪಡುಂ ತಪ್ಪಾಮೇ,'}
                            line6={'ಇಂಗುಪರೀಶು ರೈಪ್ಪಾರೀರಿರೆಂಡು ಮಾಲ್ ವರೈತ್ತೊಳ್,'}
                            line7={'ಶೆಂಗಣ್ ತಿರುಮುಗತ್ತು ಚ್ಚೇಲ್ವತ್ತಿರುಮಾಲಾಲ್,'}
                            line8={'ಎಂಗುಂ ತಿರುವರುಳ್ ಪೆತ್ತು-ಇರುಬರುವೆರೆಂಬವಾಯ್'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ತಿರುಪ್ಪಲ್ಲಾಂಡು'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ಪಲ್ಲಾಂಡು ಪಲ್ಲಾಂಡು ಪಲಾ¬್ಲÄರತಾಂ್ತಡು,ಪಲಕೋಡಿ ನೂರಾಯಿರಂ,ಮಲಾಂ್ಲಡ ತಿಣ್ತೋಳ್ ಮಣಿವಣ್ಣಾ, ಉನ್ಚೇವಡಿ ಚೆವ್ವಿತಿರುಕ್ಕಾಪ್ಪು || 1||'}
                            line2={'ಅಡಿಯೋಮೋಡುಂ ನಿನ್ನೋಡುಂ, ಪಿರಿವಿನ್ರಿ ಆಯಿರಂ ಪಲಾಂ್ಲಡು'}
                            line3={'ವಡಿವಾಯ್ ನಿನ್ವಲ ಮಾರ್ಬಿನಿಲ್, ವಾಳ್ಗಿನ್ರ ಮಂಗೈಯುಂ ಪಲಾಂ್ಲಡು'}
                            line4={'ವಡಿವಾರ್ ಚೋದಿ ವಳತ್ತುರೈಯುಂ, ಚುಡರಾಳಿಯುಂ ಪಲಾಂ್ಲಡು'}
                            line5={'ಪಡೈಪೋರ್ಪುಕ್ಕು ಮುಳಂಗುಂ, ಅಪ್ಪಾಂಜಚನ್ನಿಯಮುಂ ಪಲಾಂ್ಲಡೇ||2||'}
                        />
                        <St
                            color={textColor}
                            fontSize={font}
                            line1={'ವಾಳಿತ್ತಿರುನಾಮಮ್'}
                        />
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


export default Shatumurai;
