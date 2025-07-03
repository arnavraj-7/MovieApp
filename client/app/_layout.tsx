import { Stack } from "expo-router";
import './globals.css'
export default function RootLayout() {
  return( <Stack >
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="anime/[id]" options={{ headerShown: false }} />
    <Stack.Screen name="manga/[id]" options={{ headerShown: false }} />
    <Stack.Screen name="chatbot/chat" options={{ headerShown: false }} />
    </Stack>);
}
