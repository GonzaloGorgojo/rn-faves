import { ClerkProvider } from "@clerk/clerk-expo";
import { Link, Stack } from "expo-router";
import { CLERK_PUBLISHABLE_KEY } from "@env";
import * as SecureStore from "expo-secure-store";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import commonStyles from "@src/common/commonStyles";
import { colors } from "@src/common/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EnProfileType } from "@src/common/enums";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={String(CLERK_PUBLISHABLE_KEY)}
    >
      <Stack
        screenOptions={{
          headerTitle: () => (
            <>
              <Entypo name="emoji-happy" size={24} color="black" />
              <Text style={{ ...commonStyles.title, fontSize: 25 }}>
                {" "}
                Fave-s
              </Text>
            </>
          ),
          headerStyle: {
            backgroundColor: colors.mainColor,
          },
          headerTitleAlign: "center",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen
          name="(auth)/signIn.screen"
          options={{
            title: `Sign In`,
          }}
        />
        <Stack.Screen
          name="(auth)/signUp.screen"
          options={{
            title: `Sign Up`,
          }}
        />
        <Stack.Screen
          name="(home)/home.screen"
          options={{
            headerRight: () => (
              <Link
                href={{
                  pathname: "(user)/profile.screen",
                  params: { type: EnProfileType.Personal },
                }}
                asChild
              >
                <TouchableOpacity>
                  <FontAwesome5 name="user-circle" size={35} color="black" />
                </TouchableOpacity>
              </Link>
            ),
          }}
        />
        <Stack.Screen
          name="(user)/profile.screen"
          options={{
            title: `Profile`,
          }}
        />
      </Stack>
    </ClerkProvider>
  );
}
