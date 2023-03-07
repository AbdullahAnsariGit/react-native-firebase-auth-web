import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'

export default function Btn({ bgColor, btnLabel, textColor,Press}) {
    return (
        <TouchableOpacity onPress={Press} style={{backgroundColor: bgColor, borderRadius: 100,
         alignItems: 'center',
          width: 280, height:40, 
          padding:5,
          marginRight:35
          }}>

            <Text style={{ color: textColor, fontSize:22, fontWeight: 'bold'}}>
                {btnLabel}
            </Text>

        </TouchableOpacity>
    );
}
