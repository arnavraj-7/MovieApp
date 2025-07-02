import { View, Text, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const Chat = () => {
    const handleSend=async(message:string)=>{
        setMessages((prev)=>{
            if(prev===undefined){
                return {
                    human:[message],bot:[
                        
                    ]
                }
            }
            return {
                human:[...prev.human,message],bot:[...prev.bot]
            }
        })
        const res = await axios.post('http://192.168.29.210:8001/chat',messages);
        console.log(res.data);
        setMessages((prev)=>{
            if(prev===undefined){
                return {
                    human:[message],bot:[
                        
                    ]
                }
            }
            return {
                human:[...prev.human],bot:[...prev.bot,res.data]
            }
        })
    }
  const [messages, setMessages] = useState<{human:string[],bot:string[]}>();
  return (
    <View className='flex-1 bg-black'
    style={{
        paddingTop:50,
        paddingHorizontal:20
    }}
    >
      <Text className='text-white'>Chat about anime</Text>
      <View>
    <ScrollView className='pb-10 px-4'>

    </ScrollView>
      </View>
      <TextInput

      placeholder='Type your message here'
      onSubmitEditing={handleSend}
      style={{
        position:'absolute',
        bottom:240,
        width:'100%'
      }}
      className='bg-gray-700 px-4 py-2 rounded-full text-white'
      />
    </View>
  )
}

export default Chat