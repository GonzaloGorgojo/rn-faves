import { FlatList, Text, View } from 'react-native';
import { moviesFeedCardStyle, moviesFeedStyle } from './moviesFeed.style';
import MoviesFeedCard from './MoviesFeedCard.component';
import mockMovies from '@src/assets/dummyData/movies-feed.json';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainFeed = (): JSX.Element => {
  const { t } = useTranslation();

  //TODO: make real call and use useEffect
  const [movies] = useState(mockMovies);
  return (
    <View style={moviesFeedStyle.container}>
      {movies ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={moviesFeedCardStyle.flatlist}
          data={movies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <MoviesFeedCard {...item} />}
        />
      ) : (
        <Text>{t('not-following-users')}</Text>
      )}
    </View>
  );
};

export default MainFeed;
