import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

let name = '';
const Profile = () => {
  const navigation = useNavigation();

  const logOut = () => {
    auth()
      .signOut()
      .then(() => Alert.alert('Đăng xuất thành công'));
  }

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    name = firebase.auth().currentUser.email;
    console.log(name);
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#AA0000'
        }}>
        <Text style={{ fontWeight: '600', fontSize: 22, marginLeft: 15, color: 'yellow' }}>
          Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            logOut();
          }}
          style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/logout.png')}
            style={{ width: 30, height: 30, tintColor: 'yellow' }}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../images/profile.png')}
        style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 30 }}
      />
      <Text style={{ alignSelf: 'center', marginTop: 20, fontSize: 18, color: 'black' }}>
        {name}
      </Text>
      <TouchableOpacity
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 0.3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('MyAddress');
        }}>
        <Text style={{ color: 'black' }}>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 0.3,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('Orders');
        }}>
        <Text style={{ color: 'black' }}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductsManager')
        }}
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 0.3,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}>
        <Text style={{ color: 'black' }}>ProductsManager</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CategoriesMan')
        }}
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 0.3,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}>
        <Text style={{ color: 'black' }}>CategoriesManager</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SliderMan')
        }}
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 0.3,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}>
        <Text style={{ color: 'black' }}>SliderMan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;