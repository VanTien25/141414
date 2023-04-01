import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react';
import database from '@react-native-firebase/database';
import { useState } from 'react';
import { FlatList } from 'react-native';


const Voucher = () => {
  const [listVoucher, setListVoucher] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    database()
      .ref('Voucher/')
      .on('value', snapshot => {
        let arr = [];
        snapshot.forEach(child => {
          var item = child.val();
          arr.push({
            id: child.key,
            title: item.title,
            price: item.price,
            value: item.value,
          });
        })
        setListVoucher(arr);
      });
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 60,
        backgroundColor: '#AA0000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
      }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image
            source={require('../images/back.png')}
            style={{
              width: 35,
              height: 35,
              tintColor: 'yellow',
            }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, color: 'yellow', fontWeight: 'bold' }}>Quản lý voucher</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddVoucher');
          }}
        >
          <Image
            source={require('../images/additem.png')}
            style={{
              width: 35,
              height: 35,
              tintColor: 'yellow'
            }} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={listVoucher}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return (
            <View style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: 15,
              borderBottomWidth: 5,
              borderBottomColor: '#CCCCCC',
            }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mã sản phẩm:   {item.id}</Text>
              <Text style={{ fontSize: 20 }}>Tiêu đề:   {item.title}</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>Giá:   {item.price}</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue' }}>Giá khuyến mãi:   {item.value}</Text>
            </View>
          )
        }} />

    </View>
  )
}

export default Voucher