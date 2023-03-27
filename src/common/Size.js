import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Size = ({item}) => {
  return (
    <TouchableOpacity
      key={item.name}
      onPress={() => setType(item.name)}
      style={type === item.name ? {
        width: 60,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 15,
        backgroundColor: '#009900'
      } : {
        width: 60,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 15,
        backgroundColor: '#BB0000'
      }}>
      <Text style={{ fontSize: 20, color: '#fff' }}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default Size