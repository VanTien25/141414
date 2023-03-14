import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const AddDetail = () => {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                alignItems: 'center',
                height: 50,
                flexDirection: 'row',
                backgroundColor: '#fff',
                elevation: 5,
            }}>
            <TouchableOpacity
                style={{
                    width: '75%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#AA0000'
                }}>
                <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '25%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                }}>
                <Image
                    source={require('../images/like.png')}
                    style={{
                        width: 24,
                        height: 24,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default AddDetail