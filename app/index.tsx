import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/rides"} />;
  }
  return <Redirect href={"/(auth)/welcom"} />;
};

export default Home;
