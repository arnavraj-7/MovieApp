import { View, Text, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { Image } from 'expo-image';
import Search from './Search';
import SearchBar from '@/components/searchbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import useMovies from '../hooks/useMovie';

const Index = () => {
  const {fetchMovies,data} = useMovies();
  useEffect(()=>{
    fetchMovies();
  },[fetchMovies]);
  return (
    <View className={"bg-[#030014] flex-1"}>
      <Image 
        source={require('./../../assets/images/bg.png')}
        style={{
          position:'absolute',
          top:0,
          zIndex:0,
          height:'50%',
          width:'100%'
        }}
        alt="highlight"
      />
      
      {/* Modern Header Section */}
      <SafeAreaView style={{ zIndex: 2 }}>
        <View style={{
          paddingHorizontal: 20,
          paddingTop: 20,
        }}>
          {/* Top Row - Greeting & Profile */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5,
          }}>
            <View>
              <Text style={{
                color: '#8B9DC3',
                fontSize: 16,
                fontWeight: '400',
                marginBottom: 4,
              }}>
                Welcome back! 👋
              </Text>
              <Text style={{
                color: '#FFFFFF',
                fontSize: 28,
                fontWeight: '700',
                letterSpacing: -0.5,
              }}>
                MovieVerse
              </Text>
            </View>
          </View>
          </View>
      </SafeAreaView>
      
      <ScrollView 
        className='flex-1' 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{minHeight:'100%',paddingBottom:10,zIndex:1}}
      >
        <SearchBar/>
        <View>
          {data}
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;