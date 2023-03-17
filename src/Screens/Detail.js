import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground, Image, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import CountQuantity from '../common/CountQuantity';
import Size from '../common/Size';
import CommonButton from '../common/CommonButton';
import AddDetail from '../common/AddDetail';
import { Alert } from 'react-native';
import database, { firebase } from '@react-native-firebase/database';

const Detail = ({ route, navigation }) => {
  const [userId, setUserId] = useState(route.params.idUser);
  const [listData, setData] = useState();
  let [quantity, setQuantity] = useState(1);
  // const [idUser, setIdUser] = useState(route.params.idUser);
  const [size, setSize] = useState('');

  useEffect(() => {
    getItem();
  }, [])

  const getItem = () => {
    database()
      .ref('Users/' + userId)
      .on('value', snapshot => {
        let listUser = [];
        snapshot.forEach(childSnapshot => {
          var childData = childSnapshot.val();
          listUser.push(childData);
          console.log(childData.cart);
        });
        
      });
  }

  const handleAddToCart = () => {
    database()
      .ref('Users/' + userId)
      .on('value', snapshot => {
        const data = snapshot.val();
        setData(data);
      });
    const user = data.cart;
    console.log(user);

    // database()
    //   .ref('Users/' + idUser)
    //   .update({
    //     cart: [
    //       {
    //         idUser,
    //         id: route.params.id,
    //         title: route.params.title,
    //         price: route.params.price,
    //         size: size,
    //         quantity: quantity,
    //         star: route.params.star,

    //       }
    //     ]
    //   })
    //   .then(() => Alert.alert('Data updated.'));
  }

  const subtraction = () => {
    setQuantity(quantity - 1);
  }

  const addition = () => {
    setQuantity(quantity + 1);
  }

  const getSize = (item) => {
    setSize(item.name);
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={route.params.image}
          style={{
            width: '100%',
            height: 250,
            resizeMode: 'contain',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 10
          }}
        />

        <TouchableOpacity
          style={{
            width: 50,
            elevation: 5,
            height: 50,
            backgroundColor: '#999999',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 20,
            left: 20,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require('../images/back.png')}
            style={{ width: 24, height: 24, }}
          />
        </TouchableOpacity>

        <ImageBackground
          source={require('../images/star.png')}
          style={{
            width: 50,
            height: 50,
            position: 'absolute',
            top: 20,
            right: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>{route.params.star}</Text>
        </ImageBackground>

        {/* Title */}
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            marginLeft: 15,
            textAlign: 'left',
            marginTop: 15,
            marginBottom: 15,
          }}>
          {route.params.title}
        </Text>


        {/* Price */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 15,
            color: 'red',
            textAlign: 'left',
          }}>
          {route.params.price} VNĐ
        </Text>

        <View style={{ height: 1, borderWidth: 0.65, borderColor: '#BBBBBB', marginTop: 10, marginBottom: 10 }} />

        {/* Size */}
        <View style={{
          height: 80, flexDirection: 'row', justifyContent: 'space-between',
          alignItems: 'center', padding: 15
        }}>
          <Text style={{ fontSize: 20, color: 'black' }}>Size: </Text>
          <FlatList
            data={route.params.size}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    getSize(item);
                  }}
                  style={{
                    width: 60,
                    height: 40,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginLeft: 15,
                    backgroundColor: '#BB0000'
                  }}
                >
                  <Text style={{ fontSize: 20, color: '#fff' }}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />

        </View>

        <View style={{ height: 1, borderWidth: 0.5, borderColor: '#BBBBBB', marginTop: 5, marginBottom: 10 }} />

        {/* Quantity */}
        <View style={{
          height: 80,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
        }}>
          <Text style={{ fontSize: 20, color: 'black' }}>Số Lượng: </Text>
          <View style={{
            width: 130, height: 40, borderRadius: 8,
            flexDirection: 'row', padding: 10, borderWidth: 1.5,
            justifyContent: 'center', alignItems: 'center',
          }}>
            {
              quantity <= 1 ? (
                <View
                  onPress={() => {
                    subtraction();
                  }}
                  style={{
                    width: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../images/sub.png')}
                    style={{ width: 26, height: 26, tintColor: 'grey' }} />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    subtraction();
                  }}
                  style={{
                    width: 35,
                    justifyContent: 'center',
                    alignItems: 'center',

                  }}>
                  <Image
                    source={require('../images/sub.png')}
                    style={{ width: 26, height: 26 }} />
                </TouchableOpacity>
              )
            }
            <View style={{
              width: 60,
              height: 40,
              borderWidth: 1,
              textAlign: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{quantity}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                addition();
              }}
              style={{
                width: 35,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Image
                source={require('../images/add.png')}
                style={{ width: 26, height: 26 }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 1, borderWidth: 0.5, borderColor: '#BBBBBB', marginTop: 5, marginBottom: 10 }} />

        {/* Desc */}
        <View style={{ flex: 1, marginBottom: 60 }}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              margin: 15
            }}>Mô tả</Text>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              margin: 15
            }}
          >
            {route.params.desc}
          </Text>
        </View>

      </ScrollView>

      {/* Button Add Detail */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          alignItems: 'center',
          height: 50,
          flexDirection: 'row',
          backgroundColor: '#fff',
          elevation: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            handleAddToCart();
          }}
          style={{
            width: '75%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#AA0000'
          }}>
          <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '25%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <Image
            source={require('../images/like.png')}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Detail