import { Text, TouchableOpacity, View } from "react-native";
import { userProfileInfoStyle } from "./userProfile.style";
import userInfo from "@src/assets/dummyData/user-profile.json";
import { useState } from "react";
import * as WebBrowser from "expo-web-browser";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { EnProfileType } from "@src/common/enums";
import { IUserProfile } from "@src/common/interfaces";
import { useTranslation } from "react-i18next";

const CUserProfileInfo = (user: IUserProfile): JSX.Element => {
  const params = useLocalSearchParams();
  const { t } = useTranslation();

  const openBrowser = async () => {
    await WebBrowser.openBrowserAsync(user.personalLink);
  };

  return (
    <View style={userProfileInfoStyle.container}>
      <View style={userProfileInfoStyle.rows}>
        <AntDesign name="user" size={32} color="black" />
        <Text style={userProfileInfoStyle.userText}>@{user.username}</Text>
      </View>
      <View style={userProfileInfoStyle.editFollow}>
        {params.type === EnProfileType.Personal ? (
          <TouchableOpacity style={userProfileInfoStyle.editFollowButton}>
            <MaterialCommunityIcons
              name="account-edit-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={userProfileInfoStyle.editFollowButton}>
            <Text>{t("follow")}</Text>
          </TouchableOpacity>
        )}
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
          {t("stars-collected")}: {user.starsCollected}
        </Text>
      </View>
    </View>
  );
};

export default CUserProfileInfo;
