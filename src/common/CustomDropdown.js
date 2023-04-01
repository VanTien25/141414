import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const CustomDropdown = (x) => {
    const [selectedCategory, setSelectedCategory] = useState('Chọn loại sản phẩm')
    const [isClicked, setIsClicked] = useState(false);
    const data = x.data;

    const sendData = (x) => {
        x.parentCallback(selectedCategory);
    };

    return (
        <View style={{ marginBottom: 10 }}>
            <TouchableOpacity
                onPress={() => {
                    setIsClicked(!isClicked);
                }}
                style={{
                    width: '90%',
                    height: 50,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#8e8e8e',
                    alignSelf: 'center',
                    mmarginTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: 15,
                    paddingRight: 15,
                }}>
                <Text>{selectedCategory}</Text>
                {
                    isClicked ?
                        (<Image source={require('../images/upload.png')}
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />) :
                        (<Image source={require('../images/dropdown.png')}
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />)
                }
            </TouchableOpacity>
            {
                isClicked ?
                    <View style={{
                        width: '90%',
                        borderRadius: 10,
                        backgroundColor: '#fff',
                        elevation: 5,
                        alignSelf: 'center',
                    }}>
                        {
                            data.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            setSelectedCategory(item);
                                            setIsClicked(false);
                                        }}
                                        style={{
                                            width: '85%',
                                            height: 50,
                                            borderBottomWidth: 0.5,
                                            borderBottomColor: '#8e8e8e',
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    : null
            }
        </View>
    )
}

export default CustomDropdown