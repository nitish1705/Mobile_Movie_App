import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { use, useState } from 'react'
import { images } from '@/constants/images'
import { useRouter } from 'expo-router';
import { icons } from '@/constants/icons';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import SearchBar from '@/components/SearchBar';
import MovieCard from '@/components/MovieCard';

const search = () => {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const marginLogoTop = height * 0.1;

    const [searchingQuery, setSearchingQuery] = useState("");
    const [submittedQuery, setSubmittedQuery] = useState("");
  

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch
  } = useFetch(
    () => fetchMovies({ query: searchingQuery }),
    false
  );

  const handleSearchSubmit = () => {
    if (searchingQuery.trim().length === 0) return;
    setSubmittedQuery(searchingQuery.trim());
    refetch();
  };





  return (
    <View className="flex-1 bg-primary">
      <Image 
        source={images.bg}
        className='w-full absolute z-0'
      />
      <View 
        className='justify-center items-center'
        style = {{
          marginTop : marginLogoTop,
        }}
        >
          <Image
          source = {icons.logo}
          />
      </View>
      <ScrollView className='flex-1'>
        {
          moviesLoading
          ? (
            <ActivityIndicator

            size="large"
            color='#000ff'
            className='self-center mt-10'
            />
          )
          : moviesError 
          ? (
            <Text>Error: {moviesError?.message} </Text>
          )
          : (
            <View className='mt-5 flex-1'>
              <SearchBar 
                placeholder='Search for a Movie!'
                value={searchingQuery}
                onChangeText={setSearchingQuery}
                onSubmit={handleSearchSubmit}
              />
              <>
              {submittedQuery.length > 0 && (
                <Text className="text-white mt-2 mb-3 text-3xl">
                  Showing results for: {submittedQuery}
                </Text>
              )}

              <FlatList
                data={movies}
                renderItem={({ item }) => (
                  <MovieCard
                    {... item}
                  />
                )}
                numColumns={3}
                keyExtractor={(item) => item.id.toString()}
                columnWrapperStyle={{
                  gap: 20,
                  marginBottom: 10,
                  justifyContent: 'flex-start'
                }}
                scrollEnabled={false}
              />
              </>
            </View>
          )

        }
      </ScrollView>
    </View>
  )
}

export default search

const styles = StyleSheet.create({})