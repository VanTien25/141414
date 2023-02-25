import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Size = () => {
  return (
    <View style={{
      height: 60, flexDirection: 'row', justifyContent: 'space-between',
      alignItems: 'center', padding: 10, backgroundColor: '#fff', borderRadius: 5,
      marginTop: 15
    }}>
      <Text style={{ fontSize: 20, color: 'black' }}>Size: </Text>
      <TouchableOpacity
        style={{
          width: 70,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#BB0000'
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>S</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 70,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#BB0000'
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>M</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 70,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#BB0000'
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>L</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 70,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#BB0000'
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>XL</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Size