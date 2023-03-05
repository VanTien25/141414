import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import ProductItem from '../common/ProductItem';
import { ImageBackground } from 'react-native';

const Category = () => {

  const goDetail = () => {
    navigation.navigate('Detail');
  };
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
      {/* Header */}
      <View style={{ height: 50, backgroundColor: '#AA0000', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Category List</Text>
        <TouchableOpacity
          style={{
            borderRadius: 100,
            position: 'absolute',
            top: 10,
            left: 10,
            backgroundColor: 'yellow'
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../images/back.png')}
            style={{ width: 30, height: 30, tintColor: '#AA0000' }} />
        </TouchableOpacity>
      </View>

      {/* Item Category List */}
      <ScrollView style={{ flex: 1, marginTop: 15 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              goDetail();
            }}
            style={{
              width: '95%',
              height: 100,
              borderRadius: 10,
              flexDirection: 'row',
              backgroundColor: '#fff',
              marginBottom: 10
            }}>
            <Image source={require('../images/Headwear1.jpg')}
              style={{
                width: '40%',
                height: '100%',
                resizeMode: 'contain'
              }} />

            <View style={{ justifyContent: 'space-around', alignItems: 'center', width: '60%' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Headwear 1</Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#AA0000' }}>25.000 VND</Text>
            </View>

            <ImageBackground
              source={require('../images/star.png')}
              style={{
                width: 35,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 5,
                left: 5,
              }}
            >
              <Text style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 14,
                color: 'red'
              }}>20</Text>
            </ImageBackground>
          </TouchableOpacity>


        </View>
      </ScrollView>
    </View>
  )
}

export default Category