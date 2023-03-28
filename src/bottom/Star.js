import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import database from '@react-native-firebase/database';
import { useEffect } from 'react';
import { firebase } from '@react-native-firebase/auth';

const Star = () => {
  const [listVoucher, setListVoucher] = useState([]);
  const [myStar, setMyStar] = useState(0);
  const [myVoucher, setMyVoucher] = useState([])
  const userID = firebase.auth().currentUser.uid;


  useEffect(() => {
    database()
      .ref('User/' + userID)
      .update({
        myStar: myStar,
      })
      .then();
  }, [myStar]);

  useEffect(() => {
    database()
      .ref('Voucher/')
      .on('value', snapshot => {
        let arr = [];
        snapshot.forEach(childSnapshot => {
          var item = childSnapshot.val();
          arr.push({
            id: childSnapshot.key,
            title: item.title,
            value: item.value,
            price: item.price,
          });
        })
        setListVoucher(arr);
      });
  }, []);

  useEffect(() => {
    database()
      .ref('User/' + userID)
      .on('value', snapshot => {
        var star = snapshot.val();
        setMyStar(star.myStar);
      });
  }, []);

  handleBuyStar = (item) => {
    if (myStar - item.price >= 0) {
      setMyStar(myStar - item.price);
    }

    database().ref('Myvoucher/' + userID).push().set({
      id: item.id,
      title: item.title,
      value: item.value,
      price: item.price,
      quantity: 1,
    })
      .then(() => {
        alert('Đổi thành công');
      });
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#CCCCCC' }}>

      {/* Header */}
      <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#AA0000' }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Star Shop</Text>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: '500',
            padding: 5,
          }}
        >
          {myStar}
          <Image
            source={require('../images/starpoint.png')}
            style={{
              width: 24,
              height: 24,
            }} />
        </Text>
      </View>

      {/* Voucher */}
      <FlatList
        data={listVoucher}
        renderItem={({ item, index }) => {
          if (myStar >= item.price) {
            return (
              <TouchableOpacity
                onPress={() => {
                  handleBuyStar(item);
                }}
                style={{ flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View
                  style={{
                    width: '99%',
                    height: 100,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    backgroundColor: '#FFFF99',
                    borderRadius: 10,
                    padding: 10
                  }}
                >
                  <View style={{
                    width: '30%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Image
                      source={require('../images/giftbox.png')}
                      style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }} />
                    <Text
                      style={{
                        color: 'green',
                        textAlign: 'center',
                        fontSize: 30,
                        fontWeight: 'bold'
                      }}>
                      {item.price}
                    </Text>
                  </View>

                  <View style={{
                    width: '70%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text
                      style={{
                        color: 'red',
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                      }}>
                      {item.title}
                    </Text>
                  </View>

                </View>
              </TouchableOpacity>
            );
          } else {
            return (
              <View
                onPress={() => {
                  handleBuy(item.price);
                }}
                style={{ flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View
                  style={{
                    width: '99%',
                    height: 100,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    backgroundColor: '#DDDDDD',
                    borderRadius: 10,
                    padding: 10
                  }}
                >
                  <View style={{
                    width: '30%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Image
                      source={require('../images/giftbox.png')}
                      style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }} />
                    <Text
                      style={{
                        color: 'green',
                        textAlign: 'center',
                        fontSize: 30,
                        fontWeight: 'bold'
                      }}>
                      {item.price}
                    </Text>
                  </View>

                  <View style={{
                    width: '70%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text
                      style={{
                        color: 'red',
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                      }}>
                      {item.title}
                    </Text>
                  </View>

                </View>
              </View>
            );
          }

        }} />
    </View>
  )
}

export default Star