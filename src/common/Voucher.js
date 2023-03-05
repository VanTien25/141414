import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Voucher = () => {
  return (
    <View style={{ flex: 1, marginTop: 15, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View
        style={{
          width: '60%',
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: '#FFFF99',
          borderRadius: 10,
          padding: 10
        }}
      >
        <Image
          source={require('../images/giftbox.png')}
          style={{ width: 50, height: 50 }} />
        <Text
          style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold'
          }}>
          Discount 5%
        </Text>
      </View>
      <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}> = </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#00CC00',
          width: '20%',
          height: 60,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>100</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Voucher