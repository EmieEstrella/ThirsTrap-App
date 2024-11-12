import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { Button } from "react-native";

export default function registration() {
    return (
        <View className ="flex-1 items-center justify-center text-center p-6">
        <Text className="text-2xl font-plight font-bold">Sign Up</Text>
        <TextInput className="text-1xl font-pthin border rounded-lg w-full pl-4 py-3 m-2"placeholder="Username"></TextInput>
        <TextInput className="text-1xl font-pthin border rounded-lg w-full pl-4 py-3 m-2"placeholder="Email or Phone Number"></TextInput>
        <TextInput className="text-1xl font-pthin border rounded-lg w-full pl-4 py-3 m-2"placeholder="Password"></TextInput>
        <TextInput className="text-1xl font-pthin border rounded-lg w-full pl-4 py-3 m-2"placeholder="Confirm Password"></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({})