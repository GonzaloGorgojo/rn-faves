import { useAuth, useUser } from "@clerk/clerk-expo";
import SignButton from "@src/components/signButton/SignButton.component";
import { Redirect, Stack, useNavigation } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@src/common/colors";
import { StackActions } from "@react-navigation/native";
import CUserProfileInfo from "@src/components/userProfile/UserProfileInfo.component";
import { StatusBar } from "expo-status-bar";
import CUserProfileTabs from "@src/components/userProfile/UserProfileTabs.component";
import { useTranslation } from "react-i18next";

export default function ProfileScreen(): JSX.Element {
  const { t } = useTranslation();
  const { isLoaded, isSignedIn } = useUser();
  const { signOut } = useAuth();
  const navigation = useNavigation();

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

      <CUserProfileInfo />
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
