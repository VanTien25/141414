import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CommonButton = ({ onPress, title, bgColor, textColor, disabled }) => {
  return (
    <TouchableOpacity
    disabled={disabled}
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50, 
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
      }}
      onPress={() => { onPress(); }}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton