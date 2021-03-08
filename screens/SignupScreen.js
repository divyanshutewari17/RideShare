import { StatusBar } from 'expo-status-bar';
import React,{useState,Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const SignUpScreen =({ navigation }) => {
  

//state
   const [email, setEmail]=useState('');
   const [password, setPassword]=useState('');
   const [phone, setPhone]=useState('')
   const [confirm, setConfirm]=useState('')
   
   //require
   

  function sendCred(){
     if(password!=confirm){
       alert("Passwords don't match")
     }
     else{
      fetch("http://localhost:3000/signup",{
        method:'POST',
        mode:'no-cors',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
         "email": email,
         "password": password,
         "phone": phone
       })
      })
    }
   }
  return (
    <View style={styles.container}>
     <KeyboardAvoidingView behavior="position">
     <Text style={styles.text}>Create an account</Text>
      <TextInput
        label= "Email"
        style={{marginTop:20,
        marginLeft:18,marginRight:18}}
        theme={{colors:{primary:"blue"}}}
        value= {email}
        
        onChangeText={(text)=> setEmail(text)}
        mode= 'outlined'
        
      />
      <TextInput
        label= "Phone"
        style={{marginTop:20,
        marginLeft:18,marginRight:18}}
        theme={{colors:{primary:"blue"}}}
        value= {phone}
        
        onChangeText={(text)=> setPhone(text)}
        mode= 'outlined'
        
      />
      <TextInput
        label= "Password" 
        style={{marginTop:20,
        marginLeft:18,marginRight:18}}
        theme={{colors:{primary:"blue"}}}
        value= {password} 
        onChangeText={(text)=> setPassword(text)}
        mode= 'outlined'
        
      />
      <TextInput
        label= "Confirm Password" 
        style={{marginTop:20,
        marginLeft:18,marginRight:18}}
        theme={{colors:{primary:"blue"}}}
        value= {confirm} 
        onChangeText={(text)=> setConfirm(text)}
        mode= 'outlined'
        
      />
      <Button 
      style={styles.btn}  
      mode="contained"
      onPress={()=> {
        console.log(email)
        console.log(password)
      }}>
        Register
      </Button>
      

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{" "}
        </Text>
        <TouchableOpacity onPress={() => alert("Terms Clicked!")}>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
          Privacy Policy
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.navButton}
        onPress={() => navigation.navigate("Login")}
      >
          <Text style={styles.navButtonText}>Have an acount? Sign In</Text> 
      </TouchableOpacity>
      <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f9fafd",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        textAlign:"center"
      },
      text: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 28,
        marginBottom: 10,
        color: "#051d5f",
      },
    textPrivate: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginVertical: 35,
       justifyContent: "center",
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: "400",
      fontFamily: "Poppins-Light",
      color: "grey",
    },
    navButton: {
       marginTop: 15,
    },
    navButtonText: {
       fontSize: 18,
       fontWeight: "500",
       color: "#2e64e5",
       fontFamily: "Poppins-Light",
    },
  btn:{
    marginRight:18,
    marginLeft:18,
    marginTop:18,
    backgroundColor:"#2e64e5",
    fontFamily: "Poppins-Light"
  }
});

export default SignUpScreen;