import { Link } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { images } from '../../constants'
import { icons } from '../../constants'

const Home = () => {
  return (
    <View className="flex-1 bg-gray-900">
    <View className="p-4 flex-row items-center justify-between">       
          <TouchableOpacity>
            <Text className="text-white text-2xl ">☰</Text>
          </TouchableOpacity>
          <Image
            source={icons.bell}
            className="w-6 h-6"
          />
        </View>

        {/* Header */}
        <View className="p-4 items-center">
          <Text className="text-white text-2xl font-bold">Quench your Thirst</Text>
        </View>

        {/* Search Bar */}
        <View className="bg-gray-800 p-4 mx-4 rounded-full flex-row items-center space-x-2">
          <Text className="text-gray-400">🔍</Text>
          <TextInput
            placeholder="Find your pick"
            placeholderTextColor="gray"
            className="text-gray-200 flex-1"
          />
        </View>

        {/* Categories */}
        <View className="flex-row justify-around mt-4 px-4">
          <TouchableOpacity className="border-b-4 border-orange-500">
            <Text className="text-white font-bold">Coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-gray-400">Juice</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-gray-400">Alcohol</Text>
          </TouchableOpacity>
        </View>

        {/* Coffee Items */}
        <ScrollView className="px-4 mt-4">
          <View className="flex-row justify-between flex-wrap">
            {/* Latte */}
            <View className="bg-gray-800 p-4 rounded-lg w-[48%] mb-4">
              <Image
                source={images.latte}
                className="w-full h-20 rounded-lg object-cover"
              />
              <Text className="text-white font-bold mt-2">Latte</Text>
              <Text className="text-gray-400">Best Coffee</Text>
              <View className="flex-row justify-between mt-2">
                <Text className="text-white">₱50</Text>
                <TouchableOpacity className="bg-orange-500 rounded-full p-2">
                  <Text className="text-white">+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Frappe */}
            <View className="bg-gray-800 p-4 rounded-lg w-[48%] mb-4">
              <Image
                source={images.frappe}
                className="w-20 h-20 rounded-lg mx-5 "
              />
              <Text className="text-white font-bold mt-2">Frappe</Text>
              <Text className="text-gray-400">Best Coffee</Text>
              <View className="flex-row justify-between mt-2">
                <Text className="text-white">₱50</Text>
                <TouchableOpacity className="bg-orange-500 rounded-full p-2">
                  <Text className="text-white">+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Iced Coffee */}
            <View className="bg-gray-800 p-4 rounded-lg w-[48%] mb-4">
              <Image
                source={images.black}
                className="w-full h-20 rounded-lg object-cover"
              />
              <Text className="text-white font-bold mt-2">Black Coffee</Text>
              <Text className="text-gray-400">Best Coffee</Text>
              <View className="flex-row justify-between mt-2">
                <Text className="text-white">₱50</Text>
                <TouchableOpacity className="bg-orange-500 rounded-full p-2">
                  <Text className="text-white">+</Text>
                </TouchableOpacity>
              </View>
            </View>

            
            <View className="bg-gray-800 p-4 rounded-lg w-[48%] mb-4">
              <Image
                source={images.iced}
                className="w-10 h-20 rounded-lg mx-10"
              />
              <Text className="text-white font-bold mt-2">Iced Coffee</Text>
              <Text className="text-gray-400">Best Coffee</Text>
              <View className="flex-row justify-between mt-2">
                <Text className="text-white">₱50</Text>
                <TouchableOpacity className="bg-orange-500 rounded-full p-2">
                  <Text className="text-white">+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
  )
}

export default Home