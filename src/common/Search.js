import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Search = () => {
    const navigation = useNavigation();


    return (
        <View style={{ width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#AA0000' }}>
            <View style={{ width: '80%', height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, marginLeft: 15 }}>
                <TextInput
                    placeholder='Tìm kiếm...'
                    placeholderTextColor={'black'}
                    style={{
                        width: '80%',
                        height: '100%',
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                        padding: 10,
                    }} />
                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image source={require('../images/search.png')}
                        style={{
                            width: 24,
                            height: 24,
                            tintColor: '#222222'
                        }} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('OrderCustom')
                }}
                style={{
                    width: '20%',
                    height: 40,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image source={require('../images/note.png')}
                    style={{
                        width: 35,
                        height: 35,
                        tintColor: '#fff'
                    }} />
            </TouchableOpacity>
        </View>

    )
}

export default Search