import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import customBtn from "@/components/customBtn";

const Welcom = () => {
  const swipeRef = useRef<Swiper | null>(null);
  const [indexSwiper, setIndexSwiper] = useState(0);
  return (
    <SafeAreaView className=" justify-between items-center flex bg-white h-full">
      <TouchableOpacity
        className=" justify-end items-end w-full p-5"
        onPress={() => router.replace("/(auth)/sign-up")}
      >
        <Text className=" text-md text-black font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        onIndexChanged={(index) => setIndexSwiper(index)}
        ref={swipeRef}
        loop={false}
        dot={<View className="w-[32px] rounded-full h-4 mx-1 bg-[E2E8F0]" />}
        activeDot={
          <View className="w-[32px] rounded-full h-4 mx-1 bg-[0286FF]" />
        }
      >
        {onboarding.map((item, index) => (
          <View className=" flex justify-center p-5 items-center" key={index}>
            <Image
              className=" w-full h-[300px]"
              resizeMode="contain"
              source={item.image}
            />
            <View className="flex flex-col w-full mt-10 justify-center items-center">
              <Text className=" text-3xl font-bold mx-10 text-black text-center">
                {item.title}
              </Text>
            </View>
            <Text className=" text-lg font-JakartaSemiBold mx-10 mt-3 text-center text-[#858585]">
              {item.description}
            </Text>
            <CustomBtn title="next" />
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Welcom;
