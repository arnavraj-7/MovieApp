import { View, Text, ScrollView, } from "react-native";
import React from "react";
import { Image } from "expo-image";
import SearchBar from "@/components/searchbar";
import { SafeAreaView } from "react-native-safe-area-context";
// import YoutubePlayer from "react-native-youtube-iframe";
import Card from "@/components/card";
// import useAnime from "../hooks/useanime";
import {data,top,upcoming} from './../../data/data'
const Index = () => {
  // const [loading, setLoading] = useState(false);
  // const [top,setTop] = useState<Anime[]>([]);
  // const [upcoming,setUpcoming] = useState<Anime[]>([]);

  // const { fetchTop,fetchUpcoming } = useAnime();
  // const [playing, setPlaying] = useState(false);

  // useEffect(()=>{

  //   console.log("fetching");

  //   async function fetch() {
  //   setLoading(true);
  //   const top:any=  await fetchTop();
  //     setTop(top);
  //   const upcoming = await fetchUpcoming();
  //   setUpcoming(upcoming);
  //     setLoading(false);
  // }
  // // fetch();
  // },[]);
  // if (laoding) {
  //   return (
  //     <View className="flex-1 justify-center items-center">
  //       <Text className="text-white text-5xl">loading</Text>
  //     </View>
  //   );
  // }
  return (
    <View style={{ backgroundColor: '#000000', flex: 1 ,paddingBottom:100}}>
      <Image
        source={require("./../../assets/images/bg.png")}
        style={{
          position: "absolute",
          top: 0,
          zIndex: 0,
          height: "50%",
          width: "100%",
          opacity: 0.3,
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
                  color: "#666666",
                  fontSize: 16,
                  fontWeight: "400",
                  marginBottom: 4,
                }}
              >
                Welcome back! 👋
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                  fontWeight: "700",
                  letterSpacing: -0.5,
                }}
              >
                animeVerse
              </Text>
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
        <Text className="text-white text-5xl font-bold mt-10">
          Top Animes
        </Text>
        <ScrollView horizontal className="overflow-x-scroll" showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row gap-x-5 mt-10">
            {top?.map((anime,index) => (
             <Card anime={anime} key={index}/>
            ))}
          </View>
        </ScrollView>
        <Text className="text-white text-5xl font-bold mt-10">
          Random Animes
             </Text>
             <ScrollView horizontal className="overflow-x-scroll " showsHorizontalScrollIndicator={false}>

           <View className="flex flex-row gap-x-5 mt-10">
            {data?.map((anime,index) => (
             <Card anime={anime} key={index}/>
            ))}
          </View>
             </ScrollView>
           <Text className="text-white text-5xl font-bold mt-10">
          Top Upcoming Animes
             </Text>
             <ScrollView horizontal className="overflow-x-scroll" showsHorizontalScrollIndicator={false}>

            <View className="flex flex-row gap-x-5 mt-10">
            {upcoming?.map((anime,index) => (
             <Card anime={anime} key={index}/>
            ))}
          </View>
             </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Index;