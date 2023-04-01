import { View, Text } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import auth, { firebase } from '@react-native-firebase/auth';

import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import Checkout from './Screens/Checkout';
import OrderSucess from './OrderSucess';
import ForgotPass from './Screens/ForgotPass';
import Code from './Screens/Code';
import Detail from './Screens/Detail';
import Category from './Screens/Category';
import OrderCustom from './Screens/OrderCustom'
import VoucherStore from './Screens/VoucherStore'
import MyOrder from './Screens/MyOrder'
import SearchScreen from './Screens/SearchScreen'
import Admin from './Screens/Admin'
import AdminDetail from './Screens/AdminDetail'
import AddProduct from './Screens/AddProduct'
import AddVoucher from './Screens/AddVoucher'
import ListOrder from './Screens/ListOrder'
import AddCategory from './Screens/AddCategory'
import AddBanner from './Screens/AddBanner'
import DetailMyOrder from './Screens/DetailMyOrder'
import DetailOrderAdmin from './Screens/DetailOrderAdmin'
import ListWait from './Screens/ListWait'

const Stack = createStackNavigator();

const AppNavigator = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <Stack.Navigator >
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Splash"
                    component={Splash} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Login"
                    component={Login} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Signup"
                    component={Signup} />
            </Stack.Navigator>

        );
    }

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="MyAddress"
                component={MyAddress} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="AddAddress"
                component={AddAddress} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Checkout"
                component={Checkout} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="OrderSuccess"
                component={OrderSucess} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="ForgotPass"
                component={ForgotPass} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Code"
                component={Code} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Detail"
                component={Detail} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Category"
                component={Category} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="OrderCustom"
                component={OrderCustom} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="VoucherStore"
                component={VoucherStore} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="MyOrder"
                component={MyOrder} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="SearchScreen"
                component={SearchScreen} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="AdminDetail"
                component={AdminDetail} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Admin"
                component={Admin} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="AddProduct"
                component={AddProduct} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="AddVoucher"
                component={AddVoucher} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="ListOrder"
                component={ListOrder} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="AddCategory"
                component={AddCategory} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="AddBanner"
                component={AddBanner} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="DetailMyOrder"
                component={DetailMyOrder} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="DetailOrderAdmin"
                component={DetailOrderAdmin} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="ListWait"
                component={ListWait} />

        </Stack.Navigator>
    )
}

export default () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    )
};