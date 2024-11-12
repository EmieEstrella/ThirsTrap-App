import { Link } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { images } from '../../constants'
import { icons } from '../../constants'

const Search = () => {
  return (
    <View className="flex-1 bg-gray-900">
      <ScrollView className="flex-1">
    
        {/* Top Image Section */}
        <View className="relative">
          <Image
            source={images.cofbg}
            className="w-full h-72"
            resizeMode="cover"
          />
          <View className="absolute inset-0 p-4 justify-between">
          <View className="flex-row items-center justify-between">       
          <TouchableOpacity>
            <Text className="text-white text-2xl ">☰                                               </Text>
          </TouchableOpacity>
          <Image
            source={icons.bell}
            className="w-6 h-6"
          />
        </View>
            <View>
              <Text className="text-white text-2xl font-bold mt-8">Starbucks</Text>
              <Text className="text-white text-sm mt-28">📍 N Escario St, Cebu City, 6000 Cebu</Text>
              <View className="flex-row items-center space-x-4 ">
                <Text className="text-gray-300 text-xs">⭐ 4.5</Text>
                <Text className="text-gray-300 text-xs">🔖 13K</Text>
                <Text className="text-gray-300 text-xs">📷 346</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Pickup Section */}
        <View className="p-4 bg-white border-b border-gray-200">
          <Text className="text-orange-500 text-sm font-bold">New! Try Pickup</Text>
          <Text className="text-gray-500 text-sm">Pickup on your time. Your order is ready when you are.</Text>
          <TouchableOpacity className="mt-2 px-4 py-2 bg-orange-500 rounded-md">
            <Text className="text-white text-center font-bold">Order now</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Items Section */}
        <View className="p-4">
          <Text className="text-lg text-white font-bold">Featured Items</Text>
          <ScrollView horizontal className="mt-4" showsHorizontalScrollIndicator={false}>
          <View className="bg-gray-800 p-4 rounded-lg w-[48%] mb-4">
            <Image
                source={images.cocofee}
                className="w-full h-20 rounded-lg object-cover"
              />
              <Text className="text-white font-bold mt-2">Cocktail Coffee</Text>
              <Text className="text-gray-400">Best Coffee</Text>
              <View className="flex-row justify-between mt-2">
                <Text className="text-white">₱50</Text>
            </View>
            </View>
         
            <View className="bg-gray-800 p-4 rounded-lg w-[48%] mb-4 mx-4">
              <Image
                source={images.esp}
                className="w-full h-20 rounded-lg object-cover"
              />
              <Text className="text-white font-bold mt-2">Espresso</Text>
              <Text className="text-gray-400">Best Coffee</Text>
              <View className="flex-row justify-between mt-2">
                <Text className="text-white">₱50</Text>
            </View>
            </View>

            <View className="bg-gray-800 p-4 rounded-lg w-[48%] mb-4 mx-4">
              <Image
                source={images.esp}
                className="w-full h-20 rounded-lg object-cover"
              />
              <Text className="text-white font-bold mt-2">Latte</Text>
              <Text className="text-gray-400">Best Coffee</Text>
              <View className="flex-row justify-between mt-2">
                <Text className="text-white">₱50</Text>
            </View>
            </View>

            
         
          </ScrollView>
        </View>

        {/* Full Menu Section */}
        <View className="p-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-bold text-white">Full Menu</Text>
            <TouchableOpacity>
              <Text className="text-orange-500 text-sm">View all</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-gray-500 text-xs mt-2">Popular items</Text>
        </View>
      </ScrollView>
            </View>
          

       
      
  )
}

export default Search