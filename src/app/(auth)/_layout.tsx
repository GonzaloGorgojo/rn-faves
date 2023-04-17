import { Stack } from "expo-router";
import { colors } from "@src/constants/colors";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => (
          <>
            <Entypo name="emoji-happy" size={24} color="black" />
            <Text style={styles.headerMainTitle}> Faves </Text>
          </>
        ),
        headerStyle: {
          backgroundColor: colors.mainColor,
        },
        headerTitleAlign: "center",
      }}
    />
  );
}

const styles = StyleSheet.create({
  headerMainTitle: {
    fontSize: 25,
  },
});
