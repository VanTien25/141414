import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { firebase } from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import { useState } from 'react';

const OrderCustom = () => {
  const idUser = firebase.auth().currentUser.uid;
  const [itemProduct, setItemProduct] = useState([])

  useEffect(() => {
    database()
      .ref('CategoryCustom/')
      .on('value', snapshot => {
        let arr = [];
        snapshot.forEach(childSnapshot => {
          var item = childSnapshot.val();
          arr.push({
            image: item.image,
            size: item.size,
            star: item.star,
          })
        })
        setItemProduct(arr)
      });
  })


  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Chọn mẫu áo</Text>
      <View style={{
        width: '100%',
        height: 120,
        borderWidth: 1,
        marginTop: 5,
        justifyContent: 'center'
      }}>
        <TouchableOpacity style={{
          width: 100,
          height: 100,
          borderRadius: 5,
          borderWidth: 1,
          marginLeft: 15
        }}>
          <Image />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderCustom