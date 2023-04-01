import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const AddAddress = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [homeInfo, setHomeInfo] = useState('');
    const [address, setAddress] = useState('');
    // const [pin, setPin] = useState('');
    const userId = firebase.auth().currentUser.uid;
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: '100%',
                    height: 70,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <TouchableOpacity
                    style={{
                        marginLeft: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1.5,
                        padding: 7,
                        borderRadius: 10,
                    }}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Image
                        source={require('../images/back.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
            </View>
            <CustomTextInput
                placeholder={'Họ và tên'}
                value={name}
                onChangeText={txt => {
                    setName(txt);
                }}
                icon={require('../images/name.png')}
            />
            <CustomTextInput
                placeholder={'Số điện thoại'}
                keyboardType={'number-pad'}
                value={phone}
                onChangeText={txt => {
                    setPhone(txt);
                }}
                icon={require('../images/smartphone.png')}
            />
            <CustomTextInput
                placeholder={'Địa chỉ nhà'}
                value={homeInfo}
                onChangeText={txt => {
                    setHomeInfo(txt);
                }}
                icon={require('../images/home.png')}
            />
            <CustomTextInput
                placeholder={'Tỉnh/Thành phố, Quận/Huyện'}
                value={address}
                onChangeText={txt => {
                    setAddress(txt);
                }}
                icon={require('../images/address.png')}
            />
            <CommonButton
                title={'Save Address'}
                bgColor={'#000'}
                textColor={'#fff'}
                onPress={() => {
                    if (name !== '' && phone !== '' && address !== '') {
                        database()
                            .ref('Address/' + userId)
                            .push()
                            .set({
                                name: name,
                                phone: phone,
                                home: homeInfo,
                                address: address,
                                
                            })
                            .then(() => console.log('Data set.'));
                        navigation.goBack();
                    }
                }}
            />
        </View>
    );
};

export default AddAddress;