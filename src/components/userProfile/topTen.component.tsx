import { topTenStyle } from './userProfile.style';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { EnTopTen } from '@src/common/enums';
import music from '@src/assets/dummyData/music.json';
import movies from '@src/assets/dummyData/movies.json';
import CTopTenCard from '../cards/topTenCard.component';
import { colors } from '@src/common/colors';

const CTopTen = (): JSX.Element => {
  const [topTen, setTopTen] = useState<EnTopTen>(EnTopTen.Music);

  return (
    <View style={topTenStyle.container}>
      <View style={topTenStyle.iconsContainer}>
        <TouchableOpacity
          style={[
            topTenStyle.icon,
            topTen === EnTopTen.Music
              ? { backgroundColor: colors.mainColor }
              : {},
          ]}
          onPress={() => setTopTen(EnTopTen.Music)}
        >
          <Ionicons name="musical-notes-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            topTenStyle.icon,
            topTen === EnTopTen.Movie
              ? { backgroundColor: colors.mainColor }
              : {},
          ]}
          onPress={() => setTopTen(EnTopTen.Movie)}
        >
          <MaterialCommunityIcons
            name="movie-filter-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={topTenStyle.topTen}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {topTen === EnTopTen.Music
          ? music.map((e) => {
              return (
                <CTopTenCard
                  type={EnTopTen.Music}
                  key={e.id}
                  rank={e.rank}
                  song={e.song}
                  artist={e.artist}
                />
              );
            })
          : movies.map((e) => {
              return (
                <CTopTenCard
                  type={EnTopTen.Movie}
                  key={e.id}
                  rank={e.rank}
                  movie={e.movie}
                  description={e.description}
                />
              );
            })}
      </ScrollView>
    </View>
  );
};

export default CTopTen;
