import { SignedIn, SignedOut } from '@clerk/clerk-expo';
import { Redirect } from 'expo-router';
import '@src/languages/i18n';

export default function InitialScreen() {
  return (
    <>
      <SignedIn>
        <Redirect href={'/news.screen'} />
      </SignedIn>
      <SignedOut>
        <Redirect href={'/signIn.screen'} />
      </SignedOut>
    </>
  );
}
