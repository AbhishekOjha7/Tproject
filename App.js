
import { View, Text,TouchableOpacity, SafeAreaView ,StyleSheet} from 'react-native'

import React, { useEffect, useState } from 'react'
import useCounter from './src/useCounter'

const App = () => {
  // const [count,setCount]=useState(0);
const[counter,increament,decreament,reset]=useCounter(0)
  return (
   <SafeAreaView style={styles.parent}>
     <Text>{counter}</Text>
     <TouchableOpacity style={styles.incs}>
         <Text style={styles.textinc} onPress={increament}>INC</Text>
      </TouchableOpacity >
      <TouchableOpacity  style={styles.incs}>
         <Text style={styles.textinc} onPress={decreament}>DEC</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.incs}>
         <Text style={styles.textinc} onPress={reset}>REC</Text>
      </TouchableOpacity>
   </SafeAreaView>
  )
}
export default App

const styles = StyleSheet.create({
  parent:{
    justifycontent:'center',
    alignItems:'center'
  },
  incs:{
    marginVertical:10,
    backgroundColor:'grey',
    borderWidth:1,
    borderRadius:5
  },
  textinc:{
    fontSize:20
  }
})