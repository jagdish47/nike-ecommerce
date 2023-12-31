import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import ProductScreen from "./src/screens/ProductScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {/* <ProductScreen /> */}
        <ProductDetailsScreen />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
