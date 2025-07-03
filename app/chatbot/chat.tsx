import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
    const [input, setInput] = useState("");
  const handleSend = async (message: string) => {
          setInput("");

      setMessages((prev) => {
          if (prev === undefined) {
              return [{ role: "user", content: message }];
            }
            return [...prev, { role: "user", content: message }];
        });
    const res = await axios.post("http://192.168.29.210:8001/chat", {
      messages: [...message, { role: "user", content: message }],
    });
    console.log(res.data.response);

    setMessages((prev) => {
      if (prev === undefined) {
        return [{ role: "assistant", content: res.data.response }];
      }
      return [...prev, { role: "assistant", content: res.data.response }];
    });
  };
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  return (
    <View
      className="flex-1 bg-black"
      style={{
        paddingTop: 50,
        paddingHorizontal: 20,
      }}
    >
      <Text className="text-white">Chat about anime</Text>
      <View>
        <ScrollView className="pb-10 px-4">
          {messages.map((message, index) => {
            return (
              <View className="p-4 bg-slate-700 rounded-lg mb-2" key={index}>
                <Text className={`text-white`}>
                  {message.role + " : "} {message.content}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <TextInput
        placeholder="Type your message here"
        onSubmitEditing={(e) => {
          e.preventDefault();
         handleSend(e.nativeEvent.text);
        }}
        value={input}
        onChange={(e) => setInput(e.nativeEvent.text)}
        style={{
          position: "absolute",
          bottom: 240,
          width: "100%",
        }}
        className="bg-gray-700 px-4 py-2 rounded-full text-white"
      />
    </View>
  );
};

export default Chat;
