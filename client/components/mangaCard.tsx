import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
const MangaCard = ({manga}:{manga:manga}) => {
    const upcoming = manga.status==="Not yet aired"?true:false
    const finished = !manga.airing
    const router = useRouter();

    const handlePress = ()=>{
        router.push({ pathname: '/manga/[id]', params: { id: manga.mal_id.toString() } })
    }
  return (
   <Pressable
                key={manga.mal_id}
                style={{
                  height: 360,
                  width: 150,
                  backgroundColor: '#1a1a1a',
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: '#333333',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 8,
                  },
                  shadowOpacity: 0.6,
                  shadowRadius: 12,
                  elevation: 8,
                  overflow: 'hidden',
                }}
                onPress={handlePress}
                
              >
                {/* Image Container with Gradient Overlay */}
                <View style={{ position: 'relative' }}>
                  <Image
                    className="object-cover"
                    source={
                      manga.images?.jpg?.large_image_url ||
                      manga.images?.webp?.image_url
                    }
                    style={{ 
                      width: "100%", 
                      height: 200,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                  
                  {/* Status Badge - Positioned on Image */}
                  <View style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    backgroundColor: finished ? '#22c55e' : '#f97316',
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 12,
                  }}>
                    <Text style={{
                      color: '#FFFFFF',
                      fontSize: 10,
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                    }}>
                      {(upcoming&&"Upcoming" )|| (finished?"Finished":"Airing")}
                    </Text>
                  </View>

                  {/* Gradient Overlay at Bottom of Image */}
                  <View style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 40,
                  }} />
                </View>

                {/* Information Container */}
                <View style={{ 
                  flex: 1, 
                  padding: 12,
                  backgroundColor: '#1a1a1a',
                  paddingBottom:30
                }}>
                  {/* Title */}
                  <Text style={{
                    color: '#FFFFFF',
                    fontSize: 14,
                    fontWeight: '700',
                    lineHeight: 18,
                    marginBottom: 8,
                    height: 30,
                  }} numberOfLines={2}>
                    {manga.title}
                  </Text>

                  {/* Rating and Rank Row */}
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 4,
                  }}>
                    <View style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#2a2a2a',
                      paddingHorizontal: 6,
                      paddingVertical: 3,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: '#444444',
                    }}>
                      <Ionicons name="star" color={"#FFD700"} size={12} />
                      <Text style={{
                        color: '#FFD700',
                        fontSize: 12,
                        fontWeight: '600',
                        marginLeft: 2,
                      }}>
                        {manga.score}
                      </Text>
                    </View>

                    <View style={{
                      backgroundColor: '#2a2a2a',
                      paddingHorizontal: 6,
                      paddingVertical: 3,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: '#444444',
                    }}>
                      <Text style={{
                        color: '#cccccc',
                        fontSize: 11,
                        fontWeight: '600',
                      }}>
                        #{manga.rank}
                      </Text>
                    </View>
                  </View>

                  {/* Favorites and Type Info */}
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                  }}>
                    <Text style={{
                      color: '#888888',
                      fontSize: 11,
                      fontWeight: '500',
                    }}>
                      {manga.favorites > 1000
                        ? Math.floor(manga.favorites / 1000)
                        : manga.favorites}k favorites
                    </Text>
                  </View> 

                  {/* Type and Episodes/Chapters */}
                   <Text style={{
                    color: '#aaaaaa',
                    fontSize: 11,
                    fontWeight: '500',
                    marginBottom: 10,
                  }}>
                    {manga.type} • {manga.chapters}
                    {manga.type === "manga" ? "" : " Chapters"}
                  </Text> 

                  {/* Genre Tags */}
                   <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 2,
                    marginTop: 'auto',
                  }}>
                    <View style={{
                      backgroundColor: '#333333',
                      paddingHorizontal: 4,
                      paddingVertical: 3,
                      borderRadius: 6,
                      borderWidth: 1,
                      borderColor: '#444444',
                    }}>
                      <Text style={{
                        color: '#cccccc',
                        fontSize: 7,
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: 0.3,
                      }}>
                        {manga.genres[0]?.name}
                      </Text>
                    </View>
                    
                    {manga.genres[1] && (
                      <View style={{
                        backgroundColor: '#333333',
                        paddingHorizontal: 6,
                        paddingVertical: 3,
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#444444',
                      }}>
                        <Text style={{
                          color: '#cccccc',
                          fontSize: 7,
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: 0.3,
                        }}>
                          {manga.genres[1]?.name}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </Pressable>
  )
}

export default MangaCard