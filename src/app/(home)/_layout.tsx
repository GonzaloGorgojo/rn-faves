import { Stack, useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { MoviesContext, useMovies } from "@src/contexts/likedMovies.context";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "@src/common/colors";
import commonStyles from "@src/common/commonStyles";

export default function HomeLayout() {
  const router = useRouter();
  const context = useMovies();

  return (
    <MoviesContext.Provider value={context}>
      <Stack
        screenOptions={{
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push("(user)/profile")}>
              <FontAwesome5 name="user-circle" size={35} color="black" />
            </TouchableOpacity>
          ),

          headerTitle: () => (
            <>
              <Entypo name="emoji-happy" size={24} color="black" />
              <Text style={{ ...commonStyles.title, fontSize: 25 }}>
                {" "}
                Fave-s{" "}
              </Text>
            </>
          ),
          headerStyle: {
            backgroundColor: colors.mainColor,
          },
          headerTitleAlign: "center",
        }}
      ></Stack>
    </MoviesContext.Provider>
  );
}
