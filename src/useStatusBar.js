import { View, Text, Platform } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { StatusBar } from 'react-native';

export default function useStatusBar(style, animated = true) {
  useFocusEffect(
    React.useCallback(() => {
      console.log("render");
      {
        Platform.OS === 'ios' ?StatusBar.setBarStyle(style,animated) : StatusBar.setBarStyle(style, animated)
      }
    }, [])
  );
}