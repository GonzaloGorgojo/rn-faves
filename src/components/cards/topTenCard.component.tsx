import { Text, View } from "react-native";
import { topTenCardStyle } from "./cards.style";
import { IMovieCard } from "@src/common/interfaces";
import { EnTopTen } from "@src/common/enums";

const CTopTenCard = ({
  type,
  rank,
  artist,
  song,
  movie,
  description,
}: IMovieCard): JSX.Element => {
  return (
    <View style={topTenCardStyle.container}>
      <View style={topTenCardStyle.cardTitle}>
        <Text>{rank}</Text>
        <Text
          style={{
            flex: 1,
            fontWeight: "900",
            fontSize: 18,
            textTransform: "capitalize",
            textAlign: "center",
          }}
        >
          {type === EnTopTen.Music ? artist : movie}
        </Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          marginHorizontal: 5,
        }}
      >
        {type === EnTopTen.Music ? song : description}
      </Text>
    </View>
  );
};

export default CTopTenCard;
