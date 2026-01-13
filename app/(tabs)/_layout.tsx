import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import { ScreenStack } from 'react-native-screens'

import { useWindowDimensions } from 'react-native';

const CustomTabIcon = ({focused, icon, title} : any) => {
    const { width, height } = useWindowDimensions();
    
    const minWidth = width * 0.3; 
    const maxWidth = Math.min(width * 0.35, 140); 
    const iconHeight = Math.max(48, Math.min(height * 0.07, 64)); 
    
    if (focused) {
        return(
            <View className='size-full justify-center items-center'>
                <ImageBackground 
                    source={images.highlight}
                    style={{
                        marginTop: 6,
                        minWidth: minWidth,
                        maxWidth: maxWidth,
                        height: iconHeight,
                    }}
                    className='flex flex-row justify-center items-center rounded-full overflow-hidden px-3'
                    resizeMode='contain'
                >
                    <Image source={icon} tintColor="#151312" className='size-5' />
                    <Text
                        className='text-secondary text-sm font-semibold ml-2'
                        numberOfLines={1}
                    >
                        {title}
                    </Text>
                </ImageBackground>
            </View>
        )
    }
    else {
        return(
            <View className='size-full justify-center items-center'>
                <Image source={icon} tintColor="#A8B5DB" className='size-5 mt-1' />
            </View>
        )
    }
}

const _layout = () => {
  const { width, height } = useWindowDimensions();
  
  const tabBarHeight = height * 0.05
  const tabBarMarginBottom = height * 0.035;
  const tabBarMarginHorizontal = width * 0.05;
  const tabBarBorderRadius = Math.min(tabBarHeight / 2, 30);
  
  return (
    <Tabs screenOptions={{
        tabBarShowLabel : false,
        tabBarItemStyle : {
            width : "100%",
            height: "100%",
            justifyContent : 'center',
            alignItems : 'center',
        },
        tabBarStyle : {
            borderTopWidth: 0,
            backgroundColor : "#0f0d23",
            borderRadius: tabBarBorderRadius,
            marginBottom: tabBarMarginBottom,
            marginHorizontal: tabBarMarginHorizontal,
            height: tabBarHeight,
            paddingBottom: 0,
            paddingTop: 0,
            position : 'absolute',
            overflow : 'hidden',
        }
    }}>
        <Tabs.Screen 
            name='index'
            options={{
                title : "HOME",
                headerShown : false,
                tabBarIcon: ({ focused }) => (
                    <CustomTabIcon 
                        focused = {focused}
                        icon = {icons.home}
                        title = "HOME"
                    />
                )
            }}
        />
        <Tabs.Screen 
            name='search'
            options={{
                headerShown : false,
                title : 'SEARCH',
                tabBarIcon: ({ focused }) => (
                    <CustomTabIcon 
                        focused = {focused}
                        icon = {icons.search}
                        title = "Search"
                    />
                )
            }}
        />
        <Tabs.Screen 
            name='saved'
            options={{
                headerShown : false,
                title : 'SAVED',
                tabBarIcon: ({ focused }) => (
                    <CustomTabIcon 
                        focused = {focused}
                        icon = {icons.save}
                        title = "SAVED"
                    />
                )
            }}
        />
         <Tabs.Screen 
            name='profile'
            options={{
                headerShown : false,
                title : 'PROFILE',
                tabBarIcon: ({ focused }) => (
                    <CustomTabIcon 
                        focused = {focused}
                        icon = {icons.person}
                        title = "PROFILE"
                    />
                )

            }}
        />
    </Tabs>
  )
}

export default _layout