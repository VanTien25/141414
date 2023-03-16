import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

const Category = ({ route }) => {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
      {/* Header */}
      <View style={{ height: 70, backgroundColor: '#AA0000', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{route.params.item}</Text>
        <TouchableOpacity
          style={{
            borderRadius: 100,
            position: 'absolute',
            top: 15,
            left: 10,
            backgroundColor: 'yellow'
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../images/back.png')}
            style={{ width: 40, height: 40, tintColor: '#AA0000' }} />
        </TouchableOpacity>
      </View>

      {/* Item Category List */}
      <FlatList
        data={route.params.list}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Detail',
                    {
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      size: item.size,
                      star: item.star,
                      desc: item.desc,
                    })
                }}
                style={{
                  width: '95%',
                  height: 120,
                  borderRadius: 10,
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  marginBottom: 5
                }}>
                <Image source={item.image}
                  style={{
                    width: '40%',
                    height: '100%',
                    resizeMode: 'contain'
                  }} />

                <View style={{ justifyContent: 'space-around', alignItems: 'center', width: '60%' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{item.title}</Text>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#AA0000' }}>{item.price + ' VNĐ'} </Text>
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
                  }}>{item.star}</Text>
                </ImageBackground>
              </TouchableOpacity>


            </View>
          )
        }
        }
      />
    </View>
  )
}

export default Category