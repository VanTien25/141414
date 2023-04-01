import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';

const OrderWait = () => {
  const navigation = useNavigation();
  const [listUser, setListUser] = useState([]);
  console.log(listUser);

  useEffect(() => {
    database()
      .ref('User/')
      .on('value', snapshot => {
        let arr = [];
        snapshot.forEach(childSnap => {
          var item = childSnap.val();
          arr.push({
            idUser: childSnap.key,
            email: item.email,
          })
        })
        setListUser(arr);
      });
  }, [])
  

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 60,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 16 }}>Danh sách người dùng</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}
        style={{
          position: 'absolute',
          top: 15,
          left: 15,
        }}>
        <Image
          source={require('../images/back.png')}
          style={{
            width: 35,
            height: 35,
            tintColor: 'yellow',
          }} />
      </TouchableOpacity>

      <FlatList
        data={listUser}
        keyExtractor={item => item.idUser}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListWait', item.idUser)
              }}
              style={{
                width: '100%',
                height: 80,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15,
                borderBottomWidth: 3,
                borderBottomColor: '#DDDDDD',
              }}>
              <Text style={{ fontWeight: 'bold', marginRight: 30, color: 'red', fontSize: 18 }}>{index + 1}</Text>
              <Text style={{ fontSize: 20, marginRight: 20 }}>Email:   {item.email}</Text>
            </TouchableOpacity>
          )
        }} />
    </View>
  )
}

export default OrderWait