import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";

export default function registration() {
    return (
        <View className ="flex-1 items-center justify-center text-center p-6 ">
            <Text className="text-2xl font-plight font-bold">Sign In</Text>
            <TextInput className="text-1xl font-plight border rounded-lg w-full pl-4 py-3 m-4" placeholder= "Email or Phone Number"></TextInput>
            <TextInput className="text-1xl font-plight border rounded-lg w-full pl-4 py-3"placeholder= "Password"></TextInput>
            
            
        </View>
    )
}

const styles = StyleSheet.create({})