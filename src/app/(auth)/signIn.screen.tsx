/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useSignIn } from '@clerk/clerk-expo';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';
import UserForm from '@src/components/userForm/UserForm.component';
import SignButton from '@src/components/signButton/SignButton.component';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import SwitchSelector from 'react-native-switch-selector';
import { colors } from '@src/common/colors';

const SignInScreen = (): JSX.Element => {
  const router = useRouter();

  const { t, i18n } = useTranslation();
  const { signIn, setActive, isLoaded } = useSignIn();

  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const options = [
    { label: 'Es', value: 'es' },
    { label: 'En', value: 'en' },
  ];
  const indexOfLan = options.findIndex((opt) => opt.value === i18n.language);

  const onSignInPress = async () => {
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
      router.replace('/');
    } catch (err: any) {
      alert(err.errors ? err.errors[0].message : err);
    }
  };

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require('@src/assets/images/wall.jpg')}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />

        <View style={styles.switch}>
          <SwitchSelector
            accessibilityLabel="language-switch-selector"
            options={options}
            initial={indexOfLan}
            onPress={(value: string) => i18n.changeLanguage(value)}
            selectedColor={'black'}
            buttonColor={colors.mainColor}
            borderColor={'black'}
            hasPadding
          />
        </View>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('@src/assets/images/logo.png')}
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

        <SignButton title={t('sign-in')} onPress={() => void onSignInPress()} />

        <Link style={styles.link} href={'/signUp.screen'}>
          {t('create-account')}
        </Link>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bgImage: {
    flex: 1,
  },
  link: {
    fontSize: 15,
    marginTop: 5,
  },
  logoContainer: {
    width: '100%',
    height: '25%',
  },
  logo: {
    flex: 1,
    contentFit: 'contain',
  },
  switch: {
    width: '22%',
    position: 'absolute',
    top: 50,
    right: 20,
  },
});

export default SignInScreen;
