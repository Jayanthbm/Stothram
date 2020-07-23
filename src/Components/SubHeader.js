/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
const SubHeader = (props) => {
    let backgroundColor = props.darkmode ? '#D44638' : '#00aff0';
    return (
        <React.Fragment>
            <View
                style={{
                    backgroundColor: backgroundColor,
                    marginBottom: 5
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 20,
                        textAlign: 'center',
                    }}
                >{props.title}</Text>
            </View>
        </React.Fragment>
    );
};

export default SubHeader;