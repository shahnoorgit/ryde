import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="welcom" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
    </Stack>
  );
}
