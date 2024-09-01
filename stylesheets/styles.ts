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
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "75%",
    justifyContent: "space-around",
  },
});

export default styles;
