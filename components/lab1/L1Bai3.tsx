import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
// import { MaterialIcons } from '@expo/vector-icons'; 
const L1Bai3 = () => {
    const items = [
       {err: false, color: 'green'},
       {err: false, color: 'blue'},
       {err: true, color : 'red'}
    ]
    const WrapInput = ({item}:any) : React.JSX.Element =>{
        return(
            <View style = {styles.wrapinputContainer} >
                <Text style={styles.titlestyle}>Title *</Text>
                <TextInput
                placeholder='Place holder'
                style={[styles.inputStyle, {borderColor: item.color},]}

                />

            </View>
        )
    }
  return (
    <View style = {{flex: 1, alignItems: 'center',}}>
        {items.map((e , index) =>{
            return <WrapInput item={e} />
        })}
    </View>
  )
}
const styles = StyleSheet.create({
    wrapinputContainer:{
        width: '90%',
        elevation: 12
    },
    titlestyle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    inputStyle:{
        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        width: '100%'
    },
    error:{
        color:'red'
    }
})
export default L1Bai3