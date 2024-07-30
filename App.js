import {
  StyleSheet,
  Text,
  Touchable,
  View,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  console.log("hello");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <TouchableOpacity
        onLongPress={() => Alert.alert("hello", "wordl", [{ text: "hello" }])}
        onPress={() => console.log(statusbar, Platform)}
      >
        <Image
          source={{
            width: 100,
            height: 100,
            uri: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
