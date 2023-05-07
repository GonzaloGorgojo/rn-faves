import { Text, TouchableOpacity, View } from "react-native";
import { moviesFeedCardStyle } from "./moviesFeed.style";
import commonStyles from "@src/common/commonStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { colors } from "@src/common/colors";
import { AntDesign } from "@expo/vector-icons";
import { MoviesFeedCardType } from "@src/common/types";

const MoviesFeedCard = ({
  username,
  movieName,
  movieScore,
  movieComment,
  tag,
  userId,
  isLiked,
  id,
}: MoviesFeedCardType): JSX.Element => {
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
            pathname: "(user)/selectedProfile.screen",
            params: { userId },
          }}
        >
          <TouchableOpacity>
            <Text style={{ ...commonStyles.title, fontSize: 17 }}>
              @{username}
            </Text>
          </TouchableOpacity>
        </Link>
        {tag === "movie" ? (
          <MaterialCommunityIcons name="movie" size={25} color="black" />
        ) : (
          ""
        )}
      </View>
      <TouchableOpacity onPress={() => alert("go to movie info")}>
        <Text
          style={{
            ...commonStyles.title,
            textTransform: "capitalize",
            color: colors.customBlue,
          }}
        >
          {movieName}
        </Text>
      </TouchableOpacity>
      <View style={moviesFeedCardStyle.ranking}>
        <Text style={{ fontSize: 16 }}>User Ranking: {movieScore}</Text>
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
