import { Stack } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Text } from "react-native";
import { colors } from "@src/common/colors";
import commonStyles from "@src/common/commonStyles";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => (
          <>
            <Entypo name="emoji-happy" size={24} color="black" />
            <Text style={commonStyles.title}> Fave-s </Text>
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
