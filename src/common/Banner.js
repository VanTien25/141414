import { View, Text, Image } from 'react-native'
import React from 'react'

const Banner = () => {
    return (
        <Image
            source={require('../images/banner.png')}
            style={{
                width: '90%',
                height: 160,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 10
            }} />
    )
}

export default Banner