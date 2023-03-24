import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../redux/actions/Actions';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';

const MyAddress = () => {
    const [listAddress, setAddress] = useState([])
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const addressList = useSelector(state => state.AddressReducers);
    const dispatch = useDispatch();
    const userId = firebase.auth().currentUser.uid;
    console.log(addressList);

    useEffect(() => {
        database()
            .ref('Address/' + userId)
            .on('value', snapshot => {
                let array = []
                snapshot.forEach(childSnapshot => {
                    var item = childSnapshot.val();
                    array.push({
                        idAdd: childSnapshot.key,
                        name: item.name,
                        phone: item.phone,
                        home: item.home,
                        address: item.address,
                    })
                })
                setAddress(array);
            });
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
                <View
                    style={{
                        width: '100%',
                        height: 60,
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#AA0000'
                    }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 15, color: 'yellow' }}>
                        My Address
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: 15,
                        left: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 15,
                        borderColor: 'yellow',
                        width: 30,
                        height: 30,
                    }}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Image
                        source={require('../images/back.png')}
                        style={{ width: 35, height: 35, tintColor: 'yellow' }} />
                </TouchableOpacity>

                <View style={{ height: 40, width: '100%', alignSelf: 'center', padding: 5 }}>
                    <Text style={{ fontSize: 16, marginLeft: 5 }}>Địa chỉ</Text>
                </View>

                <FlatList
                    data={listAddress}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    width: '100%',
                                    backgroundColor: '#EEEEEE',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 10,
                                }}>
                                <View>
                                    <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>{item.name}</Text>
                                        <Text style={{ fontSize: 18 }}> | </Text>
                                        <Text style={{ fontSize: 18 }}>{item.phone}</Text>
                                    </View>
                                    <Text style={{ color: 'black', marginBottom: 5 }}>{item.home}, {item.address}</Text>
                                </View>
                                <TouchableOpacity
                                    style={{ padding: 7, marginRight: 20, backgroundColor: 'black', borderRadius: 5 }}
                                    onPress={() => {
                                        database().ref('AddAddress/' + userId + '/' + item.idAdd).remove();
                                    }}>
                                    <Text style={{ color: '#fff' }}>Xóa</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />

                <TouchableOpacity
                    style={{
                        marginRight: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 7,
                        flexDirection: 'row',
                        borderTopWidth: 0.2
                    }}
                    onPress={() => {
                        navigation.navigate('AddAddress');
                    }}>
                    <Image
                        source={require('../images/add.png')}
                        style={{ width: 25, height: 25, marginRight: 5, tintColor: 'red' }} />
                    <Text style={{ color: 'red', fontSize: 16 }}>Thêm địa chỉ mới</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default MyAddress;