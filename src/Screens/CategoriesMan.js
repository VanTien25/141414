import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'

import database from '@react-native-firebase/database';

const CategoriesMan = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const addCategory = () => {
        database()
            .ref('Category/' + id)
            .set({
                name,
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
                <Text>Thêm Loại Sản Phẩm</Text>
                <TextInput
                    onChangeText={text => setId(text)}
                    keyboardType="default"
                    value={id}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='id' />

                <TextInput
                    onChangeText={text => setName(text)}
                    keyboardType="default"
                    value={name}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='name' />


                <TouchableOpacity
                    onPress={() => {
                        addCategory();
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

export default CategoriesMan