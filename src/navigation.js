import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ProductScreen from "./screens/ProductScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";
import { Text } from "react-native";
const Stack = createStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5
                  name="shopping-cart"
                  size={18}
                  color="gray"
                  style={{ marginRight: 5 }}
                />
                <Text style={{ marginRight: 20, fontWeight: "500" }}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
