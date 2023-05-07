import { Stack, useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Text } from "react-native";
import { MoviesContext, useMovies } from "@src/contexts/likedMovies.context";
import { colors } from "@src/common/colors";
import commonStyles from "@src/common/commonStyles";

export default function HomeLayout() {
  const router = useRouter();
  const context = useMovies();

  return (
    <MoviesContext.Provider value={context}>
      <Stack
        screenOptions={{
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
          headerBackTitle: "Back",
        }}
      ></Stack>
    </MoviesContext.Provider>
  );
}
