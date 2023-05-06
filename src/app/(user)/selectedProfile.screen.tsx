import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import profilesInfo from "@src/assets/dummyData/followed-user.json";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectedUserProfile from "@src/components/selectedUserProfile/SelectedUserProfileCard.component";
import { SelectedUserProfileType } from "@src/common/types";
import { Ionicons } from "@expo/vector-icons";

export default function VisitProfileScreen(): JSX.Element {
  const { userId } = useLocalSearchParams();
  const router = useRouter();

  //TODO: change type
  const [selectedUserProfile, setSelectedUserProfile] =
    useState<SelectedUserProfileType>();

  const getSelectedUserProfile = (userId: string | string[]) => {
    //TODO: we will make a call to get the info about the user, for now its mocked
    const userProfile = profilesInfo.find((p) => p.userId == userId);
    if (userProfile) {
      setSelectedUserProfile(userProfile);
    }
  };

  useEffect(() => {
    if (userId) {
      getSelectedUserProfile(userId);
    }
  }, []);

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={style.container}>
      {selectedUserProfile ? (
        <SelectedUserProfile {...selectedUserProfile} />
      ) : (
        //TODO: make screen if error occurs or no user is found
        <View
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text>An Error ocurred, please click icon to go back to Home</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="reload-circle-outline" size={40} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
