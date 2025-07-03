import { View, Text, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const { width } = Dimensions.get('window');

const AnimeSenseiLanding = () => {
  const router = useRouter();

  const handleStartChat = () => {
    router.push('/chatbot/chat');
  };

  const rules = [
    "Be respectful when discussing anime and manga",
    "Avoid spoilers - mention if your question contains spoilers",
    "Feel free to ask about recommendations, characters, or plot details",
    "Ask one question at a time for better responses",
    "Be specific about what you want to know"
  ];

  const suggestions = [
    "What anime should I watch if I love action?",
    "Explain the power system in Dragon Ball Z",
    "Who is the strongest character in One Piece?",
    "Recommend manga similar to Attack on Titan",
    "What's the difference between shounen and seinen?",
    "Tell me about Studio Ghibli movies"
  ];

  const features = [
    { icon: "🎌", title: "Anime & Manga Expert", desc: "Get detailed information about your favorite series" },
    { icon: "📚", title: "Get Personalized Recommendations", desc: "Discover new anime based on your preferences" },
    { icon: "⚡", title: "Character Analysis", desc: "Deep dive into character backgrounds and abilities" },
    { icon: "🌟", title: "Plot Discussions", desc: "Analyze storylines and themes without spoilers" }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
        <ScrollView 
          style={{ flex: 1,
            paddingBottom:100
           }}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={{
            paddingHorizontal: 20,
            paddingVertical: 40,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#1a1a1a'
          }}>
            <Text style={{
              fontSize: 48,
              fontWeight: '800',
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: 8
            }}>
              Anime
            </Text>
            <Text style={{
              fontSize: 48,
              fontWeight: '800',
              color: '#ff6b6b',
              textAlign: 'center',
              letterSpacing: -2,
              marginBottom: 16
            }}>
              Sensei
            </Text>
            <Text style={{
              fontSize: 64,
              textAlign: 'center',
              marginBottom: 16
            }}>
              🎌
            </Text>
            <Text style={{
              fontSize: 18,
              color: '#888888',
              textAlign: 'center',
              lineHeight: 26
            }}>
              Your ultimate anime & manga companion
            </Text>
          </View>

          {/* Features Section */}
          <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
            <Text style={{
              fontSize: 24,
              fontWeight: '700',
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: 24
            }}>
              What I Can Help You With
            </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={{
                flexDirection: 'row',
            }}>
              {features.map((feature, index) => (
                <View key={index} style={{
                  width: width * 0.5,
                  backgroundColor: '#0a0a0a',
                  marginRight:5,
                  borderRadius: 16,
                  padding: 16,
                  marginBottom: 16,
                  borderWidth: 1,
                  borderColor: '#1a1a1a',
                  alignItems: 'center'
                }}>
                  <Text style={{ fontSize: 32, marginBottom: 8 }}>
                    {feature.icon}
                  </Text>
                  <Text style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#ffffff',
                      textAlign: 'center',
                      marginBottom: 8
                    }}>
                    {feature.title}
                  </Text>
                  <Text style={{
                      fontSize: 13,
                      color: '#888888',
                      textAlign: 'center',
                      lineHeight: 18
                    }}>
                    {feature.desc}
                  </Text>
                </View>
              ))}
            </View>
                      </ScrollView>    
          </View>
              {/* Start Chat Button */}
              <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
                <TouchableOpacity
                  onPress={handleStartChat}
                  style={{
                    backgroundColor: '#ff6b6b',
                    borderRadius: 25,
                    paddingVertical: 18,
                    paddingHorizontal: 40,
                    alignItems: 'center',
                    shadowColor: '#ff6b6b',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8
                  }}
                >
                  <Text style={{
                    color: '#ffffff',
                    fontSize: 18,
                    fontWeight: '700',
                    letterSpacing: 0.5
                  }}>
                    Start Chatting with Sensei 🚀
                  </Text>
                </TouchableOpacity>
              </View>

          {/* Rules Section */}
          <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
            <Text style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#ff6b6b',
              textAlign: 'center',
              marginBottom: 20
            }}>
              Chat Guidelines
            </Text>
            
            <View style={{
              backgroundColor: '#0a0a0a',
              borderRadius: 16,
              padding: 20,
              borderWidth: 1,
              borderColor: '#1a1a1a'
            }}>
              {rules.map((rule, index) => (
                <View key={index} style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginBottom: index === rules.length - 1 ? 0 : 12
                }}>
                  <Text style={{
                    fontSize: 16,
                    color: '#ff6b6b',
                    marginRight: 12,
                    marginTop: 2
                  }}>
                    •
                  </Text>
                  <Text style={{
                    fontSize: 15,
                    color: '#e0e0e0',
                    flex: 1,
                    lineHeight: 22
                  }}>
                    {rule}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Suggestions Section */}
          <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
            <Text style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#ff6b6b',
              textAlign: 'center',
              marginBottom: 20
            }}>
              Try Asking Me
            </Text>
            
            <View style={{ gap: 12 }}>
              {suggestions.map((suggestion, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={{
                    backgroundColor: '#0a0a0a',
                    borderRadius: 12,
                    padding: 16,
                    borderWidth: 1,
                    borderColor: '#1a1a1a',
                    borderLeftWidth: 4,
                    borderLeftColor: '#ff6b6b'
                  }}
                  onPress={() => {
                    // You can add functionality here to pre-fill the chat input
                    // For now, it just navigates to chat
                    router.push('/chatbot/chat');
                  }}
                >
                  <Text style={{
                    fontSize: 15,
                    color: '#e0e0e0',
                    lineHeight: 22
                  }}>
                    &quot;{suggestion}&quot;
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>


          {/* Footer */}
          <View style={{ 
            paddingHorizontal: 20, 
            paddingTop: 30,
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 13,
              color: '#555555',
              textAlign: 'center',
              lineHeight: 20
            }}>
              Ready to explore the world of anime and manga?{'\n'}
              Let&apos;s dive into your favorite series together!
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AnimeSenseiLanding;