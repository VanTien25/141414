import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import paypalApi from '../api/paypalApi';
import { TouchableOpacity } from 'react-native';

const Payment = () => {
    const [cardInfo, settCardInfo] = useState(null);
    const fetchCardDetail = (cardDetail) => {
        if (cardDetail.complete) {
            settCardInfo(cardDetail)
        } else {
            settCardInfo(null)
        }
    }



    const onPressPaypal = async () => {
        try {
            const token = await paypalApi.generateToken()
            const res = await paypalApi.createOrder(token)
            console.log("res++++++", res)

        } catch (error) {
            console.log("error", error)
        }
    }


    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ padding: 16 }}>
                    <TextInput
                        style={{
                            width: '50%',
                            height: 50,
                            borderWidth: 1
                        }}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />

                    <TextInput
                        style={{
                            width: '50%',
                            height: 50,
                            borderWidth: 1
                        }}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />

                    <TextInput
                        style={{
                            width: '50%',
                            height: 50,
                            borderWidth: 1
                        }}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />

                    <TouchableOpacity
                        disabled={false}
                        style={{
                            width: '80%',
                            height: 50,
                            backgroundColor: 'red',
                            borderWidth: 1,
                            borderRadius: 5
                        }}>
                        <Text>Done</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onPressPaypal}
                        disabled={false}
                        style={{
                            width: '80%',
                            height: 50,
                            backgroundColor: 'blue',
                            borderWidth: 1,
                            borderRadius: 5
                        }}>
                        <Text>Done</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Payment