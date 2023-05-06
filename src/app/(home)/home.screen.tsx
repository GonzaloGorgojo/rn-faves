import { useAuth } from "@clerk/clerk-expo";
import MoviesFeed from "@src/components/moviesFeed/MoviesFeed.component";
import SearchBar from "@src/components/searchBar/SearchBar.component";
import { Redirect, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(): JSX.Element {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <Text>Loading...</Text>;
  } else if (!isSignedIn) {
    return <Redirect href="/" />;
  }

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <SearchBar />
      <MoviesFeed />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
