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

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const data = useSelector(state => state);

  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Star />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}

      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#AA0000',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <TouchableOpacity style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }} onPress={() => {
          setSelectedTab(0);
        }}>
          <Image
            source={require('../images/home.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 0 ? '#FFFF00' : '#fff'
            }} />
        </TouchableOpacity>

        <TouchableOpacity style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }} onPress={() => {
          setSelectedTab(1);
        }}>
          <Image
            source={require('../images/shopstar.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 1 ? '#FFFF00' : '#fff'
            }} />
        </TouchableOpacity>

        <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 44,
              height: 44,
              backgroundColor: selectedTab == 2 ? 'green' : '#000',
              borderRadius: 22,
              justifyContent: 'center',
              alignItems: 'center'
            }} onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              source={require('../images/shopping-cart.png')}
              style={{ width: 24, height: 24, tintColor: '#fff' }} />
            <View style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 5,
              right: 5
            }}>
              <Text style={{ color: '#fff', fontWeight: '600' }}>
                {data.Reducers.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }} onPress={() => {
          setSelectedTab(3);
        }}>
          <Image
            source={require('../images/heart.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 3 ? '#FFFF00' : '#fff'
            }} />
          <View style={{
            width: 20,
            height: 20,
            backgroundColor: 'red',
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 15,
            right: 20
          }}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>
              {data.Reducers2.length}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }} onPress={() => {
          setSelectedTab(4);
        }}>
          <Image
            source={require('../images/user.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 4 ? '#FFFF00' : '#fff'
            }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home