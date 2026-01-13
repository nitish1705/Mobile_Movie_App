import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
    placeholder : string;
    onPress? : () => void;
}

const SearchBar = ( {onPress, placeholder}: Props ) => {
  return (
    <View className='flex-row bg-dark-200 rounded-full px-5 py-4'>
        <Image source={icons.search} />
        <TextInput 
            onPress= {onPress}
            onChangeText={() => {}}
            placeholder={placeholder}
            placeholderTextColor="#a8b5db"
            value=""
            className='ml-3'
            />
    </View>
  )
}

export default SearchBar