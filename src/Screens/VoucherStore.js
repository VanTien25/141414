import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { firebase } from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import { Swipeable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const VoucherStore = () => {
    const idUser = firebase.auth().currentUser.uid;
    const [listVoucher, setListVoucher] = useState([]);
    const navigation = useNavigation();
    console.log(listVoucher);

    const rightSwipe = () => {
        return (
            <View
                style={{
                    width: '100%', height: 100, borderBottomWidth: 3,
                    backgroundColor: 'red', borderBottomColor: '#DDDDDD',
                    justifyContent: 'center', alignItems: 'center',
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

    const onComponentOpen = (idPro) => {
        database().ref('Myvoucher/' + idUser + '/' + idPro).remove();
        alert('Xóa thành công.');
    }

    useEffect(() => {
        database()
            .ref('Myvoucher/' + idUser)
            .on('value', snapshot => {
                let arr = [];
                snapshot.forEach(childSnapshot => {
                    var item = childSnapshot.val();
                    arr.push({
                        id: childSnapshot.key,
                        title: item.title,
                    });
                })
                setListVoucher(arr);
            });
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
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

            {listVoucher.length > 0 ? (
                <FlatList
                    data={listVoucher}
                    renderItem={({ item, index }) => {
                        return (
                            <Swipeable
                                renderRightActions={rightSwipe}
                                onSwipeableOpen={() => {
                                    onComponentOpen(item.id);
                                }}
                            >
                                <TouchableOpacity
                                    style={{ flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View
                                        style={{
                                            width: '99%',
                                            height: 100,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                            backgroundColor: '#FFFF99',
                                            borderRadius: 10,
                                            padding: 10
                                        }}
                                    >
                                        <View style={{
                                            width: '30%',
                                            height: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Image
                                                source={require('../images/giftbox.png')}
                                                style={{ width: 50, height: 50 }} />
                                        </View>

                                        <View style={{
                                            width: '70%',
                                            height: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Text
                                                style={{
                                                    color: 'red',
                                                    textAlign: 'center',
                                                    fontSize: 20,
                                                    fontWeight: 'bold'
                                                }}>
                                                {item.title}
                                            </Text>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            </Swipeable>
                        )
                    }}
                />
            ) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Không có voucher nào trong kho</Text>
                </View>
            )}
        </View >
    )
}

export default VoucherStore