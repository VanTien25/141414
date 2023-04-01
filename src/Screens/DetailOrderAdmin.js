import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';

const DetailOrderAdmin = ({ route }) => {
    const navigation = useNavigation();
    const [address, setAdress] = useState([]);
    const [date, setDate] = useState([]);
    const [item, setItem] = useState([]);
    const [status, setStatus] = useState([]);
    const [total, setTotal] = useState([]);
    const [totalStar, setTotalStar] = useState([]);
    const idPay = route.params.item;
    const idUser = route.params.userID;
    console.log(totalStar);

    useEffect(() => {
        database()
            .ref('Payment/' + idUser + '/' + idPay)
            .on('value', snapshot => {
                var item = snapshot.val();
                setAdress(item.address);
                setDate(item.date);
                setItem(item.item);
                setStatus(item.status);
                setTotal(item.total);
                setTotalStar(item.totalStar);
            });
    }, [])

    const handleAccept = () => {
        database()
            .ref('Payment/' + idUser + '/' + idPay)
            .update({
                status: "2",
            })
            .then(() => alert('Duyệt đơn thành công.'));
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{
                    width: '100%',
                    height: 60,
                    backgroundColor: '#AA0000',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ color: 'yellow', fontWeight: 'bold', fontSize: 18 }}>Chi tiết đơn hàng</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                    style={{
                        position: 'absolute',
                        top: 15,
                        left: 15,
                    }}>
                    <Image
                        source={require('../images/back.png')}
                        style={{
                            width: 35,
                            height: 35,
                            tintColor: 'yellow',
                        }} />
                </TouchableOpacity>

                <View style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    padding: 15,
                    borderBottomWidth: 5,
                    borderBottomColor: '#DDDDDD',
                }}>
                    <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                        <Image
                            source={require('../images/location.png')}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: 'red',
                                marginRight: 10,
                            }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>Địa chỉ nhận hàng</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }}>{address.name}</Text>
                        <Text style={{ fontSize: 20 }}> | </Text>
                        <Text style={{ fontSize: 20 }}>{address.phone}</Text>
                    </View>
                    <Text style={{ marginBottom: 5, fontSize: 20 }}>{address.home}, {address.address}</Text>
                </View>

                <View style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    padding: 15,
                    borderBottomWidth: 5,
                    borderBottomColor: '#DDDDDD',
                }}>
                    <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                        <Image
                            source={require('../images/date.png')}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: 'red',
                                marginRight: 10,
                            }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>Ngày đặt hàng</Text>
                    </View>
                    <Text style={{ marginBottom: 5, fontSize: 20 }}>{date}</Text>
                </View>

                <View style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    padding: 15,
                    borderBottomWidth: 5,
                    borderBottomColor: '#DDDDDD',
                }}>
                    <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                        <Image
                            source={require('../images/pay.png')}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: 'red',
                                marginRight: 10,
                            }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>Thanh toán</Text>
                    </View>
                    <Text style={{ marginBottom: 5, fontSize: 20, fontWeight: 'bold', color: 'red' }}>Tổng cộng:   {total}</Text>
                    <Text style={{ marginBottom: 5, fontSize: 20, fontWeight: 'bold', color: '#FFCC00' }}>Điểm tích lũy:   {totalStar}</Text>
                </View>

                <View style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    padding: 15,
                    borderBottomWidth: 5,
                    borderBottomColor: '#DDDDDD',
                }}>
                    <View style={{ flexDirection: 'row', paddingBottom: 10, marginBottom: 5 }}>
                        <Image
                            source={require('../images/list.png')}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: 'red',
                                marginRight: 10,
                            }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>Danh sách sản phẩm</Text>
                    </View>
                    {
                        item.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        width: '100%', height: 100, alignItems: 'center',
                                        flexDirection: 'row', backgroundColor: '#fff',
                                        justifyContent: 'space-evenly'
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
                                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                                            {
                                                item.title.length > 15
                                                    ? item.title.substring(0, 15) + '...'
                                                    : item.title
                                            }
                                        </Text>
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
                </View>

            </ScrollView>
            {
                status === "1" ?
                    (
                        <TouchableOpacity
                            onPress={() => {
                                handleAccept();
                            }}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                height: 60,
                                backgroundColor: 'green',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>Xác nhận đơn hàng</Text>
                        </TouchableOpacity>
                    ) :
                    status === "2" ? (
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                height: 60,
                                backgroundColor: 'grey',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>Đang vận chuyển</Text>
                        </View>
                    ) : (
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                height: 60,
                                backgroundColor: 'Grey',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#BBBBBB' }}>Hoàn thành</Text>
                        </View>
                    )
            }

        </View>
    )
}

export default DetailOrderAdmin