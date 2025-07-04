import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import useAnime from "../../hooks/useMovie";
import { Image } from "expo-image";
import YoutubePlayer from "react-native-youtube-iframe";
import { ExternalPathString, Link } from "expo-router";
import { ScrollView } from "react-native";
import RecomCard from "@/components/recomCard";
import { LoadingScreen } from "@/components/loading";
import { MotiView } from "moti";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { fetchbyId } = useAnime();
  const [anime, setAnime] = useState<Anime>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const anime = await fetchbyId(id.toString());
      setAnime(anime);
      setLoading(false);
    }
    fetch();
  }, []);

  if (loading) {
    return (
      <LoadingScreen/>
    );
  }
  if(anime===undefined){
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
          Anime not found
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
    <MotiView
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'timing', duration: 200 }}
    >
      {/* Hero Section with Gradient Overlay */}
      <View className="relative px-5">
        <Image
          source={anime.images.jpg.large_image_url}
          style={{
            width: "100%",
            height: 400,
          }}
          className="absolute top-0"/>
            <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)', '#000000']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 400,
          }}
        />
        
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 400,
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        />

        {/* Main Content Container */}
        <View className=""
        style={{
          marginTop:-80
        }}>
          {/* Header Info */}
          <View className="flex-row items-start gap-4">
            {/* Poster Image */}
            <View className="">
               <MotiView
         from={{
                translateX:-200
              }}
              animate={{
                translateX:0
              }}
              transition={{
                type:'timing',
                duration:500
              }}
              >
                
              <Image
                source={anime.images.jpg.large_image_url}
                style={{
                  width: 120,
                  height: 170,
                }}
                className="rounded-xl"
                />
                </MotiView>
            </View>

            {/* Title and Basic Info */}
            <View className="flex-1 pt-2">
              <MotiView 
              from={{
                translateX:+200
              }}
              animate={{
                translateX:0
              }}
              transition={{
                type:'timing',
                duration:500
              }}
              >
              <Text
                className="text-white text-2xl font-bold mb-1"
                numberOfLines={2}
              >
                {anime?.title_english || anime.title}
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
                  {anime?.type} • {anime?.episodes} episodes • {anime?.duration}
                </Text>
                <Text className="text-gray-400 text-xs">
                  {anime?.aired.string}
                </Text>
                <Text className="text-gray-400 text-xs">{anime?.status}</Text>
              </View>
              </MotiView>
            </View>
          </View>

          {/* Genres */}
          <View className="flex-row flex-wrap gap-2 mt-6">
            {anime?.genres.map((genre, index) => (
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
              paddingBottom: 12,
              borderBottomWidth: 2,
              borderBottomColor: "#ff6b6b",
            }}
          >
            <View style={{
              backgroundColor: "#ff6b6b",
              borderRadius: 8,
              padding: 8,
              marginRight: 12,
            }}>
              <Text style={{ fontSize: 16, color: "#ffffff" }}><Ionicons name="play"/></Text>
            </View>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 22,
                fontWeight: "700",
                letterSpacing: 0.5,
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
              <Ionicons name="book" color="#8b5cf6" size={24} />
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
      paddingBottom: 12,
      borderBottomWidth: 2,
      borderBottomColor: "#4ecdc4",
    }}
  >
    <View style={{
      backgroundColor: "#1e3a8a",
      borderRadius: 8,
      padding: 8,
      marginRight: 12,
    }}>
      <Text style={{ fontSize: 16, color: "#ffffff" }}><Ionicons name="tv-outline"/></Text>
    </View>
    <Text
      style={{
        color: "#ffffff",
        fontSize: 22,
        fontWeight: "700",
        letterSpacing: 0.5,
      }}
    >
      Stream Now
    </Text>
  </View>
  
  <Text
    style={{
      color: "#94a3b8",
      fontSize: 14,
      marginBottom: 16,
      fontStyle: "italic",
    }}
  >
    Tap any platform to watch
  </Text>

  <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
    {anime.streaming.map((stream, index) => (
      <Link href={stream.url as ExternalPathString } key={index}>
        <View
          style={{
            backgroundColor: "#0f172a",
            paddingHorizontal: 20,
            paddingVertical: 14,
            borderRadius: 12,
            borderWidth: 1.5,
            borderColor: "#1e3a8a",
            shadowColor: "#1e3a8a",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.4,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <Text
            style={{
              color: "#60a5fa",
              fontWeight: "600",
              fontSize: 15,
            }}
          >
            {stream.name}
          </Text>
          <Text
            style={{
              color: "#94a3b8",
              fontSize: 11,
              marginTop: 2,
            }}
          >
            → Watch here
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
              paddingBottom: 12,
              borderBottomWidth: 2,
              borderBottomColor: "#ffa726",
            }}
          >
            <View style={{
              backgroundColor: "#ffa726",
              borderRadius: 8,
              padding: 8,
              marginRight: 12,
            }}>
              <Text style={{ fontSize: 16, color: "#ffffff" }}>🎬</Text>
            </View>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 22,
                fontWeight: "700",
                letterSpacing: 0.5,
              }}
            >
              Production
            </Text>
          </View>
        

          {/* Studios */}
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                color: "#94a3b8",
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 12,
              }}
            >
              Studio
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
              {anime?.studios.map((studio, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: "#2d1b69",
                    paddingHorizontal: 18,
                    paddingVertical: 12,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#8b5cf6",
                  }}
                >
                  <Text
                    style={{
                      color: "#c4b5fd",
                      fontWeight: "600",
                      fontSize: 14,
                    }}
                  >
                    {studio.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Producers */}
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                color: "#94a3b8",
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 12,
              }}
            >
              Producers
            </Text>
              <Text
    style={{
      color: "#94a3b8",
      fontSize: 14,
      marginBottom: 16,
      fontStyle: "italic",
    }}
  >
    Tap any to know more
  </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
              {anime.producers.map((producer, index) => (
                <Link href={producer.url as ExternalPathString} key={index}>
                  <View
                    style={{
                      backgroundColor: "#1e293b",
                      paddingHorizontal: 16,
                      paddingVertical: 10,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: "#475569",
                    }}
                  >
                    <Text
                      style={{
                        color: "#cbd5e1",
                        fontSize: 13,
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
                  fontSize: 16,
                  fontWeight: "600",
                  marginBottom: 12,
                }}
              >
                Licensed by
              </Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
                {anime.licensors.map((licensor, index) => (
                  <Link href={licensor.url as ExternalPathString} key={index}>
                    <View
                      style={{
                        backgroundColor: "#134e4a",
                        paddingHorizontal: 16,
                        paddingVertical: 10,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: "#14b8a6",
                      }}
                    >
                      <Text
                        style={{
                          color: "#5eead4",
                          fontWeight: "600",
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
              <Ionicons name="heart" size={24} color="#ef4444" />
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
              {anime.recommendations.data.length>0?(anime.recommendations.data.map((recom, index) => (
                <RecomCard anime={recom.entry as Anime} key={index} />
              ))):(
                <Text className="text-white">
                  No Recommendations
                </Text>
              )}
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
                paddingBottom: 12,
                borderBottomWidth: 2,
                borderBottomColor: "#06b6d4",
              }}
            >
              <View style={{
                backgroundColor: "#06b6d4",
                borderRadius: 8,
                padding: 8,
                marginRight: 12,
              }}>
                <Text style={{ fontSize: 16, color: "#ffffff" }}><Ionicons name="stats-chart" size={24} color="#ffffff" /></Text>
              </View>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 22,
                  fontWeight: "700",
                  letterSpacing: 0.5,
                }}
              >
                Statistics
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#1e293b",
                borderRadius: 16,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#334155",
              }}
            >
              {/* Members */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 18,
                  borderBottomWidth: 1,
                  borderBottomColor: "#475569",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{
                    backgroundColor: "#0369a1",
                    borderRadius: 6,
                    padding: 6,
                    marginRight: 12,
                  }}>
                    <Text style={{ fontSize: 14, color: "#ffffff" }}>👥</Text>
                  </View>
                  <Text
                    style={{
                      color: "#e2e8f0",
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Members
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#38bdf8",
                    fontWeight: "700",
                    fontSize: 16,
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
                  padding: 18,
                  borderBottomWidth: 1,
                  borderBottomColor: "#475569",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{
                    backgroundColor: "#dc2626",
                    borderRadius: 6,
                    padding: 6,
                    marginRight: 12,
                  }}>
                    <Text style={{ fontSize: 14, color: "#ffffff" }}>❤️</Text>
                  </View>
                  <Text
                    style={{
                      color: "#e2e8f0",
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
                    fontSize: 16,
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
                  padding: 18,
                  borderBottomWidth: 1,
                  borderBottomColor: "#475569",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{
                    backgroundColor: "#ea580c",
                    borderRadius: 6,
                    padding: 6,
                    marginRight: 12,
                  }}>
                    <Text style={{ fontSize: 14, color: "#ffffff" }}>🔥</Text>
                  </View>
                  <Text
                    style={{
                      color: "#e2e8f0",
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Popularity Rank
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#fb923c",
                    fontWeight: "700",
                    fontSize: 16,
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
                  padding: 18,
                  borderBottomWidth: 1,
                  borderBottomColor: "#475569",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{
                    backgroundColor: "#7c3aed",
                    borderRadius: 6,
                    padding: 6,
                    marginRight: 12,
                  }}>
                    <Text style={{ fontSize: 14, color: "#ffffff" }}>⭐</Text>
                  </View>
                  <Text
                    style={{
                      color: "#e2e8f0",
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
                    fontSize: 16,
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
                  padding: 18,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{
                    backgroundColor: "#059669",
                    borderRadius: 6,
                    padding: 6,
                    marginRight: 12,
                  }}>
                    <Text style={{ fontSize: 14, color: "#ffffff" }}>🎯</Text>
                  </View>
                  <Text
                    style={{
                      color: "#e2e8f0",
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
                    fontSize: 16,
                  }}
                >
                  {anime.rating}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
     </MotiView>
    </ScrollView>
  );
};

export default MovieDetails;