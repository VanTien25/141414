import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';

const Order = () => {
  const navigation = useNavigation();
  const [listUser, setListUser] = useState([]);

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
        console.log(arr);
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
        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 16 }}>Danh sach nguoi dung</Text>
      </View>

      <FlatList
        data={listUser}
        keyExtractor={item => item.idUser}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListOrder', item.idUser)
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

export default Order