import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon,color,name,focused}) =>{
  return(
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
      />
    </View>
  )
}

/*const TabsLayout = () => {
  return (
    <View>
      <Image
        source={}
      />
    </View>
  )
}  */

const TabLayout = () => {
  return (
    <>
      <Tabs>

        <Tabs.Screen
          name="home" 
          options={{
            title:'Home',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name="search" 
          options={{
            title:'Search',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
              icon={icons.search}
              color={color}
              name="Search"
              focused={focused}
              />
            )
          }}
          />
        
        <Tabs.Screen
          name="cart" 
          options={{
            title:'Cart',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
              icon={icons.cart}
              color={color}
              name="Cart"
              focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name="profile" 
          options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
              />
            )
          }}
        />



      </Tabs>
    </>
  )
}

export default TabLayout