import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import HomeScreen from "./(home)/home";
import SignInScreen from "./(auth)/signIn";
import { PUBLISHABLE_KEY } from "@env";
import SignUpScreen from "./(auth)/signUp";

export default function InitialScreen() {
  return (
    <ClerkProvider publishableKey={String(PUBLISHABLE_KEY)}>
      <SignedIn>
        <HomeScreen />
      </SignedIn>
      <SignedOut>
        <SignInScreen />
        <SignUpScreen />
      </SignedOut>
    </ClerkProvider>
  );
}
