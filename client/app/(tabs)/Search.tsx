import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import Card from '@/components/card'
import { LoadingScreen } from '@/components/loading'


const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const handleSearch = async() => {
    setResults([]);
    setLoading(true);
   const res =  await axios.get(`http://192.168.29.210:8001/search/${searchQuery}`);
   setResults(res.data);
   setLoading(false);

  }

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 }}>
          <View style={{ position: 'relative', marginBottom: 20 }}>
            <Text style={{
              color: '#FFFFFF',
              fontSize: 32,
              fontWeight: '800',
              letterSpacing: -1,
              textShadowColor: 'rgba(255, 107, 107, 0.3)',
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 8,
            }}>
              Explore
              <Text style={{ color: '#4ecdc4' }}> Animes</Text>
            </Text>
            <View style={{
              position: 'absolute',
              bottom: -4,
              left: 0,
              width: 120,
              height: 3,
              backgroundColor: '#4ecdc4',
              borderRadius: 2,
              opacity: 0.6,
            }} />
          </View>
          <Text style={{
            color: '#888888',
            fontSize: 16,
            fontWeight: '400',
            marginBottom: 25,
          }}>
            Discover your next favorite anime
          </Text>
        </View>

        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* Search Bar */}
          <View style={{ paddingHorizontal: 20, marginBottom: 25 }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#1a1a1a',
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: searchQuery ? '#4ecdc4' : '#2a2a2a',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
            }}>
              <Ionicons 
                name="search" 
                size={20} 
                color={searchQuery ? '#4ecdc4' : '#666666'} 
                style={{ marginRight: 12 }}
              />
              <TextInput
                placeholder="Search anime titles, genres..."
                placeholderTextColor="#666666"
                value={searchQuery}
                onChangeText={setSearchQuery}
                style={{
                  flex: 1,
                  color: '#FFFFFF',
                  fontSize: 16,
                  fontWeight: '400',
                }}
                onSubmitEditing={() => handleSearch()}
              />
              {searchQuery !== '' && (
                <TouchableOpacity 
                  onPress={() => setSearchQuery('')}
                  style={{
                    backgroundColor: '#2a2a2a',
                    borderRadius: 12,
                    padding: 6,
                    marginLeft: 8,
                  }}
                >
                  <Ionicons name="close" size={16} color="#666666" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Search Results */}
          <View className='flex-row flex-wrap gap-5 items-center justify-center'>
              {loading&&<View className='flex-1 justify-center items-center'>
                <Text className='text-white'
                style={{
                  fontSize: 20,
                }}>
                  Loading your search results....
                </Text>
                      <ActivityIndicator
                        size="large"
                        color="#8b5cf6"
                        style={{ marginTop: 24 }}
                      />
                </View>}
              {results.length > 0 &&    
            results.map((result:Anime) => (
              <Card key={result.mal_id} anime = {result}/>
            ))}
            </View>
              
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Search