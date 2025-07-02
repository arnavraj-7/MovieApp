import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import useAnime from "../hooks/useMovie";
import { Image } from "expo-image";
import YoutubePlayer from "react-native-youtube-iframe";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
import RecomCard from "@/components/recomCard";
import { LinearGradient } from "expo-linear-gradient";
import Card from "@/components/card";

// const anime = {
//   data: {
//     mal_id: 52991,
//     url: "https://myanimelist.net/anime/52991/Sousou_no_Frieren",
//     images: {
//       jpg: {
//         image_url: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
//         small_image_url:
//           "https://cdn.myanimelist.net/images/anime/1015/138006t.jpg",
//         large_image_url:
//           "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
//       },
//       webp: {
//         image_url: "https://cdn.myanimelist.net/images/anime/1015/138006.webp",
//         small_image_url:
//           "https://cdn.myanimelist.net/images/anime/1015/138006t.webp",
//         large_image_url:
//           "https://cdn.myanimelist.net/images/anime/1015/138006l.webp",
//       },
//     },
//     trailer: {
//       youtube_id: "ZEkwCGJ3o7M",
//       url: "https://www.youtube.com/watch?v=ZEkwCGJ3o7M",
//       embed_url:
//         "https://www.youtube.com/embed/ZEkwCGJ3o7M?enablejsapi=1&wmode=opaque&autoplay=1",
//       images: {
//         image_url: "https://img.youtube.com/vi/ZEkwCGJ3o7M/default.jpg",
//         small_image_url: "https://img.youtube.com/vi/ZEkwCGJ3o7M/sddefault.jpg",
//         medium_image_url:
//           "https://img.youtube.com/vi/ZEkwCGJ3o7M/mqdefault.jpg",
//         large_image_url: "https://img.youtube.com/vi/ZEkwCGJ3o7M/hqdefault.jpg",
//         maximum_image_url:
//           "https://img.youtube.com/vi/ZEkwCGJ3o7M/maxresdefault.jpg",
//       },
//     },
//     approved: true,
//     titles: [
//       {
//         type: "Default",
//         title: "Sousou no Frieren",
//       },
//       {
//         type: "Synonym",
//         title: "Frieren at the Funeral",
//       },
//       {
//         type: "Synonym",
//         title: "Frieren The Slayer",
//       },
//       {
//         type: "Japanese",
//         title: "葬送のフリーレン",
//       },
//       {
//         type: "English",
//         title: "Frieren: Beyond Journey's End",
//       },
//     ],
//     title: "Sousou no Frieren",
//     title_english: "Frieren: Beyond Journey's End",
//     title_japanese: "葬送のフリーレン",
//     title_synonyms: ["Frieren at the Funeral", "Frieren The Slayer"],
//     type: "TV",
//     source: "Manga",
//     episodes: 28,
//     status: "Finished Airing",
//     airing: false,
//     aired: {
//       from: "2023-09-29T00:00:00+00:00",
//       to: "2024-03-22T00:00:00+00:00",
//       prop: {
//         from: {
//           day: 29,
//           month: 9,
//           year: 2023,
//         },
//         to: {
//           day: 22,
//           month: 3,
//           year: 2024,
//         },
//       },
//       string: "Sep 29, 2023 to Mar 22, 2024",
//     },
//     duration: "24 min per ep",
//     rating: "PG-13 - Teens 13 or older",
//     score: 9.3,
//     scored_by: 684815,
//     rank: 1,
//     popularity: 139,
//     members: 1154572,
//     favorites: 71354,
//     synopsis:
//       "During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them.\n\nHowever, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her \"usual\" routine of collecting spells across the continent. Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through.\n\nAs the years pass, Frieren gradually realizes how her days in the hero's party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she vows to better understand humans and create real personal connections. Although the story of that once memorable journey has long ended, a new tale is about to begin.\n\n[Written by MAL Rewrite]",
//     background:
//       "Sousou no Frieren was released on Blu-ray and DVD in seven volumes from January 24, 2024, to July 17, 2024.",
//     season: "fall",
//     year: 2023,
//     broadcast: {
//       day: "Fridays",
//       time: "23:00",
//       timezone: "Asia/Tokyo",
//       string: "Fridays at 23:00 (JST)",
//     },
//     producers: [
//       {
//         mal_id: 17,
//         type: "anime",
//         name: "Aniplex",
//         url: "https://myanimelist.net/anime/producer/17/Aniplex",
//       },
//       {
//         mal_id: 53,
//         type: "anime",
//         name: "Dentsu",
//         url: "https://myanimelist.net/anime/producer/53/Dentsu",
//       },
//       {
//         mal_id: 62,
//         type: "anime",
//         name: "Shogakukan-Shueisha Productions",
//         url: "https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions",
//       },
//       {
//         mal_id: 1003,
//         type: "anime",
//         name: "Nippon Television Network",
//         url: "https://myanimelist.net/anime/producer/1003/Nippon_Television_Network",
//       },
//       {
//         mal_id: 1143,
//         type: "anime",
//         name: "TOHO animation",
//         url: "https://myanimelist.net/anime/producer/1143/TOHO_animation",
//       },
//       {
//         mal_id: 1430,
//         type: "anime",
//         name: "Shogakukan",
//         url: "https://myanimelist.net/anime/producer/1430/Shogakukan",
//       },
//     ],
//     licensors: [
//       {
//         mal_id: 1468,
//         type: "anime",
//         name: "Crunchyroll",
//         url: "https://myanimelist.net/anime/producer/1468/Crunchyroll",
//       },
//     ],
//     studios: [
//       {
//         mal_id: 11,
//         type: "anime",
//         name: "Madhouse",
//         url: "https://myanimelist.net/anime/producer/11/Madhouse",
//       },
//     ],
//     genres: [
//       {
//         mal_id: 2,
//         type: "anime",
//         name: "Adventure",
//         url: "https://myanimelist.net/anime/genre/2/Adventure",
//       },
//       {
//         mal_id: 8,
//         type: "anime",
//         name: "Drama",
//         url: "https://myanimelist.net/anime/genre/8/Drama",
//       },
//       {
//         mal_id: 10,
//         type: "anime",
//         name: "Fantasy",
//         url: "https://myanimelist.net/anime/genre/10/Fantasy",
//       },
//     ],
//     explicit_genres: [],
//     themes: [],
//     demographics: [
//       {
//         mal_id: 27,
//         type: "anime",
//         name: "Shounen",
//         url: "https://myanimelist.net/anime/genre/27/Shounen",
//       },
//     ],
//     relations: [
//       {
//         relation: "Sequel",
//         entry: [
//           {
//             mal_id: 59978,
//             type: "anime",
//             name: "Sousou no Frieren 2nd Season",
//             url: "https://myanimelist.net/anime/59978/Sousou_no_Frieren_2nd_Season",
//           },
//         ],
//       },
//       {
//         relation: "Adaptation",
//         entry: [
//           {
//             mal_id: 126287,
//             type: "manga",
//             name: "Sousou no Frieren",
//             url: "https://myanimelist.net/manga/126287/Sousou_no_Frieren",
//           },
//         ],
//       },
//       {
//         relation: "Side Story",
//         entry: [
//           {
//             mal_id: 56885,
//             type: "anime",
//             name: "Sousou no Frieren: ●● no Mahou",
//             url: "https://myanimelist.net/anime/56885/Sousou_no_Frieren__●●_no_Mahou",
//           },
//         ],
//       },
//       {
//         relation: "Other",
//         entry: [
//           {
//             mal_id: 56805,
//             type: "anime",
//             name: "Yuusha",
//             url: "https://myanimelist.net/anime/56805/Yuusha",
//           },
//           {
//             mal_id: 58313,
//             type: "anime",
//             name: "Haru (2024)",
//             url: "https://myanimelist.net/anime/58313/Haru_2024",
//           },
//         ],
//       },
//     ],
//     theme: {
//       openings: [
//         '1: "Yuusha (勇者)" by YOASOBI (eps 1-16)',
//         '2: "Haru (晴る)" by Yorushika (ヨルシカ) (eps 17-28)',
//       ],
//       endings: [
//         '1: "Anytime Anywhere" by milet (eps 1-14,16-28)',
//         'S1: "bliss" by milet (eps Special Broadcast: 1-4)',
//       ],
//     },
//     external: [
//       {
//         name: "Official Site",
//         url: "https://frieren-anime.jp/",
//       },
//       {
//         name: "@Anime_Frieren",
//         url: "https://twitter.com/Anime_Frieren",
//       },
//       {
//         name: "AniDB",
//         url: "https://anidb.net/perl-bin/animedb.pl?show=anime&aid=17617",
//       },
//       {
//         name: "ANN",
//         url: "https://www.animenewsnetwork.com/encyclopedia/anime.php?id=26334",
//       },
//       {
//         name: "Wikipedia",
//         url: "https://en.wikipedia.org/wiki/Frieren#Anime",
//       },
//       {
//         name: "Wikipedia",
//         url: "https://ja.wikipedia.org/wiki/%E8%91%AC%E9%80%81%E3%81%AE%E3%83%95%E3%83%AA%E3%83%BC%E3%83%AC%E3%83%B3",
//       },
//       {
//         name: "Syoboi",
//         url: "https://cal.syoboi.jp/tid/6776",
//       },
//     ],
//     streaming: [
//       {
//         name: "Crunchyroll",
//         url: "http://www.crunchyroll.com/series-283731",
//       },
//       {
//         name: "Netflix",
//         url: "https://www.netflix.com/",
//       },
//       {
//         name: "Aniplus TV",
//         url: "http://www.aniplustv.com/",
//       },
//       {
//         name: "Bahamut Anime Crazy",
//         url: "https://ani.gamer.com.tw/",
//       },
//       {
//         name: "Bilibili Global",
//         url: "https://www.bilibili.tv/en/index",
//       },
//       {
//         name: "CatchPlay",
//         url: "https://www.catchplay.com/",
//       },
//       {
//         name: "MeWatch",
//         url: "https://www.mewatch.sg/",
//       },
//       {
//         name: "Muse Asia",
//         url: "https://www.youtube.com/channel/UCGbshtvS9t-8CW11W7TooQg",
//       },
//       {
//         name: "iQIYI",
//         url: "https://www.iq.com/",
//       },
//     ],
//   },
// }.data;

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { fetchbyId } = useAnime();
  const [anime, setAnime] = useState<Anime>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const anime = await fetchbyId(id);
      setAnime(anime);
      setLoading(false);
    }
    fetch();
  }, []);

  if (loading) {
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
          Loading...
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
          source={anime.images.jpg.large_image_url}
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
                source={anime.images.jpg.large_image_url}
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
                {anime.title_english || anime.title}
              </Text>
              <Text className="text-gray-300 text-sm mb-2" numberOfLines={1}>
                {anime.title_japanese}
              </Text>

              {/* Score and Rank */}
              <View className="flex-row items-center gap-4 mb-3">
                <View className="bg-yellow-500 px-3 py-1 rounded-full">
                  <Text className="text-black font-bold text-sm">
                    ★ {anime.score}
                  </Text>
                </View>
                <View className="bg-purple-600 px-3 py-1 rounded-full">
                  <Text className="text-white font-bold text-sm">
                    #{anime.rank}
                  </Text>
                </View>
              </View>

              {/* Quick Stats */}
              <View className="gap-1">
                <Text className="text-gray-400 text-xs">
                  {anime.type} • {anime.episodes} episodes • {anime.duration}
                </Text>
                <Text className="text-gray-400 text-xs">
                  {anime.aired.string}
                </Text>
                <Text className="text-gray-400 text-xs">{anime.status}</Text>
              </View>
            </View>
          </View>

          {/* Genres */}
          <View className="flex-row flex-wrap gap-2 mt-6">
            {anime.genres.map((genre, index) => (
              <View
                key={index}
                className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700"
              >
                <Text className="text-white text-xs font-medium">
                  {genre.name}
                </Text>
              </View>
            ))}
            {anime.demographics.map((demo, index) => (
              <View
                key={`demo-${index}`}
                className="bg-blue-600 px-3 py-1 rounded-full"
              >
                <Text className="text-white text-xs font-medium">
                  {demo.name}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Trailer Section */}
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              paddingBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                marginRight: 8,
              }}
            >
              🎬
            </Text>
            <Text
              style={{
                color: "#f8fafc",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Trailer
            </Text>
          </View>

          <View>
            <YoutubePlayer
              height={240}
              videoId={anime.trailer.youtube_id}
              forceAndroidAutoplay={true}
            />
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
              {anime.synopsis}
            </Text>
          </View>
        </View>

        {/* Streaming Platforms */}
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 25,
              paddingBottom: 8,
              borderBottomWidth: 2,
              borderBottomColor: "#2563eb",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                marginRight: 8,
              }}
            >
              📺
            </Text>
            <Text
              style={{
                color: "#f8fafc",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Watch On
            </Text>
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            {anime.streaming.map((stream, index) => (
              <Link href={stream.url} key={index}>
                <View
                  style={{
                    backgroundColor: "#2563eb",
                    paddingHorizontal: 20,
                    paddingVertical: 14,
                    borderRadius: 16,
                    shadowColor: "#2563eb",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.4,
                    shadowRadius: 8,
                    elevation: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontWeight: "700",
                      fontSize: 15,
                    }}
                  >
                    {stream.name}
                  </Text>
                </View>
              </Link>
            ))}
          </View>
        </View>
        {/* Studio & Production Info */}
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 25,
              paddingBottom: 8,
              borderBottomWidth: 2,
              borderBottomColor: "#ef4444",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                marginRight: 8,
              }}
            >
              🏭
            </Text>
            <Text
              style={{
                color: "#f8fafc",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Production
            </Text>
          </View>

          {/* Studios */}
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                color: "#94a3b8",
                fontSize: 14,
                fontWeight: "600",
                marginBottom: 10,
              }}
            >
              Studio
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {anime.studios.map((studio, index) => (
                <LinearGradient
                  key={index}
                  colors={["#dc2626", "#ef4444", "#f87171"]}
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 12,
                    shadowColor: "#dc2626",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.4,
                    shadowRadius: 6,
                    elevation: 6,
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontWeight: "700",
                      fontSize: 14,
                    }}
                  >
                    {studio.name}
                  </Text>
                </LinearGradient>
              ))}
            </View>
          </View>

          {/* Producers */}
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                color: "#94a3b8",
                fontSize: 14,
                fontWeight: "600",
                marginBottom: 10,
              }}
            >
              Producers
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {anime.producers.map((producer, index) => (
                <Link href={producer.url} key={index}>
                  <View
                    style={{
                      backgroundColor: "#374151",
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "#9ca3af",
                    }}
                  >
                    <Text
                      style={{
                        color: "#f3f4f6",
                        fontSize: 12,
                        fontWeight: "500",
                      }}
                    >
                      {producer.name}
                    </Text>
                  </View>
                </Link>
              ))}
            </View>
          </View>

          {/* Licensors */}
          {anime?.status !== "Not yet aired" && (
            <View>
              <Text
                style={{
                  color: "#94a3b8",
                  fontSize: 14,
                  fontWeight: "600",
                  marginBottom: 10,
                }}
              >
                Licensed by
              </Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
                {anime.licensors.map((licensor, index) => (
                  <Link href={licensor.url} key={index}>
                    <View
                      style={{
                        backgroundColor: "#059669",
                        paddingHorizontal: 16,
                        paddingVertical: 10,
                        borderRadius: 12,
                        shadowColor: "#059669",
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.4,
                        shadowRadius: 6,
                        elevation: 6,
                      }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontWeight: "700",
                          fontSize: 14,
                        }}
                      >
                        {licensor.name}
                      </Text>
                    </View>
                  </Link>
                ))}
              </View>
            </View>
          )}
        </View>
               <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 25,
              paddingBottom: 8,
              borderBottomWidth: 2,
              borderBottomColor: "#ef4444",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                marginRight: 8,
              }}
            >
              🎯
            </Text>
            <Text
              style={{
                color: "#f8fafc",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Recommendations
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="pr-8"
          >
            <View className="gap-x-4 flex flex-row">
              {anime.recommendations.data.map((recom, index) => (
                <RecomCard anime={recom.entry} key={index} />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Additional Stats */}
        {anime?.status !== "Not yet aired" && (
          <View style={{ marginTop: 40 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 25,
                paddingBottom: 8,
                borderBottomWidth: 2,
                borderBottomColor: "#06b6d4",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  marginRight: 8,
                }}
              >
                📊
              </Text>
              <Text
                style={{
                  color: "#f8fafc",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Statistics
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#16213e",
                borderRadius: 20,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#334155",
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.3,
                shadowRadius: 16,
                elevation: 12,
              }}
            >
              {/* Members */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: "#475569",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 20, marginRight: 12 }}>👥</Text>
                  <Text
                    style={{
                      color: "#94a3b8",
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Members
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#67e8f9",
                    fontWeight: "700",
                    fontSize: 18,
                  }}
                >
                  {anime.members.toLocaleString()}
                </Text>
              </View>

              {/* Favorites */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: "#475569",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 20, marginRight: 12 }}>❤️</Text>
                  <Text
                    style={{
                      color: "#94a3b8",
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Favorites
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#f87171",
                    fontWeight: "700",
                    fontSize: 18,
                  }}
                >
                  {anime.favorites.toLocaleString()}
                </Text>
              </View>

              {/* Popularity */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: "#475569",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 20, marginRight: 12 }}>🔥</Text>
                  <Text
                    style={{
                      color: "#94a3b8",
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Popularity Rank
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#fbbf24",
                    fontWeight: "700",
                    fontSize: 18,
                  }}
                >
                  #{anime.popularity}
                </Text>
              </View>

              {/* Scored by */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: "#475569",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 20, marginRight: 12 }}>⭐</Text>
                  <Text
                    style={{
                      color: "#94a3b8",
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Scored by
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#a78bfa",
                    fontWeight: "700",
                    fontSize: 18,
                  }}
                >
                  {anime.scored_by.toLocaleString()}
                </Text>
              </View>

              {/* Rating */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 20, marginRight: 12 }}>🎯</Text>
                  <Text
                    style={{
                      color: "#94a3b8",
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Rating
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#34d399",
                    fontWeight: "700",
                    fontSize: 18,
                  }}
                >
                  {anime.rating}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
