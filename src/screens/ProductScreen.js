import { View, FlatList, Image, StyleSheet, Pressable } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { productSlice } from "../store/productSlice";
const ProductScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              dispatch(productSlice.actions.setSelectedProduct(item.id));
              navigation.navigate("Product Details");
            }}
            style={styles.itemContainer}
          >
            <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
            />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductScreen;
