import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import database from '@react-native-firebase/database';

const AddCategory = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [badImage, setBadImage] = useState(false);
  const [badName, setBadName] = useState(false);

  const handleSubmit = () => {
    setButtonDisabled(true);
    if (image == '') {
      setBadImage(true);
      setButtonDisabled(false);
    } else {
      setBadImage(false);
      if (name == 'Chọn loại sản phẩm') {
        setBadName(true);
        setButtonDisabled(false);
      } else {
        setBadName(false);
        handle();
      }
    }
  }

  const handle = () => {
    database()
      .ref('Category/')
      .push()
      .set({
        image: image,
        name: name,
      })
      .then(() =>
        alert('Thêm thành công'),
        setImage(''),
        setName(''),
      );
  }


  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 60,
        backgroundColor: '#AA0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
      }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Thêm loại sản phẩm</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: 'absolute',
          top: 10,
          left: 15,
        }}>
        <Image source={require('../images/back.png')}
          style={{
            width: 40,
            height: 40,
            tintColor: 'yellow',
          }} />
      </TouchableOpacity>

      <TextInput
        style={{
          borderColor: '#8e8e8e',
          alignSelf: 'center',
          width: '90%',
          height: 50,
          margin: 12,
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
        }}
        onChangeText={(txt => setImage(txt))}
        value={image}
        placeholder="Thêm hình ảnh..."
      />
      {
        badImage === true && (
          <Text style={{ marginTop: 10, marginLeft: 25, color: 'red' }}>Hãy thêm hình ảnh</Text>
        )
      }

      <TextInput
        style={{
          borderColor: '#8e8e8e',
          alignSelf: 'center',
          width: '90%',
          height: 50,
          margin: 12,
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
        }}
        onChangeText={(txt => setName(txt))}
        value={name}
        placeholder="Nhập tên loại sản phẩm..."
      />
      {
        badName === true && (
          <Text style={{ marginTop: 10, marginLeft: 25, color: 'red' }}>Hãy điền tên sản phẩm</Text>
        )
      }

      <TouchableOpacity
        onPress={() => {
          handleSubmit();
        }}
        disabled={buttonDisabled}
        style={{
          width: '90%',
          height: 60,
          backgroundColor: 'black',
          alignSelf: 'center',
          marginTop: 10,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: '#fff' }}>Thêm</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddCategory