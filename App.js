import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Navigation />
    </SafeAreaView>
  );
}
