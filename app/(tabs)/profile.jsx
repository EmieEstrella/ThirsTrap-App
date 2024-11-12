import { Link } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { images, icons } from '../../constants'

const Profile = () => {
  return (
      <View className="flex-1 bg-gray-100">
        {/* Header */}
        <View className="bg-gray-900 p-4 flex-row items-center justify-between"> 
          <Text className="text-white text-xl font-bold  ">Edit Profile</Text>        
          <TouchableOpacity>
            <Text className="text-white text-2xl ">☰</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View className="bg-gray-900 pb-8 pt-6 items-center relative">
          <View className="border-4 border-white rounded-full overflow-hidden">
            <Image
             source={icons.profile} 
              className="w-28 h-28 bg-white"
            />
          </View>
          <Text className="text-white text-xl font-bold mt-4">ThisIsYou</Text>
          </View>

        {/* Profile Options */}
        <ScrollView className="bg-white mt-4">
          <TouchableOpacity className="py-4 px-6 border-b border-gray-200">
            <Text className="text-gray-700">Personal Info</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-4 px-6 border-b border-gray-200">
            <Text className="text-gray-700">Bank Account Info</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-4 px-6 border-b border-gray-200">
            <Text className="text-gray-700">Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-4 px-6 border-b border-gray-200">
            <Text className="text-gray-700">Change Email Address</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
  )
}

export default Profile