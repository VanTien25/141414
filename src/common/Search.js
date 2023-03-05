import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Search = () => {
    return (
        <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#AA0000' }}>
            <TextInput
                placeholder='Tìm kiếm...'
                placeholderTextColor={'black'}
                style={{
                    width: '76%',
                    height: 40,
                    borderWidth: 1,
                    backgroundColor: '#fff',
                    borderColor: '#AA0000',
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    padding: 10,
                }} />
            <TouchableOpacity
                style={{
                    width: '16%',
                    height: 40,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    backgroundColor: '#AA0000',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image source={require('../images/search.png')}
                    style={{
                        width: 24,
                        height: 24,
                        tintColor: '#fff'
                    }} />
            </TouchableOpacity>
        </View>
    )
}

export default Search