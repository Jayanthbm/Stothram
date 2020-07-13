/* eslint-disable prettier/prettier */
import React from 'react';
import { BannerAd, BannerAdSize } from '@react-native-firebase/admob';

let adUnits = ['ca-app-pub-0714649342045057/8222174259', 'ca-app-pub-0714649342045057/5615643477', 'ca-app-pub-0714649342045057/1676398465', 'ca-app-pub-0714649342045057/6338246941'];
const Admob = () => {
  return (
    <BannerAd
      unitId={adUnits[Math.floor(Math.random() * adUnits.length)]}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
};

export default Admob;
