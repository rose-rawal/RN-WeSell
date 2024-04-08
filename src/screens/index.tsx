import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

export default function Home({navigation}:any) {
  setTimeout(()=>{
    navigation.navigate('SignIn')
  },3000)
  return (
    <ImageBackground source={require('../assets/home.jpg')} style={{flex:1}}>
      <Text style={style.text}>E-Commerce</Text>
    </ImageBackground>
  )
}

const style=StyleSheet.create({
  text:{
    fontSize:25,
    color:"#FFF",
    fontWeight:'bold'
  }
})