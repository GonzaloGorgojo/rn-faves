import { ITabs } from "@src/common/interfaces";
import { SafeAreaView } from "react-native-safe-area-context";
import { tabsStyle } from "./tabs.style";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "@src/common/colors";

const CTabs = ({
  titles,
  setProfileFeed,
  titleFontSize,
  profileFeed,
}: ITabs): JSX.Element => {
  return (
    <SafeAreaView edges={["left", "right"]} style={tabsStyle.container}>
      {titles.map((t) => (
        <TouchableOpacity
          key={t}
          style={[
            tabsStyle.tab,
            profileFeed === t ? { backgroundColor: colors.mainColor } : {},
          ]}
          onPress={() => setProfileFeed(t)}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: titleFontSize,
            }}
          >
            {t}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default CTabs;
