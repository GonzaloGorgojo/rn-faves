import { userProfileTabsStyle } from "./userProfile.style";
import CTabs from "@src/components/tabs/tabs.component";
import { useState } from "react";
import { EnProfileFeed } from "@src/common/enums";
import { View } from "react-native";
import CTopTen from "./topTen.component";
import CProfileActivity from "./activity.component";

const CUserProfileTabs = (): JSX.Element => {
  const [profileFeed, setProfileFeed] = useState<EnProfileFeed>(
    EnProfileFeed.Activity
  );

  let content;
  switch (profileFeed) {
    case EnProfileFeed.Activity:
      content = <CProfileActivity />;
      break;
    case EnProfileFeed.Top10:
      content = <CTopTen />;
      break;
    default:
      break;
  }

  return (
    <View style={userProfileTabsStyle.container}>
      <CTabs
        titleFontSize={18}
        profileFeed={profileFeed}
        setProfileFeed={setProfileFeed}
        titles={[EnProfileFeed.Activity, EnProfileFeed.Top10]}
      />
      {content}
    </View>
  );
};
export default CUserProfileTabs;
