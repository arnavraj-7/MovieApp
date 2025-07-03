import { View, Text, ScrollView, } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import SearchBar from "@/components/searchbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
// import YoutubePlayer from "react-native-youtube-iframe";
import Card from "@/components/card";
import useAnime from "../../hooks/useMovie";
// import useAnime from "../hooks/useanime";
import {data} from './../../data/data'
import MangaCard from "@/components/mangaCard";
import { LoadingScreen } from "@/components/loading";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [top,setTop] = useState<Anime[]>([]);
  const [upcoming,setUpcoming] = useState<Anime[]>([]);
  const [manga,setManga] = useState<Manga[]>([]);
  const { fetchTop,fetchUpcoming,fetchManga } = useAnime();
  const [playing, setPlaying] = useState(false);

  useEffect(()=>{

    console.log("fetching");

    async function fetch() {
    setLoading(true);
    const top:any=  await fetchTop();
      setTop(top);
    const upcoming = await fetchUpcoming();
    setUpcoming(upcoming);
    const manga = await fetchManga();
    setManga(manga)
      setLoading(false);
  }
  fetch();
  },[]);
  if (loading) {
    return (
          <LoadingScreen/>

    );
  }
  return (
    <View style={{ backgroundColor: '#0a0a0a', flex: 1, paddingBottom: 100 }}>
      <Image
        source={require("./../../assets/images/bg.png")}
        style={{
          position: "absolute",
          top: 0,
          zIndex: 0,
          height: "50%",
          width: "100%",
          opacity: 0.2,
        }}
        alt="highlight"
      />

      {/* Modern Header Section */}
      <SafeAreaView style={{ zIndex: 2 }}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        >
          {/* Top Row - Greeting & Profile */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#888888",
                  fontSize: 16,
                  fontWeight: "400",
                  marginBottom: 8,
                }}
              >
                Welcome back! 👋
              </Text>
              <View style={{ position: 'relative' }}>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 32,
                    fontWeight: "800",
                    letterSpacing: -1,
                    textShadowColor: 'rgba(255, 107, 107, 0.3)',
                    textShadowOffset: { width: 0, height: 2 },
                    textShadowRadius: 8,
                  }}
                >
                  anime
                  <Text style={{ color: "#ff6b6b" }}>Verse</Text>
                </Text>
                <View
                  style={{
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: 3,
                    backgroundColor: '#ff6b6b',
                    borderRadius: 2,
                    opacity: 0.6,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView
        className="flex-1 px-2 py-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
          zIndex: 1,
        }}
      >
        <SearchBar />
        
        {/* Top Animes Section */}
        <View style={{ marginTop: 40, paddingHorizontal: 16 }}>
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: 20,
            position: 'relative'
          }}>
            <View style={{
              backgroundColor: '#ff6b6b',
              width: 4,
              height: 40,
              borderRadius: 2,
              marginRight: 16,
            }} />
            <View style={{ flex: 1 }}>
              <Text style={{
                color: '#FFFFFF',
                fontSize: 28,
                fontWeight: '700',
                letterSpacing: -0.5,
                textShadowColor: 'rgba(0, 0, 0, 0.3)',
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 4,
              }}>
                Top Animes
              </Text>
              <Text style={{
                color: '#ff6b6b',
                fontSize: 14,
                fontWeight: '500',
                marginTop: 2,
                opacity: 0.8,
              }}>
                Most popular right now
              </Text>
            </View>
          </View>
          <ScrollView horizontal className="overflow-x-scroll" showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row gap-x-5">
              {top?.map((anime,index) => (
               <Card anime={anime} key={index}/>
              ))}
            </View>
          </ScrollView>
        </View>
        {/* Random Animes Section */}
        <View style={{ marginTop: 40, paddingHorizontal: 16 }}>
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: 20,
            position: 'relative'
          }}>
            <View style={{
              backgroundColor: '#4ecdc4',
              width: 4,
              height: 40,
              borderRadius: 2,
              marginRight: 16,
            }} />
            <View style={{ flex: 1 }}>
              <Text style={{
                color: '#FFFFFF',
                fontSize: 28,
                fontWeight: '700',
                letterSpacing: -0.5,
                textShadowColor: 'rgba(0, 0, 0, 0.3)',
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 4,
              }}>
                Random Animes and Movies
              </Text>
              <Text style={{
                color: '#4ecdc4',
                fontSize: 14,
                fontWeight: '500',
                marginTop: 2,
                opacity: 0.8,
              }}>
                Discover something new
              </Text>
            </View>
          </View>
          <ScrollView horizontal className="overflow-x-scroll" showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row gap-x-5">
              {data?.map((anime,index) => (
               <Card anime={anime} key={index}/>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Upcoming Animes Section */}
        <View style={{ marginTop: 40, paddingHorizontal: 16 }}>
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: 20,
            position: 'relative'
          }}>
            <View style={{
              backgroundColor: '#ffa726',
              width: 4,
              height: 40,
              borderRadius: 2,
              marginRight: 16,
            }} />
            <View style={{ flex: 1 }}>
              <Text style={{
                color: '#FFFFFF',
                fontSize: 28,
                fontWeight: '700',
                letterSpacing: -0.5,
                textShadowColor: 'rgba(0, 0, 0, 0.3)',
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 4,
              }}>
                Upcoming Animes
              </Text>
              <Text style={{
                color: '#ffa726',
                fontSize: 14,
                fontWeight: '500',
                marginTop: 2,
                opacity: 0.8,
              }}>
                Coming soon to watch
              </Text>
            </View>
          </View>
          <ScrollView horizontal className="overflow-x-scroll" showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row gap-x-5">
              {upcoming?.map((anime,index) => (
               <Card anime={anime} key={index}/>
              ))}
            </View>
          </ScrollView>
        </View>
        {/* Top Animes Section */}
        <View style={{ marginTop: 40, paddingHorizontal: 16 }}>
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: 20,
            position: 'relative'
          }}>
            <View style={{
              backgroundColor: '#ff6b6b',
              width: 4,
              height: 40,
              borderRadius: 2,
              marginRight: 16,
            }} />
            <View style={{ flex: 1 }}>
              <Text style={{
                color: '#FFFFFF',
                fontSize: 28,
                fontWeight: '700',
                letterSpacing: -0.5,
                textShadowColor: 'rgba(0, 0, 0, 0.3)',
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 4,
              }}>
                 Manga
              </Text>
              <Text style={{
                color: '#ff6b6b',
                fontSize: 14,
                fontWeight: '500',
                marginTop: 2,
                opacity: 0.8,
              }}>
                Most popular right now
              </Text>
            </View>
          </View>
          <ScrollView horizontal className="overflow-x-scroll" showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row gap-x-5">
              {manga?.map((manga,index) => (
               <MangaCard manga={manga} key={index}/>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;