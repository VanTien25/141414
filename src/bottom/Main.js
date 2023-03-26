import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import ProductItem from '../common/ProductItem';
import Search from '../common/Search';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const Main = () => {
  const [listProduct, setListProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [img, setImg] = useState([]);
  const stepAutoImg = useRef(null);


  const navigation = useNavigation();

  useEffect(() => {
    database().ref('Category/').on('value', (snapshot) => {
      let categories = [];
      snapshot.forEach(childSnapshot => {
        var childData = childSnapshot.val();
        categories.push(
          childData,
        );
      });
      setCategories(categories);
    });

    database().ref('Products/').on('value', (snapshot) => {
      let productList = [];
      snapshot.forEach(childSnapshot => {
        var childData = childSnapshot.val();
        productList.push({
          id: childSnapshot.key,
          title: childData.title,
          price: childData.price,
          image: childData.image,
          size: childData.size,
          category: childData.category,
          star: childData.star,
          desc: childData.desc,
        });
      });
      setListProduct(productList);
    });

    database().ref('Slider/').on('value', (snapshot) => {
      let arr = [];
      snapshot.forEach(childSnapshot => {
        var item = childSnapshot.val();
        arr.push({
          id: childSnapshot.key,
          image: item.image
        });
      });
      setImg(arr);
    });
  }, [])

  useEffect(() => {
    if (img.length > 0) {
      let index = 0;
      setInterval(() => {
        stepAutoImg.current.scrollTo({ x: index * screenWidth, y: 0, animated: true });
        index += 1;
        if (index === img.length) {
          index = 0;
        }
      }, 3000);
    }
  }, [])


  return (
    <>
      <Search />
      <ScrollView style={{ flex: 1, marginTop: 10 }}>
        <View style={{ flex: 1 }}>

          {/* Banner */}
          <View style={{ width: '94%', height: 170, marginTop: 10, alignSelf: 'center', elevation: 5 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ width: screenWidth * img.length, height: 180 }}
              ref={stepAutoImg}
              scrollEventThrottle={16}
            >
              {
                img.map((item, index) => {
                  console.log(item.image);
                  return (
                    <Image
                      key={index}
                      src={item.image}
                      resizeMode='stretch'
                      style={{
                        width: screenWidth,
                        height: '100%',
                      }}
                    />
                  )
                })
              }
            </ScrollView>
          </View>

          {/* List Button Category */}
          <View style={{ width: '100%', height: 80, marginTop: 10, backgroundColor: '#DDDDDD', flexDirection: 'row' }}>
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Category', {
                        name: item.name,
                        listProduct
                      });
                    }}
                    style={{ width: 60, height: 60, alignSelf: 'center', borderRadius: 10, backgroundColor: '#fff', marginLeft: 18, borderRadius: 100 }}>
                    <Image
                      src={item.image}
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </TouchableOpacity>
                )
              }}
            />
          </View>

          {/* List San Pham */}
          <View style={{ backgroundColor: '#AA0000', width: '100%', height: 30, marginTop: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Danh sách sản phẩm</Text>
          </View>
          <View style={{ marginTop: 10, marginBottom: 200 }}>
            <FlatList
              data={listProduct}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{ justifyContent: 'space-evenly' }}
              numColumns={2}
              renderItem={({ item, index }) => {
                return (
                  <ProductItem
                    item={item}
                  />
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Main;