import {
    View,
    Text,
    FlatList,
    Image,
    SafeAreaView,
    TouchableOpacity,
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
    const navigation = useNavigation();





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
                setListItem(arr);
            });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 50, backgroundColor: '#AA0000', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: 'yellow' }}>Thanh toán</Text>
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

            <TouchableOpacity
                style={{ width: '100%', height: 40, borderWidth: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../images/location.png')}
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: 'red',
                        marginRight: 5
                    }} />
                <Text style={{ color: 'red'}}>Chọn địa chỉ nhận hàng</Text>

            </TouchableOpacity>

        </View>
    )
};

export default Checkout;