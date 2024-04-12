import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface RoundButtonProps{
    labela:string;
    color?:string;
    fontColor?:string;
    handlePress?:()=>void
}
const RoundButton:React.FC<RoundButtonProps>=({labela,color="#2a8fbc",fontColor="white",handlePress})=> {
  return (
    <TouchableOpacity onPress={handlePress}>
    <View>
      <Text style={{backgroundColor:color,paddingHorizontal:30,paddingVertical:7,fontSize:18,fontWeight:"bold",borderRadius:20,color:fontColor,textAlign:'center',marginTop:10}}>{labela}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default RoundButton