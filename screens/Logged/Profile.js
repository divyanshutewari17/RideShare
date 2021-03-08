import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {Button, FAB,Card, Title,Paragraph} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient'
const Profile = ({navigation}) =>{
    return(
        <View style={styles.container}>
         <LinearGradient
           colors={['blue','#50B3F5','#4FCEEE']}
           style={{height:"30%"}}
         ></LinearGradient> 
         <View style={{alignItems:"center"}}>
           <Image
              style={{width:150,height:150,borderRadius:75, marginTop:-75}}
              source={require('./images.png')}
           />
           <Text style={styles.text}>Divyanshu Tewari</Text>
         </View>
         <Card style={styles.card}>
             <View style={styles.cardContent}>
                <Ionicons name="mail" size={32} color="blue" />
                <Text style={styles.mytext}>tewari.divyanshu17@gamil.com</Text>
             </View>
             
         </Card>
         <Card style={styles.card}>
             <View style={styles.cardContent}>
                <Ionicons name="call-sharp" size={32} color="blue" />
                <Text style={styles.mytext}>+91 7579492663</Text>
             </View>
             
         </Card>
        </View>
    )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    marginBottom: 10,
    marginTop:10,
    color: "#051d5f",
  },
  mytext:{
    fontSize:18,
    marginTop:5,
    marginLeft:5
  },
  cardContent:{
    flexDirection:'row',
    padding:8
  },
  card:{
    margin: 5,
    backgroundColor: "#f9fafd"
  }
})
export default Profile;