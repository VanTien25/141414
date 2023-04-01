import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';

const Product = () => {
  const [listProduct, setListProduct] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    database()
      .ref('Products/')
      .on('value', snapshot => {
        let arr = [];
        snapshot.forEach(childSnapshot => {
          var item = childSnapshot.val();
          arr.push({
            id: childSnapshot.key,
            image: item.image,
            title: item.title,
            price: item.price,
            category: item.category,
            star: item.star,
            desc: item.desc,
            size: item.size,
          })
        })
        setListProduct(arr);
      });
  }, []);

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
        <Text style={{ fontSize: 18, color: 'yellow', fontWeight: 'bold' }}>Quản lý sản phẩm</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddProduct');
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
        data={listProduct}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AdminDetail', {
                  id: item.id,
                  image: item.image,
                  title: item.title,
                  price: item.price,
                  category: item.category,
                  star: item.star,
                  desc: item.desc,
                  size: item.size,

                })
              }}
              style={{
                width: '100%',
                height: 100,
                flexDirection: 'row',
                borderBottomWidth: 3,
                borderBottomColor: '#DDDDDD',
                backgroundColor: '#fff',
              }}>
              <Image src={item.image}
                style={{
                  width: '25%',
                  height: '90%',
                  resizeMode: 'contain',
                }}
              />

              <View style={{ width: '75%', height: '100%', justifyContent: 'space-evenly', alignItems: 'flex-start', marginLeft: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {
                    item.id.length > 20
                      ? item.id.substring(0, 20) + '...'
                      : item.id
                  }
                </Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {
                    item.title.length > 20
                      ? item.title.substring(0, 20) + '...'
                      : item.title
                  }
                </Text>
              </View>
            </TouchableOpacity>
          )
        }} />

    </View>
  )
}

export default Product