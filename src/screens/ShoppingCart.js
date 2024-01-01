import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import CartListItem from "../components/cartListItem";
import { useSelector } from "react-redux";
import {
  selectDeliveryPrice,
  selectTotal,
  selectTotalOfItems,
} from "../store/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const ShoppingCartTotals = () => {
    const SubTotal = useSelector(selectTotalOfItems);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);

    return (
      <View style={styles.totalContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>SubTotal</Text>
          <Text style={styles.text}>{SubTotal} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>{deliveryFee} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>{total} US$</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ShoppingCart;
