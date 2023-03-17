import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';

const ProductItem = ({ item}) => {
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
                borderRadius: 20,
                elevation: 5,
                width: 200,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
                backgroundColor: '#fff',
                marginBottom: 10,
            }}>
            <View style={{ width: '100%' }}>
                <Image
                    source={item.image}
                    style={{
                        width: '100%',
                        height: 120,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}
                />

                <Text
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        fontSize: 12,
                        color: 'black',
                        fontWeight: '600',
                    }}>
                    {
                        item.title.length > 20
                            ? item.title.substring(0, 20) + '...'
                            : item.title
                    }
                </Text>
                <View
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10,
                    }}>
                    <Text
                        style={{
                            marginTop: 5,
                            fontSize: 18,
                            color: 'red',
                            fontWeight: '600',
                            marginBottom: 10,
                        }}>
                        {item.price + ' VND'}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        width: 40,
                        elevation: 5,
                        height: 40,
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 10,
                        right: 10,
                    }}>
                    <Image
                        source={require('../images/like.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>

                <ImageBackground
                    source={require('../images/star.png')}
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 10,
                        left: 10,
                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: 'red'
                    }}>{item.star}</Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};
export default ProductItem