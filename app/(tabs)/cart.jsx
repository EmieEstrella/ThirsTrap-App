import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { images, icons  } from '../../constants'


export default function Orders() {
  return (
    <View className="flex-1 bg-gray-100">
    {/* Header */}
    <View className="flex-row justify-between items-center p-4 bg-gray-900">
    <TouchableOpacity>
      <Text className="text-white text-2xl ">☰</Text>
    </TouchableOpacity>
      <Text className="text-white text-lg font-bold">Cart</Text>
      <Image
            source={icons.bell}
            className="w-6 h-6"
      />
    </View>

    {/* Cart Items */}
    <ScrollView className="px-4 mt-2">
        <View
          className="flex-row items-center justify-between bg-white rounded-xl shadow-lg p-4 mb-4">
          <Image
            source={images.frappe}
            className="w-16 h-16 rounded-full"
          />
          <View className="flex-1 mx-4">
            <Text className="font-semibold">Frappe</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="bg-gray-200 p-1 rounded-full">
              <Text className="text-lg">-</Text>
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity className="bg-gray-200 p-1 rounded-full">
              <Text className="text-lg">+</Text>
            </TouchableOpacity>
          </View>
          <Text className="font-semibold">₱50</Text>
        </View>

        <View
          className="flex-row items-center justify-between bg-white rounded-xl shadow-lg p-4 mb-4">
          <Image
            source={images.cosmopolitan}
            className="w-16 h-16 rounded-full"
          />
          <View className="flex-1 mx-4">
            <Text className="font-semibold">Cosmopolitan</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="bg-gray-200 p-1 rounded-full">
              <Text className="text-lg">-</Text>
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity className="bg-gray-200 p-1 rounded-full">
              <Text className="text-lg">+</Text>
            </TouchableOpacity>
          </View>
          <Text className="font-semibold">₱50</Text>
        </View>

        <View
          className="flex-row items-center justify-between bg-white rounded-xl shadow-lg p-4 mb-4">
          <Image
            source={images.iced}
            className="w-16 h-16 rounded-full"
          />
          <View className="flex-1 mx-4">
            <Text className="font-semibold">Iced Coffee</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="bg-gray-200 p-1 rounded-full">
              <Text className="text-lg">-</Text>
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity className="bg-gray-200 p-1 rounded-full">
              <Text className="text-lg">+</Text>
            </TouchableOpacity>
          </View>
          <Text className="font-semibold">₱50</Text>
        </View>
      
    </ScrollView>

    {/* Total Section */}
    <View className="bg-white p-4 rounded-t-2xl shadow-lg">
      <View className="flex-row justify-between mb-2">
        <Text className="text-gray-600">Subtotal:</Text>
        <Text className="font-semibold">₱150</Text>
      </View>
      <View className="flex-row justify-between mb-2">
        <Text className="text-gray-600">Delivery charge:</Text>
        <Text className="font-semibold">₱50</Text>
      </View>
      <View className="flex-row justify-between mb-4">
        <Text className="text-lg font-bold">Total:</Text>
        <Text className="text-lg font-bold">₱200</Text>
      </View>
      <TouchableOpacity className="bg-orange-500 p-4 rounded-full">
        <Text className="text-white text-center font-bold">Checkout</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}