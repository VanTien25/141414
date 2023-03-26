import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground, Modal, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import CommonButton from '../common/CommonButton';
import { Swipeable } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import CountQuantity from '../common/CountQuantity';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const Cart = () => {
  const [dataCart, setDataCart] = useState([]);
  const navigation = useNavigation();
  const idUser = firebase.auth().currentUser.uid;
  const total = dataCart.reduce((accumulator, current) => accumulator + current.price * current.quantity, 0);
  const totalStar = dataCart.reduce((accumulator, current) => accumulator + current.star * current.quantity, 0)

  const rightSwipe = () => {
    return (
      <View
        style={{
          width: '100%', height: 100, borderBottomWidth: 3,
          backgroundColor: 'red', borderBottomColor: '#DDDDDD',
          justifyContent: 'center', alignItems: 'center',
        }}>
        <Image
          source={require('../images/recyclebin.png')}
          style={{
            width: 40,
            height: 40,
            tintColor: '#fff',
          }} />
      </View>
    )
  };

  const onComponentOpen = (idPro) => {
    database().ref('Cart/' + idUser + '/' + idPro).remove();
    alert('Xóa thành công.');
  }

  useEffect(() => {
    database()
      .ref('Cart/' + idUser)
      .on('value', snapshot => {
        let arr = [];
        snapshot.forEach(childSnapshot => {
          var item = childSnapshot.val();
          arr.push({
            id: childSnapshot.key,
            idProduct: item.itemPro.id,
            title: item.itemPro.title,
            price: item.itemPro.price,
            image: item.itemPro.image,
            star: item.itemPro.star,
            desc: item.itemPro.desc,
            size: item.itemPro.size,
            quantity: item.itemPro.quantity,
          })
        })
        setDataCart(arr);
      });
  }, [])


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{
        width: '90%', height: 45, flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
        backgroundColor: '#AA0000', borderBottomLeftRadius: 50,
        borderBottomEndRadius: 50
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#fff' }}>Giỏ hàng của tôi</Text>
      </View>

      {dataCart.length > 0 ? (
        <FlatList
          data={dataCart}
          renderItem={({ item, index }) => {
            return (
              <Swipeable
                renderRightActions={rightSwipe}
                onSwipeableOpen={() => {
                  onComponentOpen(item.id);
                }}
              >
                <View style={{
                  width: '100%', height: 100, borderBottomWidth: 3,
                  flexDirection: 'row', backgroundColor: '#fff', borderBottomColor: '#DDDDDD',
                  justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <Image
                    src={item.image}
                    style={{ width: '40%', height: '85%', resizeMode: 'contain' }}
                  />
                  <ImageBackground
                    source={require('../images/star.png')}
                    style={{ position: 'absolute', top: 5, left: 5, width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 14 }}>{item.star}</Text>
                  </ImageBackground>

                  <View style={{
                    width: '60%',
                    height: '100%',
                    justifyContent: 'space-between',
                    padding: 10
                  }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{ color: 'black', fontSize: 18 }}>Size: {item.size}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'red' }}>{item.price} VNĐ</Text>
                      <Text style={{ color: 'black', fontSize: 18 }}>x{item.quantity}</Text>
                    </View>
                  </View>
                </View>
              </Swipeable>
            )
          }}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Không có sản phẩm nào trong giỏ hàng</Text>
        </View>
      )}
      {dataCart.length > 0 ? (
        <View style={{ backgroundColor: '#FFFFCC' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 7 }}>
            <Text style={{ fontSize: 20, }}>Tổng tiền:</Text>
            <Text style={{ fontSize: 20, }}>{total} VNĐ</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 7 }}>
            <Text style={{ fontSize: 20, }}>Điểm tích lũy:</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, marginRight: 5 }}>{totalStar}</Text>
              <Image
                source={require('../images/star.png')}
                style={{ width: 25, height: 25 }} />
            </View>

          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              height: 50,
              borderRadius: 10,
              alignSelf: 'center',
              marginBottom: 5
            }}
            onPress={() => {
              navigation.navigate('Checkout', {
                total: total,
                totalStar: totalStar,
                dataCart,

              });
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      ) : null
      }
    </View >
  );
};

export default Cart;