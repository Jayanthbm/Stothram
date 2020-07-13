/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
const Header = (props) => {
  let backgroundColor = props.darkmode ? '#00aff0' : '#D44638';
  return (
    <React.Fragment>
      <View
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 30,
            textAlign: 'center',
          }}
        >{props.title}</Text>
      </View>
    </React.Fragment>
  );
};

export default Header;
