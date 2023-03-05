import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const ProductItem = ({ item, onAddToCart, onAddWishlist }) => {
    const navigation = useNavigation();
    const goDetail = () => {
        navigation.navigate('Detail');
    };

    return (
        <TouchableOpacity
            onPress={() => {
                goDetail();
            }}
            style={{
                borderRadius: 20,
                elevation: 5,
                width: 200,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
                backgroundColor: '#fff',
                marginBottom: 10,
            }}>
            <View style={{ width: '100%' }}>
                <Image
                    source={item.image}
                    style={{
                        width: '100%',
                        height: 120,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}
                />

                <Text
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        fontSize: 12,
                        color: 'black',
                        fontWeight: '600',
                    }}>
                    {item.name}
                </Text>
                <View
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10,
                    }}>
                    <Text
                        style={{
                            marginTop: 5,
                            fontSize: 18,
                            color: 'red',
                            fontWeight: '600',
                            marginBottom: 10,
                        }}>
                        {item.price + ' VND'}
                    </Text>
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            padding: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}
                        onPress={() => {
                            onAddToCart(item);
                        }}>
                        <Text style={{ color: '#000' }}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
                        width: 40,
                        elevation: 5,
                        height: 40,
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 10,
                        right: 10,
                    }}
                    onPress={() => {
                        onAddWishlist(item);
                    }}>
                    <Image
                        source={require('../images/like.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>

                <ImageBackground
                    source={require('../images/star.png')}
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 10,
                        left: 10,
                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: 'red'
                    }}>20</Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};
export default ProductItem