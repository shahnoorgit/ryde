import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";

const SignUp = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <ScrollView className=" flex-1 bg-white">
      <View className=" flex-1 bg-white">
        <View className="relative h-[250px] w-full">
          <Image source={images.signUpCar} className="z-0 h-[250px] w-full" />
          <Text className="absolute left-5 bottom-5 text-2xl font-JakartaBold">
            Create Your Account
          </Text>
        </View>
        <View className=" p-5">
          <InputField
            placeholder="Enter your Name"
            value={form.name}
            icon={icons.person}
            onchangeText={(value) => setform({ ...form, name: value })}
            label="Name"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
