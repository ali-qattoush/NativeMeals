import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // borderColor: "green",
    // borderWidth: 3,
  },
  bannerContainer: {
    // borderColor: "blue",
    // borderWidth: 1,
    flexDirection: "row",
    flex: 1,
    width: "100%",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#6495ED",
  },
  cartButton: { flexDirection: "row", alignItems: "center" },
  bannerTextColor: {
    color: "white",
    fontSize: 20,
  },
  foodContainer: {
    // borderColor: "red",
    // borderWidth: 2,
    alignItems: "center",
    flex: 6,
    width: "100%",
  },
  foodMenuList: {
    // borderColor: "purple",
    // borderWidth: 2,
    width: "90%",
    backgroundColor: "#6495ED",
    marginTop: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 5,
  },
  textStyling: {
    color: "white",
  },
  foodBox: {
    flexDirection: "row",
    // borderBottomWidth: 2,
    // borderColor: "white",
    borderRadius: 4,
    paddingVertical: 5,
  },
  addButton: {},
  infoBox: {
    flex: 2,
    width: "70%",
  },
  infoBoxContainer: {
    flexDirection: "column",
    width: "100%",
  },
  priceBox: {
    flex: 1,
    flexDirection: "row",

    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  priceBoxContainer: {
    // borderColor: "purple",
    // borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#45319e",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  }, modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flexDirection: "column",
    
    
  },
  modalContent: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    width: "85%",
    
    
    
  },
  closeButton: {
    borderRadius: 10,
    backgroundColor: "#6495ED",
    width: "30%",
    padding: 5,
    marginTop: 5,
    alignItems: "center",
  },
  buttonPosition: {
    alignItems: "flex-end",
  },
  amountBox: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    justifyContent: "flex-end",
 
  },
  amountBoxContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "100%",
    marginRight: 5,
   

   
    

  },
  modalInfoBox: {
    flexDirection: "row",
    width: "100%",
    // borderWidth: 4,
    marginVertical: 5,
    paddingVertical: 10,
    height: 100
    
  
  },
  amountBoxStyling: {
    backgroundColor: "#6495ED",
    borderRadius: 50,
    padding: 5,
    width: 35,
    alignItems: "center"
  },
  infoBoxRow: {
    flex:1,


  }
 

});

export default styles;
