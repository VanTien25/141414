import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import CountQuantity from '../common/CountQuantity';
import Size from '../common/Size';
import CommonButton from '../common/CommonButton';

const Detail = ({ onAddWishlist, item}) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginBottom: 20 }}>
        <Image
          source={require('../images/Headwear.webp')}
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
          }}>
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
          <Text style={{ fontWeight: 'bold' }}>20</Text>
        </ImageBackground>


        <Text
          style={{
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
            marginTop: 15,
          }}>
          Headwear Man UTD
        </Text>

        <Text
          style={{
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
            marginTop: 15,
          }}>
          280.000 VND
        </Text>

        <Size />

        <View style={{
          height: 60,
          backgroundColor: '#fff',
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10
        }}>
          <Text style={{ fontSize: 20, color: 'black' }}>Số Lượng: </Text>
          <CountQuantity />
        </View>

        <View style={{ flex: 1, marginTop: 15, backgroundColor: '#fff', padding: 10 }}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              margin: 15
            }}>Description</Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              margin: 15
            }}
          >
            A foundational component for inputting text into the app via a keyboard.
            Props provide configurability for several features, such as auto-correction, auto-capitalization,
            placeholder text, and different keyboard types, such as a numeric keypad.
          </Text>
        </View>

        <View style={{ flex: 1, marginTop: 15, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 50,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text style={{ color: '#fff' }}>Add To Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 50,
              elevation: 5,
              height: 50,
              backgroundColor: '#fff',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              onAddWishlist(item);
            }}>
            <Image
              source={require('../images/like.png')}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Detail