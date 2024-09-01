import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  outerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  InnerItemMedium: {
    width: "75%",
    margin: 10,
  },

  InnerItemSmall: {
    width: "50%",
    margin: 10,
  },
  link: {
    color: "purple",
  },
  titleWithoutHeader: {
    marginTop: 100,
   
  },
});

export default styles;
