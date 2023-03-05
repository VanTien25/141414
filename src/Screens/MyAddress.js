import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../redux/actions/Actions';
let addressList = [];
const MyAddress = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const addressList = useSelector(state => state.AddressReducers);
    const dispatch = useDispatch();
    console.log(addressList);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: '100%',
                        height: 70,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#AA0000'
                    }}>
                    <TouchableOpacity
                        style={{
                            justifyContent:'center',
                            alignItems: 'center',
                            marginLeft: 15,
                            borderWidth: 1,
                            borderRadius: 100,
                            borderColor: 'yellow',
                            width: 35,
                            height: 35,
                        }}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Image
                            source={require('../images/back.png')}
                            style={{ width: 24, height: 24, tintColor: 'yellow' }} />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 15, color: 'yellow' }}>
                        My Address
                    </Text>
                    <TouchableOpacity
                        style={{
                            marginRight: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: 'yellow',
                            padding: 7,
                            borderRadius: 10,
                        }}
                        onPress={() => {
                            navigation.navigate('AddAddress');
                        }}>
                        <Text style={{ color: 'yellow' }}>Add Address</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={addressList}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    width: '100%',
                                    borderWidth: 0.2,
                                    borderColor: '#8e8e8e',
                                    alignSelf: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#AA0000',
                                }}>
                                <View>
                                    <Text style={{ marginLeft: 20, color: 'black' }}>
                                        {'City: ' + item.city}</Text>
                                    <Text style={{ marginLeft: 20, color: 'black' }}>
                                        {'Building: ' + item.building}
                                    </Text>
                                    <Text style={{ marginLeft: 20, color: 'black', marginBottom: 10 }}>
                                        {'Pincode: ' + item.pincode}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    style={{ padding: 7, marginRight: 20, backgroundColor: 'black', borderRadius: 5 }}
                                    onPress={() => {
                                        dispatch(deleteAddress(index));
                                    }}>
                                    <Text style={{ color: '#fff' }}>Delete address</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default MyAddress;