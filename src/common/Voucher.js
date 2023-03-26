import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Voucher = ({ item }) => {
  const idUser = firebase.auth().currentUser.uid;

  return (
    <TouchableOpacity
      onPress={() => {
        handleBuy();
        database()
          .ref('Myvoucher/' + idUser)
          .push()
          .set({
            title: item.title,
            value: item.value,
            price: item.price,
            quantity: 1
          })
          .then(() => alert('Đổi thành công.'));

      }}
      style={{ flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View
        style={{
          width: '99%',
          height: 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: '#FFFF99',
          borderRadius: 10,
          padding: 10
        }}
      >
        <View style={{
          width: '30%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            source={require('../images/giftbox.png')}
            style={{ width: 50, height: 50 }} />
          <Text
            style={{
              color: 'green',
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold'
            }}>
            {item.price}
          </Text>
        </View>

        <View style={{
          width: '70%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text
            style={{
              color: 'red',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold'
            }}>
            {item.title}
          </Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default Voucher