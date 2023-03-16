import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../common/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, addToWishlist } from '../redux/actions/Actions';
import Search from '../common/Search';
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


  const navigation = useNavigation();

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
    });
  }, [])

  return (
    <>
      <Search />
      <ScrollView style={{ flex: 1, marginTop: 15 }}>
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
                      if (item === "T-Shirt") {
                        navigation.navigate('Category', {
                          item,
                          list : tshirtList,
                        });
                      }
                      if (item === "Headwear") {
                        navigation.navigate('Category', {
                          item,
                          list : headwearList,
                        });
                      }
                      if (item === "Hoodie") {
                        navigation.navigate('Category', {
                          item,
                          list : hoodieList,
                        });
                      }
                      if (item === "Jacket") {
                        navigation.navigate('Category', {
                          item,
                          list : jacketList,
                        });
                      }
                      if (item === "Trousers") {
                        navigation.navigate('Category', {
                          item,
                          list : trousersList,
                        });
                      }
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
                  />
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