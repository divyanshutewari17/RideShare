import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, FlatList, View,ScrollView } from 'react-native';
import {Button, FAB,Card, Title,Paragraph} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen=({navigation})=>{
    const data=[
        {id:1, source:"Haldwani", destination:'Nainital', phone:"7579492663"},
        {id:2, source:"Chandigarh", destination:"Shimla", phone:"7579492663"},
        {id:3, source:"Shimla", destination:"Solan", phone:"7579492663"},
        {id:4, source:"Dehradun", destination:"Delhi", phone:"7579492663"},
        {id:5, source:"Dehradun", destination:"Mussorie", phone:"7579492663"},
        {id:6, source:"Nainital", destination:"Almora", phone:"7579492663"},
        {id:7, source:"Delhi", destination:"Jaipur", phone:"7579492663"}
    ]

    // rendering data
    const renderList =((item)=>{
        return(
        <Card style={styles.card}>
                <Title>{item.source} → {item.destination}</Title>
                <Paragraph>
                    <Text>Time: </Text> 11:30 AM
                </Paragraph>
                <Paragraph>
                    <Text>Date: </Text> March 10, 2021
                </Paragraph>
                <Paragraph>
                    <Text>Mobile: </Text> {item.phone}
                </Paragraph>
            </Card>
        )
    })
    return(
        <View style={styles.container}>
            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                label="Add new ride"
            />
            <Text style={styles.text}>Your Upcoming Rides</Text>
            <ScrollView>
              <FlatList
                  data={data}
                  renderItem={({item})=>{
                      return renderList(item)
                  }}
                  keyExtractor={item=>`${item.id}`}
              />
            
            </ScrollView>
            
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
    fab:{
      justifyContent:"center",
      marginBottom:10
    },
    card:{
        paddingLeft:20,
        paddingBottom:5,
        elevation:5,
        marginBottom:10,
        marginTop:10
    }
  })
export default HomeScreen;