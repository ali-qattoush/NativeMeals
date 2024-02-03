import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Banner from "./Views/Banner";
import styles from "./styles";
import { CartProvider } from "./store/CartContext";
import FoodList from "./Views/FoodList";

const App = () => {
  const foodList = [
    {
      name: "Classic Burger",
      description: "Juicy beef patty with lettuce, tomato, and special sauce.",
      price: 9.99,
    },
    {
      name: "Margherita Pizza",
      description: "Fresh tomatoes, mozzarella, and basil on a thin crust.",
      price: 12.99,
    },
    {
      name: "Chicken Caesar Salad",
      description:
        "Grilled chicken, crisp romaine lettuce and Caesar dressing.",
      price: 8.99,
    },
    {
      name: "Vegetarian Sushi Roll",
      description: "Avocado, cucumber, and carrot rolled in seaweed and rice.",
      price: 10.99,
    },
  ];

  return (
    <CartProvider>
      <View style={styles.container}>
        <Banner />
        <FoodList foods={foodList} />
        <StatusBar style="auto" />
      </View>
    </CartProvider>
  );
};

export default App;
