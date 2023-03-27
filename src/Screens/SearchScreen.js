import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import database from '@react-native-firebase/database';

const SearchScreen = () => {
    const navigation = useNavigation();
    const [listSearch, setListSearch] = useState([]);

    useEffect(() => {
        database()
            .ref('Products/')
            .on('value', snapshot => {
                let arr = [];
                snapshot.forEach(childSnapshot => {
                    var item = childSnapshot.val();
                    arr.push({
                        id: childSnapshot.key,
                        category: item.category,
                        title: item.title,
                        price: item.price,
                        image: item.image,
                        size: item.size,
                        star: item.star,
                        desc: item.desc,
                    })
                })
                setListSearch(arr);
            });
    }, [])

    return (
        <View
            style={{
                width: '100%',
                height: 70,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderBottomWidth: 3,
                borderBottomColor: '#DDDDDD',
            }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Image
                    source={require('../images/back.png')}
                    style={{
                        width: 35,
                        height: 35,
                        tintColor: 'red',
                    }} />
            </TouchableOpacity>
            <View
                style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: 'red',
                    paddingLeft: 10,
                    width: '85%',
                    height: '70%',
                }}>
                <TextInput
                    placeholder='Bạn muốn tìm gì?'
                    style={{
                        width: '85%',
                        height: '90%',
                    }} />
                <TouchableOpacity
                    style={{
                        backgroundColor: 'red',
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image source={require('../images/search.png')}
                        style={{
                            width: '50%',
                            height: '50%',
                            tintColor: '#fff'
                        }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchScreen