import { StyleSheet } from "react-native";

export const userProfileInfoStyle = StyleSheet.create({
  container: {
    width: "98%",
    marginTop: 10,
  },
  rows: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    marginVertical: 2,
  },
  userText: {
    fontSize: 18,
    marginLeft: 5,
  },
});

export const userProfileTabsStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    width: "100%",
  },
});

export const topTenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  icon: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  topTen: {
    flex: 1,
  },
});

export const activityStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
