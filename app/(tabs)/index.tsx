
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ImageBackground, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { router, useRouter } from "expo-router";

export default function Index() {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const marginLogoTop = height * 0.1;

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
        <View className="flex-1 mt-5">
          <SearchBar 
            onPress={() => router.push("/search")}
            placeholder = "Search for a Movie!"

          />
        </View>
      </ScrollView>
    </View>
  );
}
