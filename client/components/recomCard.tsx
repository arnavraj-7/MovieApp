import { View, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'

const RecomCard = ({anime}:{anime:Anime}) => {
    const router = useRouter();
    const handlePress = ()=>{
        router.push({ pathname: '/anime/[id]', params: { id: anime.mal_id.toString() } })
    }
  return (
   <Pressable
                key={anime.mal_id}
                style={{
                  height: 200,
                  width: 150,
                  backgroundColor: '#1a1a1a',
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#333333',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 6,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 8,
                  elevation: 6,
                  overflow: 'hidden',
                }}
                onPress={handlePress}
                
              >
                {/* Image Container */}
                <View style={{ position: 'relative', flex: 1 }}>
                  <Image
                    className="object-cover"
                    source={
                      anime.images?.jpg?.large_image_url ||
                      anime.images?.webp?.image_url
                    }
                    style={{ 
                      width: "100%", 
                      height: 200,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                
                </View>
              </Pressable>
  )
}

export default RecomCard