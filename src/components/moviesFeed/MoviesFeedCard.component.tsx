import { Text, TouchableOpacity, View } from "react-native";
import { moviesFeedCardStyle } from "./moviesFeed.style";
import commonStyles from "@src/common/commonStyles";
import { FeedCardType } from "@src/common/enums";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type CardProps = {
  username: string;
  movieName: string;
  movieScore: number;
  movieComment: string;
  tag: string;
};

const MoviesFeedCard = ({
  username,
  movieName,
  movieScore,
  movieComment,
  tag,
}: CardProps): JSX.Element => {
  return (
    <View style={moviesFeedCardStyle.cardContainer}>
      <View style={moviesFeedCardStyle.userAndIconContainer}>
        <TouchableOpacity onPress={() => alert("go to user profile")}>
          <Text
            style={{
              ...commonStyles.title,
              fontSize: 18,
            }}
          >
            @{username}
          </Text>
        </TouchableOpacity>
        {tag === "movie" ? (
          <MaterialCommunityIcons name="movie" size={25} color="black" />
        ) : (
          ""
        )}
      </View>
      <TouchableOpacity onPress={() => alert("go to movie info")}>
        <Text style={{ ...commonStyles.title, textTransform: "capitalize" }}>
          {movieName}
        </Text>
      </TouchableOpacity>
      <View style={moviesFeedCardStyle.ranking}>
        <Text style={{ fontSize: 16 }}>User Ranking: {movieScore}</Text>
      </View>
      <Text style={moviesFeedCardStyle.comment}>{movieComment}</Text>
    </View>
  );
};

export default MoviesFeedCard;
