// Root layout for app
// Header hidden for a clean, fullscreen UI

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    />
  );
}
