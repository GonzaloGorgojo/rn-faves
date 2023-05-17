import { FlatList, View } from "react-native";
import activity from "@src/assets/dummyData/activity.json";
import CActivityCard from "../cards/activityCard.style";
import { activityStyle } from "./userProfile.style";

const CProfileActivity = (): JSX.Element => {
  return (
    <View style={activityStyle.container}>
      <FlatList
        style={{ width: "90%", marginTop: 10 }}
        data={activity}
        renderItem={({ item }) => <CActivityCard {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CProfileActivity;
