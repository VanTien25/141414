import { View, Text, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../common/CustomTextInput'
import CommonButton from '../common/CommonButton'
import { useNavigation } from '@react-navigation/native'

import Loader from '../common/Loader'
import auth from '@react-native-firebase/auth';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const login = () => {
    setModalVisible(true);
    if (email == '') {
      setModalVisible(false);
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password == '') {
        setModalVisible(false);
        setBadPassword(true);
      } else {
        setBadPassword(false);
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);
      }
    }
  };

  const getData = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
      }).catch(() => {
        setModalVisible(false);
        Alert.alert('Dang nhap khong thanh cong!');
      });
  };


  return (
    <View style={{ flex: 1, backgroundColor: '#BB0000' }}>
      <Image
        source={require('../images/playstore.png')}
        style={{ width: 130, height: 130, alignSelf: 'center', marginTop: 10, borderRadius: 100 }}
      />

      <Text style={{ marginTop: 10, alignSelf: 'center', fontSize: 24, fontWeight: '800', color: '#fff' }}>
        Login
      </Text>
      <CustomTextInput
        placeholder={'Nhap Email...'}
        icon={require('../images/email.png')}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />

      {
        badEmail === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: 'yellow', fontWeight: 'bold' }}>Hay nhap Email</Text>
        )
      }

      <CustomTextInput
        type={'password'}
        placeholder={'Nhap Password...'}
        icon={require('../images/lock.png')}
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />

      {
        badPassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: 'yellow', fontWeight: 'bold' }}>Hay nhap Password</Text>
        )
      }

      <Text
        style={{
          fontSize: 16,
          alignSelf: 'flex-end',
          marginRight: 40,
          marginTop: 20,
          textDecorationLine: 'underline'
        }}
        onPress={() => {
          navigation.navigate('ForgotPass');
        }}>
        Forgot Password.
      </Text>

      <CommonButton
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          login();
        }}
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          alignSelf: 'center',
          marginTop: 20,
          textDecorationLine: 'underline'
        }}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        Create New Account.
      </Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  )
}

export default Login