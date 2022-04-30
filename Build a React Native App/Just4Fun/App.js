import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function App() {
  const handlePress = () => console.log("Clicked on Text");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hey hey hey!
      </Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <Image
        source={{
          width: 600,
          height: 300,
          uri: "https://picsum.photos/id/237/200/300",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
