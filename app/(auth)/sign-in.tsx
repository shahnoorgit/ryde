import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomBtn from "@/components/CustomBtn";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomBtn";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {};
  return (
    <ScrollView className=" flex-1 bg-white">
      <View className=" flex-1 bg-white">
        <View className="relative h-[250px] w-full">
          <Image source={images.signUpCar} className="z-0 h-[250px] w-full" />
          <Text className="absolute left-5 bottom-5 text-2xl font-JakartaBold">
            Welcome Back!
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email "
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setform({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Password "
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setform({ ...form, password: value })}
          />
          <CustomButton title="Login" onPress={handleLogin} className="mt-6" />
          <OAuth />
          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            Dont't have an account?{" "}
            <Text className="text-primary-500">Register</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
