import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView,Image,Alert } from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Logged/HomeScreen'
import Search from './Logged/Search'
import Profile from './Logged/Profile'
import newRide from './Logged/newRide'
const Tab = createBottomTabNavigator();
const Home = ({navigation})=>{
    return(
        <NavigationContainer
           independent={true}
        >
           <Tab.Navigator
              screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = "md-home-outline"
                    }else if (route.name === 'Search') {
                       iconName = "md-search"
                    }else if(route.name==='Profile'){
                        iconName = "person-circle-outline"
                    }
             // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2e64e5',
          inactiveTintColor: 'gray',
        }}
           >
             <Tab.Screen name="Home" component={HomeScreen} />
             <Tab.Screen name="Search" component={Search} />
             <Tab.Screen name="Profile" component={Profile} />
             <Tab.Screen name="New Ride" component={newRide} />
             
           </Tab.Navigator>
         </NavigationContainer>
    )
    
}

export default Home;