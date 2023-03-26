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
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const Checkout = ({ route }) => {
    const [total, setTotal] = useState(route.params.total);
    const userId = firebase.auth().currentUser.uid;
    const [listItem, setListItem] = useState([]);
    const [type, setType] = useState('');
    const [addressPay, setAddressPay] = useState([]);
    const [listAddress, setListAddress] = useState([]);
    const [listVoucher, setListVoucher] = useState([]);
    const navigation = useNavigation();
    const listProduct = route.params.dataCart;

    var idProduct = listProduct.map((item) => {
        database()
            .ref('Product/' + userId + '/' + item.id)
            .on('value', snapshot => {
                let arr = [];
                snapshot.forEach(childSnapshot => {
                    var item = childSnapshot.val();
                    arr.push({
                        item,
                    })
                    console.log(arr);
                })
            });
    })


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

        database()
            .ref('Myvoucher/' + userId)
            .on('value', snapshot => {
                let arr = [];
                snapshot.forEach(childSnapshot => {
                    var item = childSnapshot.val();
                    arr.push(item);
                })
                setListVoucher(arr);
            });
    }, []);

    const chooseAddress = (item) => {
        setAddressPay(item);
    }

    const totalCoin = (value) => {
        if (route.params.total - value >= 0) {
            route.params.total - value
            setTotal(route.params.total - value);
        }
    }


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
                        <TouchableOpacity
                            onPress={() => setType(item)}
                            style={type === item ? {
                                width: '100%',
                                backgroundColor: '#fff',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 10,
                                borderBottomWidth: 4,
                                borderWidth: 1,
                                borderColor: 'red',
                                borderBottomColor: '#DDDDDD',
                                paddingLeft: 15
                            } : {
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
                        </TouchableOpacity>
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

            <View style={{
                width: '100%', height: 140,
                justifyContent: 'space-between',
                backgroundColor: '#fff', borderBottomWidth: 4, borderBottomColor: '#DDDDDD'
            }}>
                <Text style={{ fontSize: 20, marginLeft: 10 }}>Danh sách voucher</Text>
                <View style={{ width: '100%', height: 100 }}>
                    <FlatList
                        data={listVoucher}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        totalCoin(item.value);
                                    }}
                                    style={{
                                        width: 110,
                                        height: 90,
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        backgroundColor: '#FFFF99',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 10
                                    }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'red' }}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }} />
                </View>
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
                    <Text style={{ fontSize: 20, fontWeight: '500', color: 'red' }}>₫{total}</Text>
                </View>
                {
                    type === '' ? (
                        <View
                            onPress={() => {
                                database()
                                    .ref('Payment/' + userId)
                                    .push()
                                    .set({
                                        address: addressPay,
                                        item: listProduct,
                                        totalStar: route.params.totalStar,
                                        total: total,
                                    })
                                    .then(() =>
                                        alert('Thanh toán thành công.'),
                                        navigation.navigate('Main')
                                    );
                            }}
                            style={{
                                width: '25%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#AA0000'
                            }}>
                            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}>Đặt hàng</Text>
                        </View>
                    ) : (
                        <TouchableOpacity
                            onPress={() => {
                                database()
                                    .ref('Payment/' + userId)
                                    .push()
                                    .set({
                                        address: type,
                                        item: listProduct,
                                        totalStar: route.params.totalStar,
                                        total: total,
                                    })
                                    .then(() => {
                                        alert('Đặt hàng thành công.');

                                    });
                                database()
                                    .ref('User/' + userId)
                                    .update({
                                        myStar: route.params.totalStar
                                    })
                                    .then(() => console.log('Data updated.'));
                                database().ref('Cart/' + userId).remove();
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
                    )
                }
            </View>


        </View>
    )
};

export default Checkout;