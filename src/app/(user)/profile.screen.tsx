import { useAuth, useUser } from "@clerk/clerk-expo";
import SignButton from "@src/components/signButton/SignButton.component";
import { Redirect, useNavigation } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useMovies } from "@src/contexts/likedMovies.context";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@src/common/colors";
import { StackActions } from "@react-navigation/native";

export default function ProfileScreen(): JSX.Element {
  const navigation = useNavigation();
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useAuth();
  const context = useMovies();

  if (!isLoaded) {
    //TODO: Usea a different loader
    return <Text>Loading...</Text>;
  } else if (!isSignedIn) {
    return <Redirect href="/" />;
  }

  const signUserOut = async () => {
    await signOut();
    const resetAction = StackActions.pop();
    navigation.dispatch(resetAction);
    return <Redirect href="/" />;
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
