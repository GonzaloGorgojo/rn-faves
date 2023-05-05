import { useAuth, useUser } from "@clerk/clerk-expo";
import SignButton from "@src/components/signButton/SignButton.component";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useMovies } from "@src/contexts/likedMovies.context";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@src/common/colors";

export default function ProfileScreen() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useAuth();
  const context = useMovies();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const signUserOut = async () => {
    await signOut();
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hi {user.username} !</Text>

      <View style={styles.movies}>
        <Text style={styles.title}>Movies</Text>
        <Text>{context?.name ?? "You have no movies liked"}</Text>
      </View>

      <SignButton
        customStyle={styles.button}
        title="Sign Out"
        onPress={signUserOut}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  movies: {
    width: "80%",
    height: "30%",
    borderColor: "red",
    borderWidth: 2,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    backgroundColor: colors.customRed,
  },
});
