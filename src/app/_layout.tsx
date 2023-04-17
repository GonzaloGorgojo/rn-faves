import { ClerkProvider } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import { PUBLISHABLE_KEY } from "@env";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={String(PUBLISHABLE_KEY)}>
      <Stack screenOptions={{ headerShown: false }} />
    </ClerkProvider>
  );
}
