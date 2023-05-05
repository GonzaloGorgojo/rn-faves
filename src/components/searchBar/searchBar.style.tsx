import { colors } from "@src/common/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    marginVertical: 15,
  },
  textInput: {
    borderWidth: 1,
    padding: 3,
    paddingLeft: 5,
    borderColor: "grey",
    width: "75%",
    borderRadius: 5,
  },
});
