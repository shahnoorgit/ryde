import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Platform,
  Keyboard,
} from "react-native";
import React from "react";
import { InputFieldProps } from "@/types/type";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  onChangeText,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row gap-2 justify-start items-center relative bg-neutral-100 border-neutral-100 rounded-full focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={` w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              onChangeText={onChangeText}
              secureTextEntry={secureTextEntry}
              {...props}
              className={` rounded-full py-4 font-JakartaSemiBold text-[15px] text-left ${inputStyle}`}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
