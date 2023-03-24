import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../redux/actions/Actions';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';
import { Swipeable } from 'react-native-gesture-handler';

const MyAddress = () => {
    const [listAddress, setAddress] = useState([])
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const addressList = useSelector(state => state.AddressReducers);
    const dispatch = useDispatch();
    const userId = firebase.auth().currentUser.uid;
    console.log(addressList);

    const rightSwipe = () => {
        return (
            <View
                style={{
                    width: '100%',
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    borderBottomWidth: 4,
                    borderBottomColor: '#DDDDDD'
                }}>
                <Image
                    source={require('../images/recyclebin.png')}
                    style={{
                        width: 40,
                        height: 40,
                        tintColor: '#fff',
                    }} />
            </View>
        )
    };

    const onComponentOpen = (id) => {
        database().ref('Address/' + userId + '/' + id).remove();
        Alert.alert('Xóa thành công.')
    }

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
                        Địa chỉ
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

                <FlatList
                    data={listAddress}
                    renderItem={({ item, index }) => {
                        return (
                            <Swipeable
                                renderRightActions={rightSwipe}
                                onSwipeableOpen={() => {
                                    onComponentOpen(item.idAdd);
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#fff',
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        padding: 10,
                                        borderBottomWidth: 4,
                                        borderBottomColor: '#DDDDDD'
                                    }}>
                                    <View>
                                        <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>{item.name}</Text>
                                            <Text style={{ fontSize: 18 }}> | </Text>
                                            <Text style={{ fontSize: 18 }}>{item.phone}</Text>
                                        </View>
                                        <Text style={{ color: 'black', marginBottom: 5 }}>{item.home}, {item.address}</Text>
                                    </View>
                                </TouchableOpacity>
                            </Swipeable>
                        );
                    }}
                />

                <TouchableOpacity
                    style={{
                        width: '100%',
                        marginRight: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 7,
                        flexDirection: 'row',
                        borderTopWidth: 0.2,
                        backgroundColor: '#fff',
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