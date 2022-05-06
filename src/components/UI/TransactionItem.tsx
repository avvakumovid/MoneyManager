import { TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Text from "../UI/Text";

interface Props {
  title: string;
  date: Date;
  summa: number;
  description: string;
  icon: string;
  size: number;
}

const TransactionItem: React.FC<Props> = ({
  date,
  description,
  summa,
  title,
  icon,
  size,
}) => {
  const color = summa < 0 ? "#FF3B30" : "#19B832";
  return (
    <TouchableOpacity
      style={{
        paddingTop: 20,
      }}
    >
      <View
        style={{
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Icon
            style={{
              backgroundColor: "#fff",
              paddingVertical: 15,
              borderRadius: 15,
              marginRight: 13,

              width: 60,
              textAlign: "center",
            }}
            name={icon}
            size={size}
            color={color}
          />
          <View
            style={{
              justifyContent: "space-around",
            }}
          >
            <Text color="#2A3785">{title}</Text>
            <Text fontSize={12} color="#2A3785">
              {date}
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-around",
          }}
        >
          <Text color="#FF3B30" textAlign="right">
            {summa}
          </Text>
          <Text fontSize={12} color="#2A3785" textAlign="right">
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
