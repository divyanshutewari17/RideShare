import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView,Image,Alert } from 'react-native';
import {Button, TextInput} from 'react-native-paper';
const LoginScreen =({ navigation }) => {
//state
const [email, emailInput]=useState("");
const [pass, passInput]=useState('');
  return (
    <View style={styles.container}>
     <KeyboardAvoidingView behavior="position">
     <Image source={require("../myAssets/logo.png")} style={styles.logo} />
      <TextInput
        label= "Email"
        style={{marginTop:20,
        marginLeft:18,marginRight:18}}
        theme={{colors:{primary:"blue"}}}
        value= {email}
        onChangeText={(text)=> emailInput(text)}
        mode= 'outlined'
      />
      <TextInput
        label= "Password" 
        style={{marginTop:20,
        marginLeft:18,marginRight:18}}
        theme={{colors:{primary:"blue"}}}
        value= {pass} 
        onChangeText={(text)=> passInput(text)}
        mode= 'outlined'
      />
      <Button style={styles.btn}  mode="contained" onPress={()=>navigation.navigate('Home')}>
        Login
      </Button>
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingTop: 50,
        textAlign:"center",
        
      },
      logo: {
        height: 150,
        width: 150,
        resizeMode: "cover",
        marginLeft:"25%"
      },
      text: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 28,
        marginBottom: 10,
        color: "#051d5f",
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
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

export default LoginScreen;