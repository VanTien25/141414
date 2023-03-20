import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import database from '@react-native-firebase/database';

const SliderMan = () => {
    const [image, setImage] = useState('');

    const addSlider = () => {
        database()
            .ref('Slider/')
            .push()
            .set({
                image,
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
                    onChangeText={text => setImage(text)}
                    keyboardType="default"
                    value={image}
                    style={{ width: '60%', height: 40, marginTop: 15, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}
                    placeholder='image' />


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