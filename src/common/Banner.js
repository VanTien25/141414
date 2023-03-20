import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import database from '@react-native-firebase/database';

const Banner = ({item}) => {
    return (
        <Image
            src={item.image}
            style={{
                width: '90%',
                height: 160,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 10
            }}
        />
    )

}

export default Banner