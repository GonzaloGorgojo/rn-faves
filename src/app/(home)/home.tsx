import MoviesFeed from "@src/components/moviesFeed/MoviesFeed.component";
import SearchBar from "@src/components/searchBar/SearchBar.component";
import { StyleSheet, View } from "react-native";

export default function HomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <SearchBar />
      <MoviesFeed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
