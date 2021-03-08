import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, FlatList, View,ScrollView } from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search=({navigation})=>{
    const [source,setSource]=useState('')
    const [destination, setDestination]=useState('')
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Find a ride</Text>
            <TextInput
                label="Source"
                style={styles.textInput}
                theme={{colors:{primary:"blue"}}}
                value={source}
                onChangeText={text=>{setSource(text)}}
                mode='outlined'
            />
            <Ionicons name="arrow-down-sharp" color="green" size={30}/>
            <TextInput
                label="Destination"
                style={styles.textInput}
                theme={{colors:{primary:"blue"}}}
                value={destination}
                onChangeText={text=>{setDestination(text)}}
                mode='outlined'
            />
            <Button style={styles.btn}  mode="contained">
                 Search
            </Button>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        backgroundColor: "#f9fafd",
        flex: 1,
        
        padding: 20,
        textAlign:"center"
    },
    text: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 28,
        marginBottom: 10,
        marginTop:10,
        color: "#051d5f",
    },
    textInput:{
        
        marginLeft:18,
        marginRight:18
    },
    btn:{
        marginRight:18,
        marginLeft:18,
        marginTop:18,
        backgroundColor:"#2e64e5",
        fontFamily: "Poppins-Light"
      }
})
export default Search;