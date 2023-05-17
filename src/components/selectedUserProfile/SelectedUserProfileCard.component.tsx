import { Text, View } from "react-native";
import selectedUserProfileStyle from "./selectedUserProfile.style";
import commonStyles from "@src/common/commonStyles";
import { ISelectedUserProfile } from "@src/common/interfaces";

const SelectedUserProfile = ({
  username,
  description,
  startsCollected,
}: ISelectedUserProfile): JSX.Element => {
  return (
    <View style={selectedUserProfileStyle.container}>
      <Text style={commonStyles.title}>{username}</Text>
      <Text>{description}</Text>
      <Text>Stars collected: {startsCollected}</Text>
    </View>
  );
};

export default SelectedUserProfile;
