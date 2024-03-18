import { View, Text, StyleSheet, Image, TextInput, Button, Touchable, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

const colors = ['white', 'blue', 'red', 'orange', 'green']
export type User={
    name:String,
    avatar:String
}
const L2Bai1 = () => {
    const [user, setUser] = useState<User>({
        name: 'chua co ten',
        avatar:'https://cdnphoto.dantri.com.vn/6FcdFfO8Ft7brmEEo0TGIR43Jg0=/2023/10/05/tttn6894-1696489236119.jpg'
    })
    const [lastTimeUpdate, setLastTimeUpdate] = useState('ban chua cap nhat thong tin')
    const handleUpdateInfor =useCallback((_user:User) =>{setUser(_user)},[]);
    const [footerColor, setFotterColor] = useState("")
    const hnadlerRandomColor = useCallback(()=>{
        const numberrd = Math.floor(Math.random() * colors.length)
        setFotterColor(colors[numberrd])
    },[])
    useEffect(()=>{
        const c = new Date();
        const dateTime = c.getDate() + '/' + c.getMonth() +'/' + c.getFullYear() + ' - ' +c.getHours() +':' + c.getMinutes() +':'+ c.getSeconds()
        setLastTimeUpdate(dateTime)
    },[])
    const Header = ({user} : {user: User}) :React.JSX.Element =>{
        return(
            <View style={styles.headerContainer}>
                <Image source={{uri : user.avatar}} style={styles.avtStyle}/>
                <View >
                    <Text style={styles.f16}>Chon ngay moi</Text>
                    <Text style={styles.f18}>{user.name}</Text>
                </View>
            </View>
        )
    }
    const Main = () :React.JSX.Element =>{
        const [newUser, setNewUser] = useState<User>({
            name: '',
            avatar: user.avatar // Giữ nguyên ảnh đại diện
        });
    
        const handleNameChange = (text: string) => {
            setNewUser(prevUser => ({
                ...prevUser,
                name: text
            }));
        }
    
        const handleAvatarChange = (text: string) => {
            setNewUser(prevUser => ({
                ...prevUser,
                avatar: text
            }));
        }
    
        const handleUpdateUserInfo = () => {
            if (newUser.name.trim() !== '' && newUser.avatar.trim() !== '') {
                setUser(newUser);
                setNewUser({  // Đặt lại thông tin người dùng mới
                    name: '',
                    avatar: user.avatar
                });
            }
        }
    
        return(
            <View style={styles.maincontainer}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Nhập tên mới'
                    onChangeText={handleNameChange}
                    defaultValue={newUser.name} // Sử dụng defaultValue để hiển thị giá trị trong TextInput
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Nhập URL hình ảnh mới'
                    onChangeText={handleAvatarChange}
                    defaultValue={newUser.avatar} // Sử dụng defaultValue để hiển thị giá trị trong TextInput
                />
                <TouchableOpacity style={styles.btnStyle} onPress={handleUpdateUserInfo}>
                    <Text style={{color: 'white'}}>Cập nhật thông tin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle} onPress={hnadlerRandomColor}>
                    <Text style={{color: 'white'}}>Thay đổi màu nền footer</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
    
    const Footer = () :React.JSX.Element =>{
        return(
            <View style={[styles.footercontainer,{backgroundColor: footerColor}]}>
                <Text style={styles.f18}>Thoi Gian ban cap nhat thong tin: </Text>
                <Text style={styles.f18}>{lastTimeUpdate}</Text>
            </View>
        )
    }
  return (
    <View>
      <Header user={user}/>
      <Main />
      <Footer />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center'
        ,justifyContent: 'center'
    },
    headerContainer:{
        width: '100%',
        height: '10%', 
        flexDirection: 'row',
        alignItems: 'center',
    },
    avtStyle:{
        height: 80,
        width: 80, margin: 12
    },
    f16:{
        fontSize: 16
    }
    ,f18:{
        fontSize: 18,
        fontWeight:'bold'
    },
    maincontainer:{
        width: '100%',
        height: '80%',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    footercontainer:{
        width: '100%',
        height: '10%',
        justifyContent:'center',
        alignItems: 'center'
    },
    inputStyle:{
        padding: 15,
        width: '100%',
    },
    btnStyle:{
        color: 'white',
        backgroundColor: 'blue',
        marginVertical: 5
    }

})
export default L2Bai1