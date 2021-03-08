import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,ScrollView } from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
const newRide=({navigation,route})=>{
    const [source, setSource]=useState('')
    const [destination,setDestination]=useState('')
    const [ seats, setSeats]=useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);



    return(
        <View>
           <TextInput
                label="Source"
                style={styles.textInput}
                theme={{colors:{primary:"blue"}}}
                value={source}
                onChangeText={text=>{setSource(text)}}
                mode='outlined'
            />
            <TextInput
                label="Destination"
                style={styles.textInput}
                theme={{colors:{primary:"blue"}}}
                value={destination}
                onChangeText={text=>{setDestination(text)}}
                mode='outlined'
            />

            <TextInput
                   label="Seats Available"
                   style={styles.textInput}
                   theme={{colors:{primary:"blue"}}}
                   value={seats}
                   onChangeText={text=>{setSeats(text)}}
            />
               <DateTimePicker
                 testID="dateTimePicker"
                 value={date}
                 mode={mode}
                 is24Hour={true}
                 display="default"
                 
               />
              
            
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

export default newRide;

