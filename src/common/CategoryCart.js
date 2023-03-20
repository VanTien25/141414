import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';

const CategoryCart = ({ item }) => {
    const navigation = useNavigation();


    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Detail',
                    {
                        idUser: firebase.auth().currentUser.uid,
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
                width: '94%',
                height: 100,
                alignSelf: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                elevation: 5,
                borderRadius: 10,
                backgroundColor: '#fff',
                marginBottom: 10
            }}
        >
            <Image
                src={item.image}
                style={{
                    width: '52%',
                    height: '100%',
                    resizeMode: 'contain',
                }}
            />

            <ImageBackground
                source={require('../images/star.png')}
                style={{
                    width: 45,
                    height: 45,
                    position: 'absolute',
                    top: 5,
                    left: 5,
                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>{item.star}</Text>
            </ImageBackground>

            <View
                style={{
                    width: '52%',
                    height: '100%',
                    justifyContent: 'space-around',
                    alignItems: 'flex-start',
                }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
                    {
                        item.title.length > 15
                            ? item.title.substring(0, 15) + '...'
                            : item.title
                    }</Text>
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>{item.price} VND</Text>
            </View>

        </TouchableOpacity>
    )
}

export default CategoryCart