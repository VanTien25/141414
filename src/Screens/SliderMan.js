import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import database from '@react-native-firebase/database';

const SliderMan = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [price, setPrice] = useState('');

    const addSlider = () => {
        database()
            .ref('Voucher/')
            .push()
            .set({
                title,
                value,
                price
            })
            .then((error) => {
                if (error) {
                    alert('Thêm thất bại')
                } else {
                    alert('Thêm thành công');
                }
            });
    };

    return (

        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 15, marginBottom: 20 }}>
                <Text>Thêm Slider</Text>
                <TextInput
                    onChangeText={text => setTitle(text)}
                    keyboardType="default"
                    value={title}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='title' />

                <TextInput
                    onChangeText={text => setValue(text)}
                    keyboardType="default"
                    value={value}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='value' />

                <TextInput
                    onChangeText={text => setPrice(text)}
                    keyboardType="default"
                    value={price}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='price' />


                <TouchableOpacity
                    onPress={() => {
                        addSlider();
                    }}
                    style={{
                        width: '60%',
                        height: 50,
                        borderRadius: 10,
                        backgroundColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                    <Text style={{ color: '#fff' }}>Thêm</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >

    )
}

export default SliderMan