import { View, Text, TextInput } from 'react-native'
import React from 'react'

type keyboardType="default" | "numeric" | "email-address" | "phone-pad"
interface InputTextProps{
    name:string,
    keyboardType?:keyboardType
}
const InputText:React.FC<InputTextProps> = ({name,keyboardType='default'}) => {
  return (
    <View style={{
        borderBottomColor:"black",
        borderBottomWidth:1,
        marginHorizontal:20,
        marginBottom:10
    }}>
    <TextInput placeholder={name} keyboardType={keyboardType} secureTextEntry={true}/>
    </View>
  )
}

export default InputText