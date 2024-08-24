import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomBtn";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleAuth = () => {
    // Simulate OAuth authentication with Google
    console.log("Google OAuth authentication triggered");
  };
  return (
    <View>
      <View className=" flex flex-row  mt-4 gap-x-3 justify-center w-full items-center">
        <View className="bg-general-100 flex-1 h-[1px] " />
        <Text>Or</Text>
        <View className="bg-general-100 flex-1 h-[1px]" />
      </View>
      <CustomButton
        title="Login With Google"
        className=" w-full shadow-none mt-5"
        bgVariant="outline"
        onPress={handleGoogleAuth}
        textVariant="primary"
        IconLeft={() => (
          <Image
            resizeMode="contain"
            className=" w-6 h-6 mx-2"
            source={icons.google}
          />
        )}
      />
    </View>
  );
};

export default OAuth;
