import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store";
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Navigation />
    </Provider>
  );
}
