import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground, Modal, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromCart } from '../redux/actions/Actions';
import CommonButton from '../common/CommonButton';
import { Swipeable } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import CountQuantity from '../common/CountQuantity';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const Cart = () => {
  const [dataCart, setDataCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  // const ref = useRef();
  // const cartData = useSelector(state => state.Reducers);
  // // const dispatch = useDispatch();
  const navigation = useNavigation();
  // console.log(cartData);
  const idUser = firebase.auth().currentUser.uid;
  const total = dataCart.reduce((accumulator, current) => accumulator + current.price * current.quantity, 0);
  const totalStar = dataCart.reduce((accumulator, current) => accumulator + current.star * current.quantity, 0)

  const rightSwipe = () => {
    return (
      <View
        style={{
          width: '25%', height: 120,
          flexDirection: 'row', backgroundColor: 'red',
          justifyContent: 'center', alignItems: 'center',
          marginTop: 5, marginBottom: 5
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

  // const onComponentOpen = (idPro) => {
  //   database().ref('Order/' + idUser ).remove(idPro);
  //   Alert.alert('Xóa thành công.')
  // }

  useEffect(() => {
    database()
      .ref('Order/' + idUser)
      .on('value', snapshot => {
        let arr = [];
        // console.log('User data: ', snapshot.val());
        snapshot.forEach(childSnapshot => {
          var item = childSnapshot.val();
          arr.push({
            id: childSnapshot.key,
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
        // console.log(arr);
      });
  }, [])


  return (
    <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
      <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#AA0000', marginBottom: 10 }}>
        <Image
          style={{ width: 35, height: 35, tintColor: '#fff', marginRight: 15 }}
          source={require('../images/shopping-cart.png')}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>Giỏ hàng của tôi</Text>
      </View>

      {dataCart.length > 0 ? (
        <FlatList
          data={dataCart}
          renderItem={({ item, index }) => {
            return (
              // <Swipeable
              //   renderRightActions={rightSwipe}
              // onSwipeableOpen={() => {
              //   console.log('open');
              //   onComponentOpen(item.id);
              // }}
              // >
              <View style={{
                width: '100%', height: 140,
                flexDirection: 'row', backgroundColor: '#fff',
                justifyContent: 'center', alignItems: 'center',
                marginBottom: 10
              }}>
                <Image
                  src={item.image}
                  style={{ width: '40%', height: '100%', }}
                />
                <ImageBackground
                  source={require('../images/star.png')}
                  style={{ position: 'absolute', top: 5, left: 5, width: 45, height: 45, justifyContent: 'center', alignItems: 'center' }}
                >
                  <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 16 }}>{item.star}</Text>
                </ImageBackground>

                <View style={{
                  width: '45%',
                  height: '100%',
                  justifyContent: 'space-between',
                  padding: 15
                }}>
                  <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                  <Text style={{ color: 'black', fontSize: 18 }}>Size: {item.size}</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'red' }}>{item.price} VNĐ</Text>
                  <Text style={{ color: 'black', fontSize: 18 }}>x{item.quantity}</Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    database().ref('Order/' + idUser + '/' + item.id).remove();
                  }}
                  style={{
                    width: '15%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red'
                  }}
                >
                  <Image
                    source={require('../images/recyclebin.png')}
                    style={{ width: 40, height: 40, tintColor: '#fff' }} />

                </TouchableOpacity>
              </View>
              // </Swipeable>
            )
          }}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Items Added in Cart</Text>
        </View>
      )}
      {dataCart.length > 0 ? (
        <View style={{ marginBottom: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
            <Text style={{ fontSize: 20, color: 'black' }}>Tổng tiền:</Text>
            <Text style={{ fontSize: 20, color: 'black' }}>{total} VNĐ</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
            <Text style={{ fontSize: 20, color: 'black' }}>Điểm tích lũy:</Text>
            <Text style={{ fontSize: 20, color: 'black' }}>{totalStar} Sao</Text>
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
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Checkout</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '30%',
              backgroundColor: '#fff',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10, textAlign: 'center', marginTop: 15 }}>Chọn Phương thức thanh toán</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Checkout')
                }}
                style={{
                  width: '100%',
                  height: 50,
                  elevation: 2,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Text style={{ fontSize: 16 }}>Thanh toán khi nhận hàng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                width: '100%',
                height: 50,
                elevation: 2,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{ fontSize: 16 }}>Quét mã QR</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                width: '100%',
                height: 50,
                elevation: 2,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{ fontSize: 16 }}>Thanh toán online</Text>
              </TouchableOpacity>

            </View>
          </Modal>
        </View>
      ) : null
      }
    </View >
  );
};

export default Cart;