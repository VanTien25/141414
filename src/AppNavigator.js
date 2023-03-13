import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

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
import ProductsManager from './Screens/ProductsManager';
import CategoriesMan from './Screens/CategoriesMan';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
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
                    name="ProductsManager"
                    component={ProductsManager} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="CategoriesMan"
                    component={CategoriesMan} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;