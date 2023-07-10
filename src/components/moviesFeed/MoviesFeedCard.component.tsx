import { Text, TouchableOpacity, View } from 'react-native';
import { moviesFeedCardStyle } from './moviesFeed.style';
import commonStyles from '@src/common/commonStyles';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { colors } from '@src/common/colors';
import { IMoviesFeedCard } from '@src/common/interfaces';
import { EnProfileType } from '@src/common/enums';
import { useTranslation } from 'react-i18next';

const MoviesFeedCard = ({
  username,
  movieName,
  movieScore,
  movieComment,
  tag,
  userId,
  isLiked,
  id,
}: IMoviesFeedCard): JSX.Element => {
  const { t } = useTranslation();

  //TODO: make call to backend and update state
  const setIsLiked = (id: number) => {
    alert(`will update state ${id}`);
  };

  return (
    <View style={moviesFeedCardStyle.cardContainer}>
      <View style={moviesFeedCardStyle.userAndIconContainer}>
        <Link
          asChild
          href={{
            pathname: '(user)/profile.screen',
            params: { type: EnProfileType.Visitor, userId },
          }}
        >
          <TouchableOpacity>
            <Text style={{ ...commonStyles.title, fontSize: 17 }}>
              @{username}
            </Text>
          </TouchableOpacity>
        </Link>
        {tag === 'movie' ? (
          <MaterialCommunityIcons name="movie" size={25} color="black" />
        ) : (
          ''
        )}
      </View>
      <TouchableOpacity onPress={() => alert('go to movie info')}>
        <Text
          style={{
            ...commonStyles.title,
            textTransform: 'capitalize',
            color: colors.customBlue,
          }}
        >
          {movieName}
        </Text>
      </TouchableOpacity>
      <View style={moviesFeedCardStyle.ranking}>
        <Text style={{ fontSize: 16 }}>
          {t('user-movie-score')} {movieScore}
        </Text>
      </View>
      <Text style={moviesFeedCardStyle.comment}>{movieComment}</Text>
      <View style={moviesFeedCardStyle.likeIconContainer}>
        <TouchableOpacity onPress={() => setIsLiked(id)}>
          {isLiked ? (
            <AntDesign name="star" size={30} color="black" />
          ) : (
            <AntDesign name="staro" size={30} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoviesFeedCard;
