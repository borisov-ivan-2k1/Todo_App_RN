import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const AppCard = (props) => {
  return (
    <View style={{...styles.default, ...props.style}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  default: {
    padding: 20,
    // borderWidth: 2,
    // borderColor: THEME.MAIN_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset : {width: 2, height: 2},
    elevation: 8,
    borderRadius: 10,
    backgroundColor: '#fff'
  }
})