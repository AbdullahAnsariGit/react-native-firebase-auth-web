import React from 'react';
import {TextInput} from 'react-native';
import {black} from './colors';

const Field = props => {
    const {onChangeText, placeholder} = props
  return (
    <TextInput
      {...props}

      style={{
        borderRadius: 100,
        marginRight: 45,
        color: black,
        marginTop: 20,
        paddingHorizontal: 10,
        width: '80%',
        backgroundColor: 'rgb(220,220,220)',
      }}
      placeholderTextColor={black}></TextInput>
  );
};

export default Field;
// 