import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Product from '../drawer/Product';
import Voucher from '../drawer/Voucher';
import Order from '../drawer/Order';
import CategoryAd from '../drawer/CategoryAd';
import Slider from '../drawer/Slider';
import OrderWait from '../drawer/OrderWait';

const Drawer = createDrawerNavigator();

const Admin = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Product"
      screenOptions={{
        // headerShown: false,
      }}>
      <Drawer.Screen
        name="Quản lý sản phẩm"
        component={Product} />

      <Drawer.Screen
        name="Quản lý đơn hàng"
        component={Order} />

      <Drawer.Screen
        name="Quản lý voucher"
        component={Voucher} />

      <Drawer.Screen
        name="Quản lý loại sản phẩm"
        component={CategoryAd} />

      <Drawer.Screen
        name="Quản lý banner quảng cáo"
        component={Slider} />

      <Drawer.Screen
        name="Quản lí đơn hàng chờ"
        component={OrderWait} />


    </Drawer.Navigator>
  )
}

export default Admin