import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export const LoadingScreen = () => {
  return (
    <LinearGradient
      colors={["#0f0f1a", "#1a1a2e", "#000"]}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <Text style={{
        fontSize: 40,
        marginBottom: 10,
        color: "#ff6b6b"
      }}>
        ⏳🎌
      </Text>

      <Text style={{
        fontSize: 22,
        fontWeight: "bold",
        color: "#f8fafc",
        marginBottom: 8
      }}>
        Summoning anime details...
      </Text>

      <Text style={{
        color: "#a0aec0",
        fontSize: 14,
        textAlign: "center"
      }}>
        Hang tight, your otaku data is on the way!
      </Text>

      <ActivityIndicator
        size="large"
        color="#8b5cf6"
        style={{ marginTop: 24 }}
      />
    </LinearGradient>
  );
};
