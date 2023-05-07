import { ImageBackground, StyleSheet, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack, useRouter } from "expo-router";
import UserForm from "@src/components/userForm/UserForm.component";
import SignButton from "@src/components/signButton/SignButton.component";
import { Image } from "expo-image";

const SignInScreen = (): JSX.Element => {
  const router = useRouter();

  const { signIn, setActive, isLoaded } = useSignIn();

  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSignInPress = async (): Promise<void> => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
      router.replace("/");
    } catch (err: any) {
      alert(err.errors ? err.errors[0].message : err);
    }
  };

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("@src/assets/images/wall.jpg")}
    >
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          options={{
            title: `Sign In`,
          }}
        />
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("@src/assets/images/logo.png")}
          ></Image>
        </View>
        <UserForm
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          isUsername={false}
          emailAddress={emailAddress}
          setEmailAddress={setEmailAddress}
          setPassword={setPassword}
          password={password}
        />

        <SignButton title="Sign In" onPress={onSignInPress} />

        <Link style={styles.link} href={"/signUp.screen"}>
          Don't have account? Click here
        </Link>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bgImage: {
    flex: 1,
  },
  link: {
    fontSize: 15,
    marginTop: 5,
  },
  logoContainer: {
    width: "100%",
    height: "25%",
  },
  logo: {
    flex: 1,
    contentFit: "contain",
  },
});

export default SignInScreen;
