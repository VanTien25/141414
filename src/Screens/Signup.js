import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'

import CustomTextInput from '../common/CustomTextInput'
import CommonButton from '../common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
let isValid = true;

const Signup = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [badName, setBadName] = useState(false);
    const [email, setEmail] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [phone, setPhone] = useState('');
    const [badPhone, setBadPhone] = useState(false);
    const [password, setPassword] = useState('');
    const [badPassword, setBadPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [badConfirmPassword, setBadConfirmPassword] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const signup1 = () => {
        setButtonDisabled(true);
        if (name == '') {
            setBadName(true);
            setButtonDisabled(false);
        } else {
            setBadName(false);
            if (email == '') {
                setBadEmail(true);
                setButtonDisabled(false);
            } else {
                setBadEmail(false);
                if (phone == '') {
                    setBadPhone(true);
                    setButtonDisabled(false);
                } else if (phone.length < 10) {
                    setBadPhone(true);
                    setButtonDisabled(false);
                } else {
                    setBadPhone(false);
                    if (password == '') {
                        setBadPassword(true);
                        setButtonDisabled(false);
                    } else {
                        setBadPassword(false);
                        if (confirmPassword == '') {
                            setBadConfirmPassword(true);
                            setButtonDisabled(false);
                        } else {
                            setBadConfirmPassword(false);
                            if (password !== confirmPassword) {
                                setBadConfirmPassword(true);
                                setButtonDisabled(false);
                            } else {
                                setBadConfirmPassword(false);
                                saveData();
                            }
                        }
                    }
                }
            }
        }
    };

    const saveData = async () => {
        await AsyncStorage.setItem('NAME', name);
        await AsyncStorage.setItem('EMAIL', email);
        await AsyncStorage.setItem('PHONE', phone);
        await AsyncStorage.setItem('PASSWORD', password);
        console.log(':yes');
        navigation.goBack();
    };

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require('../images/playstore.png')}
                    style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 60, borderRadius: 100 }}
                />

                <Text style={{ marginTop: 50, alignSelf: 'center', fontSize: 24, fontWeight: '600', color: '#000' }}>
                    Create New Account
                </Text>
                <CustomTextInput
                    placeholder={'Nhap Ten...'}
                    value={name}
                    onChangeText={txt => {
                        setName(txt);
                    }}
                    icon={require('../images/user.png')}
                />

                {
                    badName === true && (
                        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>Hay nhap Ten</Text>
                    )
                }

                <CustomTextInput
                    placeholder={'Nhap Email...'}
                    value={email}
                    onChangeText={txt => {
                        setEmail(txt);
                    }}
                    icon={require('../images/email.png')}
                />

                {
                    badEmail === true && (
                        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>Hay nhap Email</Text>
                    )
                }

                <CustomTextInput
                    placeholder={'Nhap SDT...'}
                    value={phone}
                    keyboardType={'number-pad'}
                    onChangeText={txt => {
                        setPhone(txt);
                    }}
                    icon={require('../images/smartphone.png')}
                />

                {
                    badPhone === true && (
                        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>Hay nhap SDT</Text>
                    )
                }

                <CustomTextInput
                    placeholder={'Nhap Password...'}
                    value={password}
                    onChangeText={txt => {
                        setPassword(txt);
                    }}
                    icon={require('../images/lock.png')}
                />

                {
                    badPassword === true && (
                        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>Hay nhap Password</Text>
                    )
                }

                <CustomTextInput
                    placeholder={'Xac nhan Password...'}
                    value={confirmPassword}
                    onChangeText={txt => {
                        setConfirmPassword(txt);
                    }}
                    icon={require('../images/lock.png')}
                />

                {
                    badConfirmPassword === true && (
                        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>Mat khau khong trung khop</Text>
                    )
                }

                <CommonButton
                    title={'Sign Up'}
                    bgColor={buttonDisabled ? '#8e8e8e' : '#000'}
                    textColor={'#fff'}
                    onPress={() => {
                        signup1();
                    }}
                    disabled={buttonDisabled}
                />

                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '800',
                        alignSelf: 'center',
                        marginTop: 20,
                        textDecorationLine: 'underline',
                        marginBottom: 50
                    }}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    Already have an account?
                </Text>
            </View>
        </ScrollView>
    )
}

export default Signup ;