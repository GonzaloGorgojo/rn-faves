import { useAuth, useUser } from "@clerk/clerk-expo";
import SignButton from "@src/components/signButton/SignButton.component";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@src/common/colors";
import { StackActions } from "@react-navigation/native";
import CUserProfileInfo from "@src/components/userProfile/UserProfileInfo.component";
import { StatusBar } from "expo-status-bar";
import CUserProfileTabs from "@src/components/userProfile/UserProfileTabs.component";
import { useTranslation } from "react-i18next";
import { EnProfileType } from "@src/common/enums";
import { useEffect, useState } from "react";
import personalInfo from "@src/assets/dummyData/user-profile.json";
import allUsersInfo from "@src/assets/dummyData/users-info.json";

export default function ProfileScreen(): JSX.Element {
  const { t } = useTranslation();
  const { isLoaded, isSignedIn } = useUser();
  const { signOut } = useAuth();
  const navigation = useNavigation();
  const { type, userId } = useLocalSearchParams();
  //TODO: type this
  const [userInfo, setUserInfo] = useState<any>();

  // //TODO: make call to backend
  useEffect(() => {
    if (type === EnProfileType.Personal) {
      setUserInfo(personalInfo);
    } else if (type === EnProfileType.Visitor) {
      const selectedUser = allUsersInfo.find((u) => u.userId === userId);
      setUserInfo(selectedUser);
    }
  }, []);

  if (!isLoaded) {
    //TODO: Use a different loader
    return <Text>Loading...</Text>;
  } else if (!isSignedIn) {
    return <Redirect href="/" />;
  }

  const signUserOut = async () => {
    await signOut();
    const resetAction = StackActions.pop();
    navigation.dispatch(resetAction);
    return <Redirect href="/" />;
  };

  return (
    <SafeAreaView edges={["left", "right", "bottom"]} style={styles.container}>
      <StatusBar style="dark" />

      <CUserProfileInfo {...userInfo} />
      <CUserProfileTabs />
      <SignButton
        customStyle={{ backgroundColor: colors.customRed }}
        title={t("sign-out")}
        onPress={signUserOut}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
