import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Loader from '../common/Loader'
import { TouchableOpacity } from 'react-native'
import Main from '../bottom/Main'
import Star from '../bottom/Star'
import Cart from '../bottom/Cart'
import Wishlist from '../bottom/Wishlist'
import Profile from '../bottom/Profile'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '@react-navigation/stack'

const Home = () => {
  // const [selectedTab, setSelectedTab] = useState(0);

  // const data = useSelector(state => state);

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFCC33',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
          shadowColor: '#7F5DF0',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5
        }
      }}
    >
      <Tab.Screen
        name="Home" component={Main}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              source={require('../images/home.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#AA0000' : 'black',
              }} />
        }} />

      <Tab.Screen
        name="Star" component={Star}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              source={require('../images/shopstar.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#AA0000' : 'black',
              }} />
        }} />

      <Tab.Screen
        name="Cart" component={Cart}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              source={require('../images/shopping-cart.png')}
              style={{ width: 30, height: 30, tintColor: focused ? '#AA0000' : 'black', }} />
        }} />

      <Tab.Screen
        name="Wishlist" component={Wishlist}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              source={require('../images/heart.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#AA0000' : 'black',
              }} />
        }} />

      <Tab.Screen
        name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              source={require('../images/user.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#AA0000' : 'black',
              }} />
        }} />
    </Tab.Navigator>
  )
}

export default Home