import React, { useState, useContext } from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CartContext from "../store/CartContext";
import styles from "../styles";
import { updateDispatcher, deleteDispatcher } from "../store/sharedTypes";

const Banner: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { state, dispatch } = useContext(CartContext) ?? {
    state: [],
    dispatch: () => {},
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const incrementQuantity = (index: number) => {
    if (updateDispatcher) {
      dispatch(updateDispatcher({ ...state[index], amount: 1 }));
    }
  };
  // fetch the index, specified by .map to identify food.

  const decrementQuantity = (index: number) => {
    if (state[index].amount === 1) {
      if (deleteDispatcher) {
        dispatch(deleteDispatcher({ ...state[index] }));
      }
    }

    if (updateDispatcher) {
      dispatch(updateDispatcher({ ...state[index], amount: -1 }));
    }
  };

  const calculateTotal = () => {
    return state.reduce((currentTotal, currentItem) => {
      return currentTotal + currentItem.price * currentItem.amount;
    }, 0);
  };

  return (
    <View style={styles.bannerContainer}>
      <Text style={styles.bannerTextColor}>NativeMeals</Text>
      <TouchableOpacity style={styles.cartButton} onPress={openModal}>
        <Ionicons
          style={{ color: "white", marginRight: 5 }}
          name="cart"
          size={34}
          color="black"
        />
        <Text style={styles.bannerTextColor}>Cart</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {state.length === 0 ? (
              <Text style={{ fontSize: 15 }}>No Items</Text>
            ) : null}
            {state.map((food, index) => (
              <View key={index}>
                <View style={styles.modalInfoBox}>
                  <View style={styles.infoBoxRow}>
                    <View style={styles.infoBoxContainer}>
                      <Text
                        style={{
                          color: "black",
                          fontStyle: "italic",
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {food.name}
                      </Text>
                      <Text style={{ color: "black", fontSize: 16 }}>
                        ${food.price}
                      </Text>
                    </View>
                  </View>
                  <View style={{ ...styles.amountBox }}>
                    <View style={{ ...styles.amountBoxContainer }}>
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                          style={{ ...styles.amountBoxStyling }}
                          onPress={() => decrementQuantity(index)}
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              color: "white",
                              paddingHorizontal: 5,
                            }}
                          >
                            -
                          </Text>
                        </TouchableOpacity>
                        <View
                          style={{
                            ...styles.amountBoxStyling,
                            marginHorizontal: 10,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              color: "white",
                            }}
                          >
                            {food.amount}
                          </Text>
                        </View>

                        <TouchableOpacity
                          style={styles.amountBoxStyling}
                          onPress={() => incrementQuantity(index)}
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              color: "white",
                            }}
                          >
                            +
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))}
            <View>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                }}
              >
                Total : ${calculateTotal().toFixed(2)}
              </Text>
            </View>
            <View style={styles.buttonPosition}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={{ color: "white" }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Banner;
