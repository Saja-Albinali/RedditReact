import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://store-images.s-microsoft.com/image/apps.4416.14375561300249796.d13a74ad-ce63-46e2-8940-cdc1265dc71f.cf708543-813e-4d06-843f-3f455881562c",
        }}
        style={styles.logo}
      />
      <Text style={styles.text}>Reddit</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Posts")} // Use the correct screen name
      >
        <Text style={styles.buttonText}>View Posts</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#f9e3be",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "bold",
  },
};
