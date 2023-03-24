import {
    View,
    Text,
    FlatList,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { addOrder } from '../redux/actions/Actions';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';

const Checkout = ({ route }) => {

    const userId = firebase.auth().currentUser.uid;
    const [listItem, setListItem] = useState([]);
    const [listAddress, setListAddress] = useState([]);
    const navigation = useNavigation();
    const listProduct = route.params.dataCart;

    useEffect(() => {
        database()
            .ref('OrderDetail/' + userId)
            .on('value', snapshot => {
                let arr = [];
                snapshot.forEach(childSnapshot => {
                    var item = childSnapshot.val();
                    arr.push(item);
                })
                setListItem(arr);
            });

        database()
            .ref('Address/' + userId)
            .on('value', snapshot => {
                let arr = [];
                snapshot.forEach(childSnapshot => {
                    var item = childSnapshot.val();
                    arr.push(item);
                })
                setListAddress(arr);
            });
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
            <View style={{ width: '100%', height: 50, backgroundColor: '#AA0000', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: 'yellow', fontSize: 18 }}>Thanh toán</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                }}>
                <Image
                    source={require('../images/back.png')}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: 'yellow'
                    }} />
            </TouchableOpacity>

            <View
                style={{
                    width: '100%', height: 40, alignSelf: 'center',
                    flexDirection: 'row', backgroundColor: '#fff',
                    justifyContent: 'flex-start', alignItems: 'center',
                    paddingLeft: 10
                }}>
                <Image
                    source={require('../images/location.png')}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: 'red',
                        marginRight: 10
                    }} />
                <Text style={{ color: 'red', fontSize: 18 }}>Địa chỉ nhận hàng</Text>
            </View>
            {
                listAddress.map((item) => {
                    return (
                        <View
                            style={{
                                width: '100%',
                                backgroundColor: '#fff',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 10,
                                borderBottomWidth: 4,
                                borderBottomColor: '#DDDDDD',
                                paddingLeft: 15
                            }}>
                            <View>
                                <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                                    <Text style={{ fontSize: 20 }}> | </Text>
                                    <Text style={{ fontSize: 20 }}>{item.phone}</Text>
                                </View>
                                <Text style={{ marginBottom: 5, fontSize: 20 }}>{item.home}, {item.address}</Text>
                            </View>
                        </View>
                    )
                })
            }
            {
                listProduct.map((item) => {
                    return (
                        <View style={{
                            width: '100%', height: 100, borderBottomWidth: 3,
                            flexDirection: 'row', backgroundColor: '#fff', borderBottomColor: '#DDDDDD',
                            justifyContent: 'space-between', alignItems: 'center',
                        }}>
                            <Image
                                src={item.image}
                                style={{ width: '40%', height: '85%', resizeMode: 'contain' }}
                            />
                            <ImageBackground
                                source={require('../images/star.png')}
                                style={{ position: 'absolute', top: 5, left: 5, width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 14 }}>{item.star}</Text>
                            </ImageBackground>

                            <View style={{
                                width: '60%',
                                height: '100%',
                                justifyContent: 'space-between',
                                padding: 10
                            }}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                                <Text style={{ color: 'black', fontSize: 18 }}>Size: {item.size}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'red' }}>{item.price} VNĐ</Text>
                                    <Text style={{ color: 'black', fontSize: 18 }}>x{item.quantity}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })
            }

            <View style={{ backgroundColor: '#fff', borderBottomColor: '#DDDDDD', borderBottomWidth: 4 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                    <Text style={{ fontSize: 20, }}>Điểm tích lũy:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginRight: 5 }}>{route.params.totalStar}</Text>
                        <Image
                            source={require('../images/star.png')}
                            style={{ width: 25, height: 25 }} />
                    </View>

                </View>
            </View>

            <View style={{
                backgroundColor: '#fff', borderBottomColor: '#DDDDDD', paddingLeft: 10,
                borderBottomWidth: 4, height: 40, justifyContent: 'center', alignItems: 'flex-start'
            }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Thanh toán khi nhận hàng</Text>
            </View>

            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    alignItems: 'center',
                    height: 70,
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    elevation: 5,
                }}>
                <View style={{
                    width: '75%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    backgroundColor: '#fff',
                    paddingRight: 15
                }}>
                    <Text style={{ fontSize: 18 }}>Tổng thanh toán</Text>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: 'red' }}>₫{route.params.total}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        addToPay();
                    }}
                    style={{
                        width: '25%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#AA0000'
                    }}>
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}>Đặt hàng</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
};

export default Checkout;