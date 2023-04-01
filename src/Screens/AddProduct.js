import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';
import CustomDropdown from '../common/CustomDropdown';
import { ScrollView } from 'react-native';

const AddProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState('Chọn loại sản phẩm')
  const [isClicked, setIsClicked] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [listSize, setListSize] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [star, setStar] = useState('');
  const [desc, setDesc] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [badSelect, setBadSelect] = useState(false)
  const [badTitle, setBadTitle] = useState(false);
  const [badPrice, setBadPrice] = useState(false);
  const [badImage, setBadImage] = useState(false);
  const [badStar, setBadStar] = useState(false);
  const [badDesc, setBadDesc] = useState(false);
  const navigation = useNavigation();


  useEffect(() => {
    database()
      .ref('Category/')
      .on('value', snapshot => {
        let arr = [];
        snapshot.forEach(child => {
          var item = child.val();
          arr.push(item.name);
        })
        setListCategory(arr);
      });
  }, [])


  const handleSubmit = () => {
    setButtonDisabled(true);
    if (selectedCategory == 'Chọn loại sản phẩm') {
      setBadSelect(true);
      setButtonDisabled(false);
    } else {
      setBadSelect(false);
      if (title == '') {
        setBadTitle(true);
        setButtonDisabled(false);
      } else {
        setBadTitle(false);
        if (price == '') {
          setBadPrice(true);
          setButtonDisabled(false);
        } else {
          setBadPrice(false);
          if (image == '') {
            setBadImage(true);
            setButtonDisabled(false);
          } else {
            setBadImage(false);
            if (star == '') {
              setBadStar(true);
              setButtonDisabled(false);
            } else {
              setBadStar(false);
              if (desc == '') {
                setBadDesc(true);
                setButtonDisabled(false);
              } else {
                setBadDesc(false);
                addData();
              }
            }
          }
        }
      }
    }
  }

  const addData = () => {
    database()
      .ref('Products/')
      .push()
      .set({
        category: selectedCategory,
        title: title,
        price: price,
        image: image,
        star: star,
        desc: desc,
        size: listSize,
      })
      .then(() => alert('Thêm thành công.'));
  }


  const deleteSize = (index) => {
    setListSize([
      ...listSize.slice(0, index),
      ...listSize.slice(index + 1)
    ]);
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 60,
        backgroundColor: '#AA0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
      }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Thêm sản phẩm</Text>
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

      {/* DropDown */}
      <View style={{ marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => {
            setIsClicked(!isClicked);
          }}
          style={{
            width: '90%',
            height: 50,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#8e8e8e',
            alignSelf: 'center',
            mmarginTop: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 15,
          }}>
          <Text>{selectedCategory}</Text>
          {
            isClicked ?
              (<Image source={require('../images/upload.png')}
                style={{
                  width: 20,
                  height: 20,
                }}
              />) :
              (<Image source={require('../images/dropdown.png')}
                style={{
                  width: 20,
                  height: 20,
                }}
              />)
          }
        </TouchableOpacity>
        {
          isClicked ?
            <View style={{
              width: '90%',
              borderRadius: 10,
              backgroundColor: '#fff',
              elevation: 5,
              alignSelf: 'center',
            }}>
              {
                listCategory.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setSelectedCategory(item);
                        setIsClicked(false);
                      }}
                      style={{
                        width: '85%',
                        height: 50,
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#8e8e8e',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
            : null
        }
      </View>
      {
        badSelect === true && (
          <Text style={{ marginTop: 10, marginLeft: 20, color: 'red' }}>Hãy chọn tiêu đề sản phẩm</Text>
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
        onChangeText={(txt => setTitle(txt))}
        value={title}
        placeholder="Nhập tiêu đề sản phẩm..."
      />
      {
        badTitle === true && (
          <Text style={{ marginTop: 10, marginLeft: 20, color: 'red' }}>Hãy nhập tiêu đề sản phẩm</Text>
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
        keyboardType={'numeric'}
        onChangeText={(txt => setPrice(txt))}
        value={price}
        placeholder="Nhập giá..."
      />
      {
        badPrice === true && (
          <Text style={{ marginTop: 10, marginLeft: 20, color: 'red' }}>Hãy nhập giá</Text>
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
        onChangeText={(txt => setImage(txt))}
        value={image}
        placeholder="Nhập nguồn hình ảnh..."
      />
      {
        badImage === true && (
          <Text style={{ marginTop: 10, marginLeft: 20, color: 'red' }}>Hãy nhập hình ảnh</Text>
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
        keyboardType={'numeric'}
        onChangeText={(txt => setStar(txt))}
        value={star}
        placeholder="Nhập số sao..."
      />
      {
        badStar === true && (
          <Text style={{ marginTop: 10, marginLeft: 20, color: 'red' }}>Hãy nhập sao</Text>
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
        onChangeText={(txt => setDesc(txt))}
        value={desc}
        placeholder="Nhập mô tả..."
      />
      {
        badDesc === true && (
          <Text style={{ marginTop: 10, marginLeft: 20, color: 'red' }}>Hãy nhập mô tả</Text>
        )
      }

      <View style={{
        flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center',
        width: '100%', height: 60
      }}>
        <TextInput
          style={{
            borderColor: '#8e8e8e',
            width: '30%',
            height: 50,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
          }}
          onChangeText={(txt => setName(txt))}
          value={name}
          placeholder="nhập Size..."
        />

        <TextInput
          style={{
            borderColor: '#8e8e8e',
            width: '30%',
            height: 50,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
          }}
          onChangeText={(txt => setQuantity(txt))}
          value={quantity}
          placeholder="Nhập số lượng..."
        />

        <TouchableOpacity
          onPress={() => {
            setListSize([...listSize, { name, quantity }]),
              setName(''),
              setQuantity('')
          }}
          style={{
            width: '15%',
            height: 50,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#8e8e8e',
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{ color: '#fff' }}>OK</Text>
        </TouchableOpacity>
      </View>

      {
        listSize.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: '90%',
                height: 50,
                borderBottomWidth: 3,
                borderBottomColor: '#DDDDDD',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}>
              <Text style={{ color: 'blue' }}>{index}</Text>
              <Text>{item.name}</Text>
              <Text>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  deleteSize(index);
                }}
              >
                <Text style={{ color: 'red', fontWeight: 'bold' }}>Xóa</Text>
              </TouchableOpacity>
            </View>
          )
        })
      }
      <TouchableOpacity
        onPress={() => {
          handleSubmit();
        }}
        disabled={buttonDisabled}
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'black',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          borderRadius: 20,
          marginBottom: 15
        }}>
        <Text style={{ color: '#fff' }}>Thêm</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default AddProduct