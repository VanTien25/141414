import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import { useEffect } from 'react';
import database from '@react-native-firebase/database';
import { FlatList } from 'react-native';

const CategoryAd = () => {
    const navigation = useNavigation();
    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        database()
            .ref('Category/')
            .on('value', snapshot => {
                let arr = [];
                snapshot.forEach(child => {
                    var item = child.val();
                    arr.push({
                        id: child.key,
                        image: item.image,
                        name: item.name,
                    });
                })
                setListCategory(arr);
            });
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                width: '100%',
                height: 60,
                backgroundColor: '#AA0000',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 15,
                paddingRight: 15,
                alignItems: 'center',
            }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Profile');
                    }}>
                    <Image
                        source={require('../images/back.png')}
                        style={{
                            width: 35,
                            height: 35,
                            tintColor: 'yellow',
                        }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, color: 'yellow', fontWeight: 'bold' }}>Quản lý loại sản phẩm</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('AddCategory');
                    }}
                >
                    <Image
                        source={require('../images/additem.png')}
                        style={{
                            width: 35,
                            height: 35,
                            tintColor: 'yellow'
                        }} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={listCategory}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            height: 100,
                            flexDirection: 'row',
                            borderBottomWidth: 3,
                            borderBottomColor: '#DDDDDD',
                        }}>
                            <Image src={item.image}
                                style={{
                                    width: '25%',
                                    height: '80%',
                                    alignSelf: 'center',
                                    resizeMode: 'contain',
                                }} />
                            <View style={{
                                justifyContent: 'space-evenly',
                                alignItems: 'flex-start',
                                paddingLeft: 15
                            }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mã loại:   {item.id.length > 15 ? item.id.substring(0, 15) + '...' : item.id}</Text>
                                <Text style={{ fontSize: 18 }}>Tên loại:   {item.name}</Text>
                            </View>
                        </View>
                    )
                }} />
        </View>
    )
}

export default CategoryAd