import { View, Text, TouchableOpacity, Image, alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';

const SendMail = () => {
    const navigation = useNavigation();
    const [emailForgot, setEmailForgot] = useState('');
    const [badEmailForgot, setBadEmailForgot] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const forgot = () => {
        setModalVisible(true);
        if (emailForgot == '') {
            setModalVisible(false);
            setBadEmailForgot(true);
        } else {
            setBadEmailForgot(false);
            setTimeout(() => {
                setBadEmailForgot(false);
                getData();
            }, 2000);
        }
    };


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
                placeholder={'Enter Mail Forgot'}
                value={emailForgot}
                onChangeText={txt => {
                    setEmailForgot(txt);
                }}
                icon={require('../images/email.png')}
            />

            {
                badEmailForgot === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'yellow', fontWeight: 'bold' }}>Hay nhap Email</Text>
                )
            }

            <CommonButton
                title={'Send code'}
                bgColor={'#000'}
                textColor={'#fff'}
                onPress={() => {
                    forgot();
                }}
            />
        </View>
    );
};

export default SendMail;