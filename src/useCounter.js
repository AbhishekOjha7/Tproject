import { View, Text } from 'react-native'
import React,{useState} from 'react'

export default function useCounter() {
  const[value,setValue]=useState(0);

  const increament=()=>{
    return(setValue(value+1))
  }
  const decreament=()=>{
    return(setValue(value-1))
  }
  const reset=()=>{
    return(setValue(0));
  }
  return [value,increament,decreament,reset]
  
}