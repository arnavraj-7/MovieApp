import { View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";


const Chat = () => {
  const [input, setInput] = useState("");
  
    const handleSend = async (message: string) => {
        if(input.trim() === '') return;
          setInput("");

      setMessages((prev) => {
            return [...prev, { role: "user", content: message }];
        });
    const res = await axios.post("https://animeverse-awjb.onrender.com/chat", {
      messages: [...messages, { role: "user", content: message }],
    });
    console.log(res.data.response);

    setMessages((prev) => {
      return [...prev, { role: "assistant", content: res.data.response }];
    });
  };
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  useEffect(() => {
    console.log(messages);
  },[messages])

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      {/* Header */}
      <SafeAreaView style={{ backgroundColor: '#000000' }}>
        <View style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: '#000000',
          borderBottomWidth: 1,
          borderBottomColor: '#1a1a1a'
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: '600',
              color: '#ffffff',
              marginRight: 8
            }}>
              Anime
            </Text>
            <Text style={{
              fontSize: 20,
              fontWeight: '700',
              color: '#ff6b6b',
              letterSpacing: -0.5
            }}>
              Sensei
            </Text>
            <Text style={{
              fontSize: 16,
              color: '#666666',
              marginLeft: 8
            }}>
              🎌
            </Text>
          </View>
          <Text style={{
            fontSize: 14,
            color: '#888888',
            textAlign: 'center',
            marginTop: 4
          }}>
            Your anime & manga guide
          </Text>
        </View>
      </SafeAreaView>

      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      >
        {/* Messages Container */}
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
          <ScrollView 
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingVertical: 20 }}
            showsVerticalScrollIndicator={false}
          >
            {messages.map((message, index) => (
              <View 
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: message.role === "user" ? 'flex-end' : 'flex-start',
                  marginBottom: 16,
                  paddingHorizontal:0
                }}
              >
                <View style={{
                  // maxWidth: '80%',
                  // minWidth: '20%',
                  backgroundColor: message.role === "user" ? '#ff6b6b' : '#0a0a0a',
                  borderRadius: 18,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  borderWidth: 1,
                  borderColor: message.role === "user" ? '#ff8a8a' : '#1a1a1a',
                }}>
                                    <Text style={{
                    color: message.role === "user" ? '#ffffff' : '#e0e0e0',
                    fontSize: 16,
                    lineHeight: 22
                  }}>
                    {message.content}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Input Container */}
        <View style={{
          paddingHorizontal: 16,
          paddingVertical: 20,
          backgroundColor: '#000000',
          borderTopWidth: 1,
          borderTopColor: '#1a1a1a'
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '',
            borderRadius: 25,
            paddingHorizontal: 20,
            paddingVertical: 4,
            borderWidth: 1,
            borderColor: '#1a1a1a'
          }}>
            <TextInput
              placeholder="Ask about anime or manga..."
              placeholderTextColor="#555555"
              value={input}
              onChangeText={setInput}
              onSubmitEditing={(e) => handleSend(e.nativeEvent.text)}
              style={{
                flex: 1,
                color: '#ffffff',
                fontSize: 16,
                paddingVertical: 12,
                paddingRight: 12
              }}
              multiline
            />
            <TouchableOpacity
              onPress={() => handleSend(input)}
              style={{
                backgroundColor: '#ff6b6b',
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginLeft: 8
              }}
            >
              <Text style={{
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: 14
              }}>
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Chat;