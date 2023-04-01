import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const AdminDetail = ({ route }) => {
  const [productDetail, setProductDetail] = useState(route.params);
  const navigation = useNavigation();
  console.log(productDetail);
  const total = productDetail.size.reduce((accumulator, current) => accumulator + current.quantity, 0);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        src={productDetail.image}
        style={{
          width: '100%',
          height: 250,
          resizeMode: 'contain',
          borderRadius: 5,
          alignSelf: 'center',
        }} />
      <ImageBackground source={require('../images/star.png')}
        style={{
          position: 'absolute',
          top: 15,
          right: 20,
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 18 }}>{productDetail.star}</Text>
      </ImageBackground>

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: 'absolute',
          top: 15,
          left: 20,
        }}>
        <Image
          source={require('../images/back.png')}
          style={{
            width: 50,
            height: 50,
            tintColor: '#888888',
          }} />
      </TouchableOpacity>

      <Text style={{
        marginTop: 15,
        marginBottom: 15,
        fontSize: 20,
        marginLeft: 15,
        textAlign: 'left',
      }}>Loại sản phẩm:   {productDetail.category}</Text>

      <Text style={{
        marginBottom: 15,
        fontSize: 20,
        marginLeft: 15,
        textAlign: 'left',
      }}>Tên sản phẩm:   {productDetail.title}</Text>


      <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 3, borderBottomColor: '#DDDDDD', paddingBottom: 10 }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 15,
          color: 'red',
          textAlign: 'left',
        }}>Giá:   {productDetail.price}</Text>

        <Text style={{
          fontSize: 18,
          marginRight: 15,
          textAlign: 'left',
        }}>SL: {total}</Text>
      </View>


      <View style={{
        paddingBottom: 15,
        marginTop: 15,
        marginBottom: 15,
        borderBottomWidth: 3,
        borderBottomColor: '#DDDDDD',
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>
          <Text style={{ fontSize: 20, color: 'black', textAlign: 'left', }}>Size</Text>
          <Text style={{ fontSize: 20, color: 'black', textAlign: 'left', }}>Số lượng</Text>
          <Text style={{ fontSize: 20, color: 'black', textAlign: 'left', }}>Đã bán</Text>
        </View>
        {
          productDetail.size.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: '85%',
                  height: 50,
                  marginTop: 10,
                  alignSelf: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottomWidth: 0.5,
                  borderBottomColor: '#333333',
                }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                <Text style={{ fontSize: 16 }}>{item.quantity}</Text>
                <Text style={{ fontSize: 16 }}>DB</Text>
              </View>
            )
          })
        }

      </View>

      <View style={{
        paddingBottom: 15,
        marginTop: 15,
        marginBottom: 15,
        borderBottomWidth: 3,
        borderBottomColor: '#DDDDDD',
      }}>
        <Text style={{ fontSize: 20, color: 'black', textAlign: 'left', marginLeft: 15, }}>Mô tả</Text>
        <View style={{
          width: '90%',
          marginTop: 10,
          borderRadius: 10,
          alignSelf: 'center',
          padding: 15,
          backgroundColor: '#fff',
        }}>
          <Text style={{ fontSize: 18 }}>{productDetail.desc}</Text>
        </View>
      </View>


    </ScrollView>

    // <View style={{ flex: 1 }}>
    //   <ScrollView style={{ flex: 1 }}>
    //     <Image
    //       src={route.params.image}
    //       style={{
    //         width: '100%',
    //         height: 250,
    //         resizeMode: 'contain',
    //         borderRadius: 10,
    //         alignSelf: 'center',
    //       }}
    //     />

    //     <TouchableOpacity
    //       style={{
    //         width: 50,
    //         elevation: 5,
    //         height: 50,
    //         backgroundColor: '#999999',
    //         borderRadius: 20,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         position: 'absolute',
    //         top: 10,
    //         left: 10,
    //       }}
    //       onPress={() => {
    //         navigation.goBack();
    //       }}
    //     >
    //       <Image
    //         source={require('../images/back.png')}
    //         style={{ width: 24, height: 24, }}
    //       />
    //     </TouchableOpacity>

    //     <ImageBackground
    //       source={require('../images/star.png')}
    //       style={{
    //         width: 60,
    //         height: 60,
    //         position: 'absolute',
    //         top: 15,
    //         right: 15,
    //         justifyContent: 'center',
    //         alignItems: 'center'
    //       }}
    //     >
    //       <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 18 }}>{route.params.star}</Text>
    //     </ImageBackground>

    //     {/* Title */}
    //     <Text
    //       style={{
    //         fontSize: 20,
    //         color: 'black',
    //         marginLeft: 15,
    //         textAlign: 'left',
    //         marginTop: 15,
    //         marginBottom: 15,
    //       }}>
    //       {route.params.title}
    //     </Text>

    //     <Text
    //       style={{
    //         fontSize: 20,
    //         color: 'black',
    //         marginLeft: 15,
    //         color: 'blue',
    //         textAlign: 'left',
    //         marginBottom: 15,
    //       }}>
    //       {route.params.category}
    //     </Text>

    //     {/* Price */}
    //     <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    //       <Text
    //         style={{
    //           fontSize: 20,
    //           fontWeight: 'bold',
    //           marginLeft: 15,
    //           color: 'red',
    //           textAlign: 'left',
    //         }}>
    //         {route.params.price} VNĐ
    //       </Text>

    //       <Text
    //         style={{
    //           fontSize: 18,
    //           marginRight: 15,
    //           textAlign: 'left',
    //         }}>
    //         SL: {total}
    //       </Text>
    //     </View>


    //     <View style={{ height: 1, borderWidth: 0.65, borderColor: '#BBBBBB', marginTop: 10, marginBottom: 10 }} />

    //     {/* Size */}
    //     <View style={{
    //       height: 80, flexDirection: 'row', justifyContent: 'space-between',
    //       alignItems: 'center', padding: 15
    //     }}>
    //       <Text style={{ fontSize: 20, color: 'black' }}>Size: </Text>
    //       {
    //         size.map((item) => {
    //           if (item.quantity <= 0) {
    //             return (
    //               <View
    //                 key={item.name}
    //                 style={{
    //                   width: 60,
    //                   height: 40,
    //                   borderRadius: 10,
    //                   justifyContent: 'center',
    //                   alignItems: 'center',
    //                   alignSelf: 'center',
    //                   marginLeft: 15,
    //                   backgroundColor: '#CCCCCC'
    //                 }}
    //               >
    //                 <Text style={{ fontSize: 20, color: '#fff' }}>{item.name}</Text>
    //               </View>
    //             );
    //           } else {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   width: 60,
    //                   height: 40,
    //                   borderRadius: 10,
    //                   justifyContent: 'center',
    //                   alignItems: 'center',
    //                   alignSelf: 'center',
    //                   marginLeft: 15,
    //                   backgroundColor: '#009900'
    //                 }}>
    //                 <Text style={{ fontSize: 20, color: '#fff' }}>{item.name}</Text>
    //               </TouchableOpacity>
    //             );
    //           }
    //         })
    //       }
    //     </View>

    //     <View style={{ height: 1, borderWidth: 0.5, borderColor: '#BBBBBB', marginTop: 5, marginBottom: 10 }} />

    //     {/* Desc */}
    //     <View style={{ flex: 1, marginBottom: 60 }}>
    //       <Text
    //         style={{
    //           fontSize: 20,
    //           color: 'black',
    //           margin: 15
    //         }}>Mô tả</Text>
    //       <Text
    //         style={{
    //           fontSize: 16,
    //           color: 'black',
    //           margin: 15
    //         }}
    //       >
    //         {route.params.desc}
    //       </Text>
    //     </View>
    //   </ScrollView>
    // </View>
  )
}

export default AdminDetail