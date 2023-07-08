import { useAuth } from "@clerk/clerk-expo";
import MainFeed from "@src/components/moviesFeed/MoviesFeed.component";
import CSearchBar from "@src/components/searchBar/SearchBar.component";
import { Redirect, Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
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
      <StatusBar style="dark" />
      <CSearchBar />
      <MainFeed />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
