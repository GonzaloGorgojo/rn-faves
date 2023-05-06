import { ClerkProvider } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import { CLERK_PUBLISHABLE_KEY } from "@env";
import * as SecureStore from "expo-secure-store";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={String(CLERK_PUBLISHABLE_KEY)}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </ClerkProvider>
  );
}
