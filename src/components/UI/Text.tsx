import { View, Text, StyleSheet, ColorValue } from "react-native";
import React, { ReactChildren, ReactChild } from "react";

interface Props {
  children?: any;
  fontSize?: number;
  color?: string;
  textAlign?: "left" | "right" | "auto" | "center" | "justify";
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
}

const MyText: React.FC<Props> = ({
  fontSize = 16,
  color = "#fff",
  textAlign = "left",
  children,
  fontWeight = "normal",
}) => {
  const style = StyleSheet.create({
    text: {
      fontSize,
      color: color,
      textAlign: textAlign,
      fontWeight: fontWeight,
    },
  });
  return <Text style={style.text}>{children}</Text>;
};

export default MyText;
