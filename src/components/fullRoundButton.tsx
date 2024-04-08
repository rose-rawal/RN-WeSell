import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface FullRoundButtonProps{
    Sign:string;
}

const FullRoundButton:React.FC<FullRoundButtonProps> = ({Sign}) => {
  return (
    <TouchableOpacity>
    <View>
      <Text style={{width:40,height:40,backgroundColor:"black", color:"white",textAlign:"center",fontWeight:"bold",borderRadius:25,paddingTop:8}}>{Sign}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default FullRoundButton