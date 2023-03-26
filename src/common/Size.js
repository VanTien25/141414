import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Size = () => {
  return (
    <View style={{
      height: 80, flexDirection: 'row', justifyContent: 'space-between',
      alignItems: 'center', padding: 15
    }}>
      <Text style={{ fontSize: 20, color: 'black' }}>Size: </Text>
      {
        size.map((item) => {
          if (item.quantity <= 0) {
            return (
              <View
                key={item.name}
                style={{
                  width: 60,
                  height: 40,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginLeft: 15,
                  backgroundColor: '#CCCCCC'
                }}
              >
                <Text style={{ fontSize: 20, color: '#fff' }}>{item.name}</Text>
              </View>
            );
          } else {
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
            );
          }
        })
      }
    </View>
  )
}

export default Size