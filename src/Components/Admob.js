/* eslint-disable prettier/prettier */
import React from 'react';
import { BannerAd, BannerAdSize } from '@react-native-firebase/admob';

const Admob = (props) => {
  if (props.type === 'banner') {
    return (
      <React.Fragment>
        <BannerAd
          unitId={props.unitId}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </React.Fragment>
    );
  }
  return null;
};

export default Admob;
