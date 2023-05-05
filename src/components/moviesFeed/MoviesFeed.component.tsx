import { FlatList, Text, View } from "react-native";
import { moviesFeedCardStyle, moviesFeedStyle } from "./moviesFeed.style";
import MoviesFeedCard from "./MoviesFeedCard.component";
import mockMovies from "@src/assets/dummyData/movies-feed.json";
import { useState } from "react";

const MoviesFeed = (): JSX.Element => {
  const [movies, setMovies] = useState(mockMovies);
  return (
    <View style={moviesFeedStyle.container}>
      {movies ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={moviesFeedCardStyle.flatlist}
          data={movies}
          renderItem={({ item }) => (
            <MoviesFeedCard
              tag={item.tag}
              key={item.id}
              username={item.username}
              movieName={item.movieName}
              movieComment={item.movieComment}
              movieScore={item.movieScore}
            />
          )}
        />
      ) : (
        <Text>Start following users to see reviews on your feed </Text>
      )}
    </View>
  );
};

export default MoviesFeed;
