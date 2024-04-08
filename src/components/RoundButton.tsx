import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface RoundButtonProps{
    labela:string;
    color:string;
    fontColor:string
}
const RoundButton:React.FC<RoundButtonProps>=({labela,color,fontColor})=> {
  return (
    <TouchableOpacity>
    <View>
      <Text style={{backgroundColor:color,paddingHorizontal:30,paddingVertical:7,fontSize:18,fontWeight:"bold",borderRadius:20,color:fontColor}}>{labela}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default RoundButton