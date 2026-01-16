import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { icons } from '@/constants/icons'

interface Props {
    placeholder : string;
    value: string
    onPress? : () => void;
    onChangeText: (text: string) => void;
    onSubmit: () => void;
    editable?: boolean;
}

const SearchBar = ({ onPress, placeholder, value, onChangeText, onSubmit, editable = true }: Props) => {
  const inputRef = useRef<TextInput>(null);

  // If onPress is provided, wrap in TouchableOpacity for routing
  if (onPress) {
    return (
      <TouchableOpacity 
        onPress={onPress}
        className='flex-row bg-dark-200 rounded-full px-5 py-4 items-center'
        activeOpacity={0.7}
      >
        <Image source={icons.search} className='w-5 h-5' />
        <Text className='ml-3 text-[#a8b5db]'>
          {placeholder}
        </Text>
      </TouchableOpacity>
    )
  }

  // Otherwise, render as functional input
  return (
    <View className='flex-row bg-dark-200 rounded-full px-5 py-4 items-center'>
        <Image source={icons.search} className='w-5 h-5' />
        <TextInput 
            ref={inputRef}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#a8b5db"
            className='ml-3 text-white flex-1'
            autoCorrect={false}
            returnKeyType='search'
            autoCapitalize='none'
            onChangeText={onChangeText}
            onSubmitEditing={onSubmit}
            editable={editable}
        />
    </View>
  )
}

export default SearchBar