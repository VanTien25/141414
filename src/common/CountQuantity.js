import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const CountQuantity = () => {


    return (
        <View style={{
            width: 130, height: 50,
            flexDirection: 'row', backgroundColor: '#BB0000',
            justifyContent: 'center', alignItems: 'center',
            borderRadius: 10
        }}>
            <TouchableOpacity
                style={{
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                <Text style={{ fontSize: 35, fontWeight: '900', color: '#fff' }}>-</Text>
            </TouchableOpacity>
            <TextInput
                style={{
                    width: 50,
                    height: 45,
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black',
                }}
                placeholder='1'
                keyboardType="numeric" />
            <TouchableOpacity
                style={{
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{ fontSize: 25, fontWeight: '900', color: '#fff' }}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CountQuantity