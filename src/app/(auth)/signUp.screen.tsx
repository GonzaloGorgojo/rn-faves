import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SignButton from "@src/components/signButton/SignButton.component";
import UserForm from "@src/components/userForm/UserForm.component";
import { Image } from "expo-image";
import UserFormStyle from "@src/components/userForm/userForm.style";
import { useRouter } from "expo-router";

const SignUpScreen = (): JSX.Element => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [username, setUsername] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pendingVerification, setPendingVerification] =
    useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const router = useRouter();

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      alert(err.errors ? err.errors[0].message : err);
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
      alert("Account has been created successfully");
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
        {!pendingVerification && (
          <>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("@src/assets/images/logo.png")}
              ></Image>
            </View>
            <UserForm
              isUsername={true}
              username={username}
              setUsername={setUsername}
              emailAddress={emailAddress}
              password={password}
              setEmailAddress={setEmailAddress}
              setPassword={setPassword}
            />

            <SignButton title="Sign up" onPress={onSignUpPress} />
          </>
        )}
        {pendingVerification && (
          <>
            <Text style={styles.codeTitle}>
              We have send you an email with the code{"\n"} to verify your
              email.
            </Text>
            <TextInput
              style={{ ...UserFormStyle.input, width: "40%" }}
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
            />
            <SignButton title="Verify Email" onPress={onPressVerify} />
          </>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
  },
  logoContainer: {
    width: "85%",
    height: 70,
  },
  logo: {
    flex: 1,
    contentFit: "contain",
  },
  codeTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default SignUpScreen;
