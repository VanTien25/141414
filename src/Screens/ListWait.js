import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';

const ListWait = ({route}) => {
    const navigation = useNavigation();
    const [listPayID, setListPayID] = useState([])
    const userID = route.params;

    useEffect(() => {
        database()
            .ref('Payment/' + userID)
            .on('value', snapshot => {
                let arr = [];
                snapshot.forEach(childSnap => {
                    var item = childSnap.val();
                    arr.push(item);
                })
                setListPayID(arr);
                console.log(arr);
            });
    }, [])


    return (
        <View style={{ flex: 1 }}>
            <View style={{
                width: '100%',
                height: 60,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 16 }}>Danh sách đơn hàng chờ</Text>
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

            <FlatList
                data={listPayID}
                keyExtractor={item => item}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('DetailOrderAdmin', {
                                    item: item,
                                    userID: userID,
                                });
                            }}
                            style={{
                                width: '100%',
                                height: 60,
                                alignItems: 'center',
                                flexDirection: 'row',
                                borderBottomWidth: 3,
                                borderBottomColor: '#DDDDDD',
                            }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontSize: 18, color: 'red' }}>{index + 1}</Text>
                            <Text
                                style={{ fontWeight: 'bold', marginLeft: 25, fontSize: 16 }}
                            >Mã đơn hàng:   {item > 15 ? item.substring(0, 15) + '...' : item}
                            </Text>
                        </TouchableOpacity>
                    )
                }} />

        </View>
    )
}

export default ListWait