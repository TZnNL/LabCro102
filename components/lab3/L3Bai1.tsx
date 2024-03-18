import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const L3Bai1 = () => {
    const
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{width: 100, height: 50, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
        <Text>Move</Text>
      </TouchableOpacity>
      <View style={{width: 100, height: 100, backgroundColor:'yellow', borderRadius: 12, marginTop: 20}}></View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})
export default L3Bai1