import { View, Text, TouchableOpacity, Image, alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import AsyncStorage from '@react-native-async-storage/async-storage'

const SendMail = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState('');
    const [badCode, setBadCode] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    // const forgot = () => {
    //     setModalVisible(true);
    //     if (code == '') {
    //         setModalVisible(false);
    //         setBadEmailForgot(true);
    //     } else {
    //         setBadEmailForgot(false);
    //         setTimeout(() => {
    //             setBadEmailForgot(false);
    //             getData();
    //         }, 2000);
    //     }
    // };

    // const getData = async () => {
    //     const fEmail = await AsyncStorage.getItem('EMAIL');
    //     if (code === fEmail) {
    //         setModalVisible(false);
    //         navigation.navigate('Code');
    //     } else {
    //         setModalVisible(false);
    //     }
    // };



    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
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
                        borderWidth: 2,
                        padding: 7,
                        borderRadius: 10,
                        borderColor: 'white'
                    }}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Image
                        source={require('../images/back.png')}
                        style={{ width: 24, height: 24, tintColor: 'white' }}
                    />
                </TouchableOpacity>
            </View>
            <CustomTextInput
                placeholder={'XXXXXX'}
                value={code}
                onChangeText={txt => {
                    setCode(txt);
                }}
                icon={require('../images/code.png')}
            />

            {
                badCode === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'yellow', fontWeight: 'bold' }}>Hay nhap Code</Text>
                )
            }

            <CommonButton
                title={'Submit'}
                bgColor={'#000'}
                textColor={'#fff'}
                onPress={() => {
                    // forgot();
                }}
            />
        </View>
    );
};

export default SendMail;