import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'

const CountQuantity = () => {


    return (
        <View style={{
            width: 130, height: 40, borderRadius: 5,
            flexDirection: 'row', padding: 10, borderWidth: 1,
            justifyContent: 'center', alignItems: 'center',
        }}>
            <TouchableOpacity
                onPress={() => {
                    subtraction();
                }}
                style={{
                    width: 35,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                <Image
                    source={require('../images/sub.png')}
                    style={{ width: 26, height: 26 }} />
            </TouchableOpacity>
            <Text
                style={{
                    width: 60,
                    height: 40,
                    borderWidth: 1,
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    backgroundColor: '#fff',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black',
                }}>
                    1
                </Text>
            <TouchableOpacity
                onPress={() => {
                    addition();
                }}
                style={{
                    width: 35,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Image
                    source={require('../images/add.png')}
                    style={{ width: 26, height: 26 }} />
            </TouchableOpacity>
        </View>
    )
}

export default CountQuantity