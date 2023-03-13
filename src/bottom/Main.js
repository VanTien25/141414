import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

import Header from '../common/Header'
import { products } from '../Products'
import ProductItem from '../common/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, addToWishlist } from '../redux/actions/Actions';
import Search from '../common/Search';
import Category from '../Screens/Category';
import database from '@react-native-firebase/database';

import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [headwearList, setHeadwearList] = useState([]);
  const [hoodieList, setHoodieList] = useState([]);
  const [jacketList, setJacketList] = useState([]);
  const [trousersList, setTrousersList] = useState([]);
  const [data, setData] = useState([]);


  const navigation = useNavigation();
  const goListCategory = () => {
    navigation.navigate('Category')
  }

  useEffect(() => {
    database().ref('Products/').on('value', (snapshot) => {
      let productList = [];
      let catList = [];
      let test = [];
      snapshot.forEach(childSnapshot => {
        var childData = childSnapshot.val();
        catList.push(
          childData.category,
        );
        productList.push(
          childData,
        );
        test.push(
          childData.data
        )
      });
      setCategoryList(catList);
      setTshirtList(productList[0].data);
      setHeadwearList(productList[1].data);
      setHoodieList(productList[2].data);
      setJacketList(productList[3].data);
      setTrousersList(productList[4].data);
      setData(productList.data);
      console.log(JSON.stringify(productList[0].data));
      console.log(test);
    });
  }, [])


  // useEffect(() => {
  //   let categories = [];
  //   products.category.map(item => {
  //     categories.push(item.category);
  //   });
  //   setTshirtList(products.category[0].data);
  //   setHeadwearList(products.category[1].data);
  //   setHoodieList(products.category[2].data);
  //   setJacketList(products.category[3].data);
  //   setTrousersList(products.category[4].data);
  //   setCategoryList(categories);
  //   console.log(categories);
  //   // console.log(JSON.stringify(products.category[0]));
  // }, []);

  // const items = useSelector(state => state);
  // console.log(items);
  return (
    <>
      <Search />
      <ScrollView style={{ flex: 1, marginTop: 15, marginBottom: 60 }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require('../images/banner.png')}
            style={{
              width: '94%',
              height: 200,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 10
            }} />
          <View style={{ marginTop: 20, backgroundColor: '#AA0000', height: 50 }}>
            <FlatList
              data={categoryList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{ padding: 10, marginLeft: 20, borderRadius: 20, height: '80%', alignSelf: 'center', backgroundColor: '#fff' }}
                    onPress={() => {
                      goListCategory();
                    }}
                  >
                    <Text style={{ color: '#000' }}>{item}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View style={{ backgroundColor: '#AA0000', width: '94%', height: 30, marginTop: 20, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>New T-Shirt</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={tshirtList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <ProductItem
                    item={item}
                    onAddWishlist={x => {
                      dispatch(addToWishlist(x));
                    }}
                    onAddToCart={x => {
                      dispatch(addItemToCart(item));
                    }} />
                );
              }}
            />
          </View>

          <View style={{ backgroundColor: '#AA0000', width: '94%', height: 30, marginTop: 20, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>New HeadWear</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={headwearList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <ProductItem
                    item={item}
                    onAddWishlist={x => {
                      dispatch(addToWishlist(x));
                    }}
                    onAddToCart={x => {
                      dispatch(addItemToCart(item));
                    }} />
                );
              }}
            />
          </View>

          <View style={{ backgroundColor: '#AA0000', width: '94%', height: 30, marginTop: 20, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>New Hoodie</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={hoodieList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <ProductItem
                    item={item}
                    onAddWishlist={x => {
                      dispatch(addToWishlist(x));
                    }}
                    onAddToCart={x => {
                      dispatch(addItemToCart(item));
                    }} />
                );
              }}
            />
          </View>

          <View style={{ backgroundColor: '#AA0000', width: '94%', height: 30, marginTop: 20, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>New Jacket</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={jacketList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <ProductItem
                    item={item}
                    onAddWishlist={x => {
                      dispatch(addToWishlist(x));
                    }}
                    onAddToCart={x => {
                      dispatch(addItemToCart(item));
                    }} />
                );
              }}
            />
          </View>

          <View style={{ backgroundColor: '#AA0000', width: '94%', height: 30, marginTop: 20, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>New Trousers & Shorts</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={trousersList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <ProductItem
                    item={item}
                    onAddWishlist={x => {
                      dispatch(addToWishlist(x));
                    }}
                    onAddToCart={x => {
                      dispatch(addItemToCart(x));
                    }} />
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