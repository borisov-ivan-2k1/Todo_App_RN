import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const AppText = props => (
    <Text style={{ ...styles[props.size] , ...style }}>{props.children}</Text>
  )

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'roboto-regular'
  },
  bold: {
    fontFamily: 'roboto-regular'
  }
})