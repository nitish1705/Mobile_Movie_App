
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ActivityIndicator, FlatList, Image, ImageBackground, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { router, useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const marginLogoTop = height * 0.1;

  const { 
    data: movies, 
    loading: moviesLoading, 
    error : moviesError
  } = useFetch(() => fetchMovies({
    query: ''
  }))

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"/>
      <View className="justify-center items-center"
        style = {{
          marginTop : marginLogoTop,
        }}
      >
        <Image source={icons.logo} resizeMode="contain"/>
      </View>
      <ScrollView className="flex-1">
          {moviesLoading ? (
            <ActivityIndicator 
              size="large"
              color = "#000ff"
              className="mt-10 self-center"
            />
          ) : moviesError ? (
            <Text>Error : {moviesError?.message}</Text>
          ) : (
            <View className="flex-1 mt-5">
              <SearchBar 
                onPress={() => router.push("/search")}
                placeholder = "Search for a Movie!"

              />
              <>
                <Text className="text-lg font-bold text-white mt-3 ml-3 mb-2">Latest Movies</Text>

                <FlatList 
                    data = {movies}
                    renderItem = {({ item }) => (
                        <MovieCard 
                          {... item}
                        />
                        
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    columnWrapperStyle={{
                      justifyContent: 'flex-start',
                      gap: 20,
                      marginBottom: 10

                    }}
                    scrollEnabled={false}
                />
              </>
            </View>
          )
        }
      </ScrollView>
    </View>
  );
}
