import {
    View,
    Text,
    FlatList,
    Image,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { addOrder } from '../redux/actions/Actions';
const Checkout = () => {
    return (
        <View style={{ flex: 1}}>
            <View style={{
                width: '100%',
                height: 80,
                borderWidth: 1
            }}>
                
            </View>
        </View>
    )
};

export default Checkout;