import React from 'react'
import { Tabs } from 'expo-router'
import { ImageBackground } from 'expo-image'
import { images } from '@/constants/images'

const _layout = () => {
  return (
  <Tabs>
    <Tabs.Screen
    name="index"
    options={{
        title:"Home",
        headerShown:false
        
    }}/>
    <Tabs.Screen
    name='search'
    options={{
        title:"Search",
        headerShown:false,
        tabBarIcon:({focused})=>{
            return (
                <>
                <ImageBackground source ={images.highlight}/>

                </>
            )
        }
    }}/>
    <Tabs.Screen 
    name='saved'
    options={{
        title:"Saved",
        headerShown:false
    }}

    />
  </Tabs>
  )
}

export default _layout