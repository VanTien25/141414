import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import CartItem from '../common/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromCart } from '../redux/actions/Actions';
import CommonButton from '../common/CommonButton';
import { Swipeable } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import CountQuantity from '../common/CountQuantity';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log(cartData);
  return (
    <View style={{ flex: 1 }}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <CartItem
                onAddWishlist={x => {
                  dispatch(addToWishlist(x));
                }}
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Items Added in Cart</Text>
        </View>
      )}
      {cartData.length > 0 ? (
        <View style={{ marginBottom: 80 }}>
          <CommonButton
            bgColor={'green'}
            textColor={'#fff'}
            title={'Checkout'}
            onPress={() => {


              navigation.navigate('Checkout');
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;