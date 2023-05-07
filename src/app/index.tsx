import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export default function InitialScreen() {
  return (
    <>
      <SignedIn>
        <Redirect href={"(home)/home.screen"} />
      </SignedIn>
      <SignedOut>
        <Redirect href={"(auth)/signIn.screen"} />
      </SignedOut>
    </>
  );
}
