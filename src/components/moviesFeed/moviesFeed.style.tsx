import { colors } from "@src/common/colors";
import { StyleSheet } from "react-native";

export const moviesFeedStyle = StyleSheet.create({
  container: {
    width: "92%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export const moviesFeedCardStyle = StyleSheet.create({
  cardContainer: {
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 3,
    borderRadius: 10,
    //shadows for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    //elevation are shadows for android
    elevation: 7,
    backgroundColor: colors.mainColor,
    justifyContent: "center",
    alignItems: "center",
  },
  flatlist: {
    width: "100%",
  },
  comment: {
    borderColor: colors.customGrey,
    borderWidth: 0.5,
    padding: 6,
    borderRadius: 10,
    textAlign: "justify",
    fontSize: 14.3,
  },
  userAndIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  ranking: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 3,
  },
  likeIconContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    marginVertical: 10,
    paddingHorizontal: 5,
  },
});
