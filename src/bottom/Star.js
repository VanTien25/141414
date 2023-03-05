import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import Voucher from '../common/Voucher'

const Star = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#CCCCCC' }}>

      {/* Header */}
      <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#AA0000' }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Star Shop</Text>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontWeight: '500',
            padding: 5,
          }}
        >
          200
          <Image
            source={require('../images/starpoint.png')}
            style={{
              width: 24,
              height: 24,
            }} />
        </Text>
      </View>

      {/* Voucher */}
      <Voucher/>



    </ScrollView>
  )
}

export default Star