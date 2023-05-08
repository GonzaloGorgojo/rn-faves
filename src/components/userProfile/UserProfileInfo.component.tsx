import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import { userProfileInfoStyle } from "./userProfile.style";
import userInfo from "@src/assets/dummyData/user-profile.json";
import { useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const UserProfileInfo = (): JSX.Element => {
  //TODO: type this state, will come from context call
  const [user, setUser] = useState(userInfo);

  const openBrowser = async () => {
    await WebBrowser.openBrowserAsync(user.personalLink);
  };

  return (
    <SafeAreaView
      edges={["bottom", "left", "right"]}
      style={userProfileInfoStyle.container}
    >
      <View style={userProfileInfoStyle.rows}>
        <AntDesign name="user" size={32} color="black" />
        <Text style={userProfileInfoStyle.userText}>@{user.username}</Text>
      </View>
      <View style={userProfileInfoStyle.rows}>
        <MaterialCommunityIcons name="email-outline" size={32} color="black" />
        <Text style={userProfileInfoStyle.userText}>{user.email}</Text>
      </View>
      <View style={userProfileInfoStyle.rows}>
        <Ionicons name="bulb-outline" size={32} color="black" />
        <Text style={userProfileInfoStyle.userText}>{user.description}</Text>
      </View>
      <TouchableOpacity onPress={openBrowser} style={userProfileInfoStyle.rows}>
        <AntDesign name="link" size={32} color="black" />
        <Text style={{ ...userProfileInfoStyle.userText, color: "blue" }}>
          {user.personalLink}
        </Text>
      </TouchableOpacity>
      <View style={userProfileInfoStyle.rows}>
        <Ionicons name="location-outline" size={32} color="black" />
        <Text style={userProfileInfoStyle.userText}>{user.country}</Text>
      </View>
      <View style={userProfileInfoStyle.rows}>
        <AntDesign name="staro" size={32} color="black" />
        <Text style={userProfileInfoStyle.userText}>
          Stars collected: {user.starsCollected}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileInfo;
