import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'

const CountQuantity = () => {
    let [quantity, setQuantity] = useState(1);
    return (
        <View style={{
            width: 80, height: 40, borderRadius: 8, backgroundColor: '#DDDDDD',
            flexDirection: 'row', padding: 10, borderWidth: 1.5,
            justifyContent: 'center', alignItems: 'center', borderColor: '#BBBBBB'
        }}>
            {
                quantity <= 1 ? (
                    <View
                        onPress={() => {
                            subtraction();
                        }}
                        style={{
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={require('../images/sub.png')}
                            style={{ width: 26, height: 26, tintColor: '#CCCCCC' }} />
                    </View>
                ) : (
                    <TouchableOpacity
                        onPress={() => {
                            subtraction();
                        }}
                        style={{
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                        <Image
                            source={require('../images/sub.png')}
                            style={{ width: 26, height: 26 }} />
                    </TouchableOpacity>
                )
            }
            <View style={{
                width: 50,
                height: '100%',
                textAlign: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{quantity}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    addition();
                }}
                style={{
                    width: 40,
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