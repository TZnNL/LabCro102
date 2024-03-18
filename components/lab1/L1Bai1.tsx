import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
const L1Bai1 = () => {

  const CustomComponent = ({name, link}:{name:String, link:String}) : React.JSX.Element =>{
    return (
      <View style={{width: '100%', height: 80, justifyContent: 'space-between', paddingHorizontal: 15,alignItems: 'center', flexDirection: 'row'}}>
      <Icon name="rocket" size={30} color="red" />
        <Text>{name}</Text>
        <Image source={{ uri: link }}
          style={{ width: 80, height: 80 }}
        />
      </View>
    )
}
const items = [
  {name: 'Header' , link: 'https://images.unsplash.com/photo-1618481187862-904021f56177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {name: 'Trang chu' , link:''},
  {name: '' ,link:''},


]
  return (
    <View style={{flex: 1,}}>
      {items.map((item,index) =>{
       return <CustomComponent key={item.name} name={item.name} link={item.link}/>
      })}
    </View>
  )
}

export default L1Bai1