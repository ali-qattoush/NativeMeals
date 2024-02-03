import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import CartContext from "../store/CartContext";
import styles from "../styles";
import { ADD, UPDATE } from "../store/sharedTypes";

type FoodItem = {
  name: string;
  description: string;
  price: number;
};

type FoodListProps = {
  foods: FoodItem[];
};

type InputValue = {
  [key: string]: number;
};

const stateList = {
  "Classic Burger": 0,
  "Vegetarian Sushi Roll": 0,
  "Chicken Caesar Salad": 0,
  "Margherita Pizza": 0,
};

const FoodList: React.FC<FoodListProps> = ({ foods }) => {
  const [inputValue, setInputValue] = useState<InputValue>(stateList);
  // identifier/displayer for amount.

  const { state, dispatch } = useContext(CartContext) ?? {
    state: [],
    dispatch: () => {},
  };
  // retrieve context values.

  function amountHandler(text: string, name: string) {
    const value = parseInt(text);
    if (value >= 0) {
      setInputValue((prevInputValue) => ({
        ...prevInputValue,
        [name]: value,
      }));
    }
    /* If the inputed amount is less than 0, 
    dont change the state, otherwise save it in the state */
  }

  function addHandler(food: FoodItem) {
    if (inputValue[food.name] === 0) return;
    // if the user tries to add without specifying an input, stop execution

    const foodOrder = {
      name: food.name,
      price: food.price,
      amount: inputValue[food.name],
    };
    // save the value which add press came from.

    setInputValue(stateList);
    // reset the values, for the next added food.

    let foundMatch = false;

    state.forEach((item) => {
      if (item.name === foodOrder.name) {
        dispatch({
          type: UPDATE,
          payload: {
            ...foodOrder,
          },
        });
        foundMatch = true;
      }
    });
    // if it already exists in the cart, then its an update process.

    if (!foundMatch) {
      dispatch({ type: ADD, payload: { ...foodOrder } });
    }
    // if it doesnt exist in the cart, add it.
  }

  return (
    <View style={styles.foodContainer}>
      <View style={styles.foodMenuList}>
        {foods.map((food, index) => (
          <View key={index} style={styles.foodBox}>
            <View style={styles.infoBox}>
              <View style={styles.infoBoxContainer}>
                <Text
                  style={{
                    color: "white",
                    fontStyle: "italic",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {food.name}
                </Text>
                <Text
                  style={{
                    ...styles.textStyling,
                    width: "65%",
                    paddingVertical: 10,
                  }}
                >
                  {food.description}
                </Text>
                <Text style={{ ...styles.textStyling, fontSize: 16 }}>
                  ${food.price}
                </Text>
              </View>
            </View>
            <View style={styles.priceBox}>
              <View style={styles.priceBoxContainer}>
                <TextInput
                  style={{ ...styles.textStyling, marginRight: 10 }}
                  value={inputValue[food.name].toString()}
                  onChangeText={(text) => amountHandler(text, food.name)}
                  keyboardType="numeric"
                />

                <TouchableOpacity onPress={() => addHandler(food)}>
                  <Text style={styles.textStyling}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default FoodList;
