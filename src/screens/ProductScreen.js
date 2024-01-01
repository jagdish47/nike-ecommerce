import { View, FlatList, Image, StyleSheet, Pressable } from "react-native";
import product from "../data/product";

const ProductScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={product}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Product Details")}
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
