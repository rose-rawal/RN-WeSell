import { View, Text, TextInput } from 'react-native'
import React from 'react'
import InputText from '../../components/InputText'
import RoundButton from '../../components/RoundButton'

const SignUp = () => {
  return (
    <View style={{flex:1}}>
      <Text style={{fontSize:30, fontWeight:'700',color:'black',textAlign:"center",paddingTop:10}}>SignUp</Text>
      <Text style={{textAlign:'center',margin:20}}>Create a New Account and Join Us in Our Journey Together</Text>
      <View style={{flex:1,justifyContent:"center"}}>
        <InputText name='Email' keyboardType={'email-address'}/>
        <InputText name='Password' keyboardType={'default'}/>
        <RoundButton labela='SignUp'/>
      </View>
    </View>
  )
}

export default SignUp