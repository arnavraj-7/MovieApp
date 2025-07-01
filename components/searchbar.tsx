import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
const SearchBar = () => {
    const router = useRouter();
    const [focus, setFocus] = useState(false)
   const handleFocus = () =>{
    setFocus(true);
   }
   const handleBlur = () => {
    setFocus(false);
   }
return (
    <View 
    style={{
        position:'relative',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    }}>
      <Ionicons name="search" size={25} color="#AB8BFF" 
      style={{
            width:30,
            height:30,
            position:'absolute',
            top:13,
            left:35,
            zIndex:1,
           }}
            />
        
        <TextInput
        placeholder='Search through 300+ movies online'
        style={[
            {
            backgroundColor:"#0F0D23",
            padding:5,
            width:'90%',
            height:50,
            paddingLeft:50,
            borderRadius:30,
            fontSize:16,
            color:'#A8B5DB'
        }
        ,
        focus ? {
            borderColor:'#AB8BFF',
            borderWidth:1
        }:""]
    }
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={'#A8B5DB'}
        onPress={() => router.push('/Search')}
        />

    </View>
  );
};

export default SearchBar