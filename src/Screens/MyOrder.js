import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';
import { addAddress } from '../redux/actions/Actions';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyOrder = () => {
    const idUser = firebase.auth().currentUser.uid;
    const [itemPay, setItemPay] = useState([]);
    const navigation = useNavigation();
    // console.log(itemPay);

    useEffect(() => {
        database()
            .ref('Payment/' + idUser)
            .once('value')
            .then(snapshot => {
                let arr = [];
                snapshot.forEach(childSnapshot => {
                    var item = childSnapshot.val();
                    arr.push({
                        id: childSnapshot.key,
                        total: item.total,
                        totalStar: item.totalStar,
                    })
                })
                setItemPay(arr);
                console.log(arr)
            });
    }, [])


    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 50, backgroundColor: '#AA0000', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: 'yellow', fontSize: 18 }}>Lịch sử đặt hàng</Text>
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

            <FlatList
                data={itemPay}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: '100%',
                                backgroundColor: '#fff',
                                justifyContent: 'flex-start',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 10,
                                borderBottomWidth: 4,
                                borderBottomColor: '#DDDDDD'
                            }}>
                            <View style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 20}}>{index + 1}</Text>
                            </View>
                            <View style={{ width: '80%', height: '100%', paddingLeft: 15 }}>
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>Mã đơn hàng: {item.id}</Text>
                                <Text style={{ fontSize: 18 }}>Tổng tiền: ₫{item.total}</Text>
                                <Text style={{ fontSize: 18 }}>Tổng tích lũy: {item.totalStar}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default MyOrder