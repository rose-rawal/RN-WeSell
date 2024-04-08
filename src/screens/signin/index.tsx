import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import RoundButton from '../../components/RoundButton'
import FullRoundButton from '../../components/fullRoundButton'

const SignIn = () => {
  return (
    <View style={{flex:1}}>
      <View style={{flex:0.5}}>
        <Image style={{
          width:"100%",
          height:"100%"
        }} resizeMode='cover' source={require('../../assets/signup/initial.png')} />
      </View>
      <View style={{
        flex:0.5,
        backgroundColor:"#efdac4",
        borderTopWidth:2,
        borderColor:"#5975a1",
        alignItems:"center",
        justifyContent:"center"
      }}>
        <Text style={styles.headi}>Re-Image</Text>
        <Text style={styles.para}>Buy yourself a new Image </Text>
        <View style={styles.buttonDiv}>
          <RoundButton labela='SignUp' color='white' fontColor='#2a8fbc'/>
          <RoundButton labela='Login' color='#2a8fbc'fontColor='white'/>
        </View>
        <Text style={styles.social}>Or connect via Social Media </Text>
        <View style={styles.socialButton}>
          <FullRoundButton Sign='G'/>
          <FullRoundButton Sign='F'/>
        </View>
      </View>
      
    </View>
  )
}

const styles=StyleSheet.create({
  headi:{
    fontWeight:"900",
    fontSize:40,
    color:"#2a8fbc"
  },
  para:{
    marginTop:10,
    marginBottom:30,
    color:"#252f6b"
  },
  buttonDiv:{
    display:"flex",
    flexDirection:"row",
    gap:20,
    marginTop:30
  },
  social:{
    color:"black",
    marginTop:50,
    marginBottom:20,
    fontSize:12
  },
  socialButton:{
    display:"flex",
    flexDirection:"row",
    alignItems:"flex-end",
    gap:20,
  }
})
export default SignIn