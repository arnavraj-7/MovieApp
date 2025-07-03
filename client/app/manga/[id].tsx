import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import usemanga from "../../hooks/useMovie";
import { Image } from "expo-image";
import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LoadingScreen } from "@/components/loading";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { fetchMangabyId } = usemanga();
  const [manga, setmanga] = useState<Manga>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const manga = await fetchMangabyId(id.toString());
      setmanga(manga);
      console.log(manga);
      setLoading(false);
    }
    fetch();
  }, []);

  if (loading) {
    return (
      <LoadingScreen/>
  )}
  if(manga===undefined){
    return (
      <View
        style={{
          backgroundColor: "#0a0a0f",
          minHeight: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          manga not found
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="bg-black flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      {/* Hero Section with Gradient Overlay */}
      <View className="relative px-5">
        <Image
          source={manga.images.jpg.large_image_url}
          style={{
            width: "100%",
            height: 400,
          }}
          className="absolute top-0"
        />
        <LinearGradient
          colors={[
            "transparent",
            "rgba(0,0,0,0.3)",
            "rgba(0,0,0,0.9)",
            "#000000",
          ]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 400,
          }}
        />

        {/* Main Content Container */}
        <View className="">
          {/* Header Info */}
          <View className="flex-row items-start gap-4">
            {/* Poster Image */}
            <View className="bg-gray-800 rounded-2xl p-1 shadow-2xl">
              <Image
                source={manga.images.jpg.large_image_url}
                style={{
                  width: 120,
                  height: 170,
                }}
                className="rounded-xl"
              />
            </View>

            {/* Title and Basic Info */}
            <View className="flex-1 pt-2">
              <Text
                className="text-white text-2xl font-bold mb-1"
                numberOfLines={2}
              >
                {manga?.title_english || manga.title}
              </Text>
              {/* <Text className="text-gray-300 text-sm mb-2" numberOfLines={1}>
                {manga.title_japanese}
              </Text> */}

              {/* Score and Rank */}
              <View className="flex-row items-center gap-4 mb-3">
                <View className="bg-yellow-500 px-3 py-1 rounded-full">
                  <Text className="text-black font-bold text-sm">
                    ★ {manga.score}
                  </Text>
                </View>
                <View className="bg-purple-600 px-3 py-1 rounded-full">
                  <Text className="text-white font-bold text-sm">
                    #{manga.rank}
                  </Text>
                </View>
              </View>

              {/* Quick Stats */}
              <View className="gap-1">
                <Text className="text-gray-400 text-xs">
                  {manga?.type} • {manga?.chapters} episodes 
                </Text>
                <Text className="text-gray-400 text-xs">{manga?.status}</Text>
              </View>
            </View>
          </View>

          {/* Genres */}
          <View className="flex-row flex-wrap gap-2 mt-6">
            {manga?.genres.map((genre, index) => (
              <View
                key={index}
                className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700"
              >
                <Text className="text-white text-xs font-medium">
                  {genre.name}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Synopsis */}
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              paddingBottom: 8,
              borderBottomWidth: 2,
              borderBottomColor: "#8b5cf6",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                marginRight: 8,
              }}
            >
              📚
            </Text>
            <Text
              style={{
                color: "#f8fafc",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Synopsis
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#1a1a2e",
              padding: 20,
              borderRadius: 16,
              borderLeftWidth: 4,
              borderLeftColor: "#8b5cf6",
              shadowColor: "#8b5cf6",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <Text
              style={{
                color: "#e2e8f0",
                fontSize: 14,
                lineHeight: 20,
                textAlign: "justify",
                fontWeight: "400",
              }}
            >
              {manga.synopsis}
            </Text>
          </View>
        </View>

      
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
