import { Text, View } from "react-native";
import selectedUserProfileStyle from "./selectedUserProfile.style";
import { SelectedUserProfileType } from "@src/common/types";
import commonStyles from "@src/common/commonStyles";

const SelectedUserProfile = ({
  username,
  description,
}: SelectedUserProfileType): JSX.Element => {
  return (
    <View style={selectedUserProfileStyle.container}>
      <Text style={commonStyles.title}>{username}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default SelectedUserProfile;
