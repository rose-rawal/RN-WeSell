

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens';
import SignIn from './src/screens/signin';
const stack=createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    
    <SafeAreaView style={{flex:1}}>
      <StatusBar hidden={true}/>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='Splash' component={Home} options={{headerShown:false}}/>
          <stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
        </stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
