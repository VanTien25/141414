import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'

import database from '@react-native-firebase/database';

const ProductsManager = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [star, setStar] = useState('');
    const [desc, setDesc] = useState('');

    const addProduct = () => {
        database()
            .ref('Products/')
            .push()
            .set({
                category,
                title,
                price,
                size,
                image,
                star,
                desc,
            })
            .then((error) => {
                if (error) {
                    alert('Thêm thất bại')
                } else {
                    alert('Thêm thành công');
                    navigation.goBack();
                }
            });
    };

    return (

        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 15, marginBottom: 20 }}>
                <Text>Thêm sản phẩm</Text>
                <TextInput
                    onChangeText={text => setTitle(text)}
                    keyboardType="default"
                    value={title}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='title' />

                <TextInput
                    onChangeText={text => setPrice(text)}
                    value={price}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='price' />

                <TextInput
                    onChangeText={text => setSize(text)}
                    value={size}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='size' />

                <TextInput
                    onChangeText={text => setImage(text)}
                    value={image}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='image' />

                <TextInput
                    onChangeText={text => setCategory(text)}
                    value={category}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='category' />

                <TextInput
                    onChangeText={text => setStar(text)}
                    value={star}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='star' />

                <TextInput
                    onChangeText={text => setDesc(text)}
                    value={desc}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='desc' />

                <TouchableOpacity
                    onPress={() => {
                        addProduct();
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

export default ProductsManager