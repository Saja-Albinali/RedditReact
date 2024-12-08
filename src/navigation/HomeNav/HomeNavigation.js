import { TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../component/screens/Home";
import Posts from "../../component/screens/Posts"; // Ensure correct import and capitalization

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f9e3be",
        },
        headerShadowVisible: false,
      }}
    >
      {/* Home Screen */}
      <Stack.Screen name="Home" component={Home} />

      {/* Posts Screen */}
      <Stack.Screen
        name="Posts"
        component={Posts}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 10,
                padding: 8,
                backgroundColor: "#eee",
                borderRadius: 5,
              }}
              onPress={() => setModalVisible(!modalVisible)} // Toggle modal visibility
            >
              <Text>Options</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;