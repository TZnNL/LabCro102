import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const L2Bai2 = () => {
    const lichtrinh = {
        local: 'Ho tram, vung tau', date :'9:00 AM - 12:AM, 12/12/2024', car: 'Xe bus', time: '21:00 - 22:00',
        link:'https://i.pinimg.com/564x/e8/de/cc/e8decccd8715f26d12e43c43be4b9fb5.jpg'
    }
    const khachsan ={
        name: 'Hong quynh',
        time: '6:00 AM - 12:00AM', localtion: '234 Quang trung, Ho Chi Minh'
    }
    const CustomView = ({item}:any) :React.JSX.Element =>{
        return(
            <View style={styles.container} >
                <Text style={styles.f22}>Lich trinh</Text>
                <View style={styles.boxChild}>
                    <Text>Dia diem</Text>
                    <Text style={styles.f18} >{item.local}</Text>
                    <Text>Thoi gian</Text>
                    <Text style={styles.f18} >{item.date}</Text>
                    <Text>Phuong tien di chuyen</Text>
                    <Text style={styles.f18} >{item.car}</Text>
                    <Text>Thoi gian</Text>
                    <Text style={styles.f18} >{item.tiime}</Text>
                    <Text>Hinh anh</Text>
                    <Image
                    style={styles.imgele}
                    source={{uri : item.link}} />
                </View>
            </View>
        )

        
    }

    const CustomView2 = ({item}:any) :React.JSX.Element =>{
        return(
            <View style={styles.container} >
                <Text style={styles.f22}>Khach san</Text>
                <View style={styles.boxChild}>
                    <Text>Ten khach san</Text>
                    <Text style={styles.f18} >{item.name}</Text>
                    <Text>Gio mo cua</Text>
                    <Text style={styles.f18} >{item.time}</Text>
                    <Text>Dia diem</Text>
                    <Text style={styles.f18} >{item.localtion}</Text>
                    <TouchableOpacity style={{width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', marginTop: 20}}>
                        <Text style={{fontSize: 18, color: 'white'}} >CHI TIET</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
  
}
return (
    <View>
      <ScrollView>
      <CustomView item = {lichtrinh}/>
      <CustomView2 item={khachsan}/>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical: 15,
        justifyContent:'center',
        alignItems: 'center'
    },
    boxChild:{
        borderRadius: 12,
        elevation: 15,
        backgroundColor: 'white',
        padding: '5%',
        width: '90%'
    },
    imgele:{
        width: '100%',
        aspectRatio: 16/12,
        resizeMode: 'contain'
    },
    f22:{
        fontSize: 22,
        fontWeight: 'bold',
        width: '90%',
        marginBottom: 10
    },
    f18:{
        fontSize: 18,
        fontWeight: 'bold',

    }
})
export default L2Bai2