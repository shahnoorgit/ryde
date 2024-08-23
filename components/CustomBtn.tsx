import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomBtn = ({
  title,
  onPress,
  className,
  IconLeft,
  IconRight,
  bgvarient = "primary",
  textVarient = "default",
  ...props
}) => {
  return (
    <TouchableOpacity>
      {IconLeft && <IconLeft />}
      <Text>{title}</Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default customBtn;
