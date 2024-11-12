import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image , TouchableOpacity } from 'react-native';
import { icons, images } from './../constants'

export default function App() {
  return (
    <ImageBackground
        source={images.bg}
        className="flex-1 justify-end p-6"
      >
        <View className="bg-black bg-opacity-50 p-6 rounded-xl mb-6">
          <Text className="text-white text-4xl font-bold mb-2">Thirstrap</Text>
          <Text className="text-gray-500">Home delivery and online reservation system for shops and cafes</Text>
        </View>

        <TouchableOpacity className="bg-orange-500 border border-white p-4 rounded-full mb-4">
          <Link href ="./home" className="text-white text-center font-bold">Get Started</Link>
        </TouchableOpacity>
      </ImageBackground>
  );
}

