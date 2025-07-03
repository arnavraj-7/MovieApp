import { View, Text } from 'react-native'
import React from 'react'
import {Skeleton } from 'moti/skeleton'
const skeletonCard = () => {
  return (
    <View className='flex flex-col gap-y-3'>
      <View
      style={{
        marginBottom:20
      }}
      >
      <Skeleton show  width={150} height={200}/>

      </View>
      <View style={{marginBottom:10}}>

      <Skeleton show  width={120} height={20}/>
      </View>
      <View style={{marginBottom:5}}>
      <Skeleton show  width={70} height={20}/>
      </View>
      <Skeleton show  width={70} height={20}/>
    
    </View>
  )
}

export default skeletonCard