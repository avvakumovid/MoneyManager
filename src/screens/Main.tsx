import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { CSSProperties, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "./../components/UI/Text";
import { useTypedSelector } from "./../hooks/useTypedSelector";
import { useAction } from "../hooks/useAction";

let width;
if (Platform.OS === "web") {
  width = 900;
} else {
  width = "100%";
}

const { height } = Dimensions.get("screen");

const Main: React.FC = () => {
  let { totalMoney } = useTypedSelector(state => state.main);
  let { expensesCategories, incomeCategories } = useTypedSelector(
    state => state.categories
  );

  let c = expensesCategories[0];

  let { createTransaction } = useAction();
  useEffect(() => {
    createTransaction;
  });
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: height * 0.3,
          width: "100%",
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            paddingLeft: 20,
          }}
        >
          <Text>Hello</Text>
          <Text fontWeight="bold" fontSize={18}>
            Oneayvan
          </Text>
        </View>
        <View>
          <Text textAlign="center">Balance</Text>
          <Text fontSize={24} color="white" textAlign="center">
            $ {totalMoney} {c.name}
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => alert("ff")}
          >
            <Icon
              style={styles.btn}
              name="paper-plane"
              size={25}
              color="#2A3785"
            />
            <Text fontSize={12}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => alert("ff")}
          >
            <Icon style={styles.btn} name="star-o" size={25} color="#2A3785" />
            <Text fontSize={12}>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => alert("ff")}
          >
            <Icon style={styles.btn} name="money" size={25} color="#2A3785" />
            <Text fontSize={12}>Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => alert("ff")}
          >
            <Icon
              style={styles.btn}
              name="ellipsis-h"
              size={25}
              color="#2A3785"
            />
            <Text fontSize={12}>More</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: height * 0.7,
          justifyContent: "space-around",
          alignItems: "flex-start",
          backgroundColor: "#F8FBFF",
          width: "100%",
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          paddingTop: 30,
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <Text fontWeight="bold" color="#4A6884">
            Last Transaction
          </Text>
          <Text fontSize={14} fontWeight="400" color="#2A3785">
            See All
          </Text>
        </View>
        <ScrollView
          style={{
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
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
                    backgroundColor: "lightblue",
                    paddingVertical: 15,
                    borderRadius: 15,
                    marginRight: 13,

                    width: 60,
                    textAlign: "center",
                  }}
                  name="cc-paypal"
                  size={25}
                  color="#2A3785"
                />
                <View
                  style={{
                    justifyContent: "space-around",
                  }}
                >
                  <Text color="#2A3785">Paypal</Text>
                  <Text fontSize={12} color="#2A3785">
                    2 March
                  </Text>
                </View>
              </View>

              <View
                style={{
                  justifyContent: "space-around",
                }}
              >
                <Text color="#FF3B30" textAlign="right">
                  -126$
                </Text>
                <Text fontSize={12} color="#2A3785" textAlign="right">
                  Transfer
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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
                    backgroundColor: "#ccc",
                    paddingVertical: 15,
                    borderRadius: 15,
                    marginRight: 13,
                    width: 60,
                    textAlign: "center",
                  }}
                  name="cc-visa"
                  size={25}
                  color="#2A3785"
                />
                <View
                  style={{
                    justifyContent: "space-around",
                  }}
                >
                  <Text color="#2A3785">Paypal</Text>
                  <Text fontSize={12} color="#2A3785">
                    5 March
                  </Text>
                </View>
              </View>

              <View
                style={{
                  justifyContent: "space-around",
                }}
              >
                <Text color="#19B832" textAlign="right">
                  +33.33$
                </Text>
                <Text fontSize={12} color="#2A3785" textAlign="right">
                  Bank Transfer
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#2A3785",
    paddingTop: 10,
    maxWidth: width,
    width: "100%",
    height: "100%",
    paddingBottom: 0,
  },
  btn: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 5,
    width: 60,
    textAlign: "center",
  },
  buttons: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  btnContainer: {
    alignItems: "center",
  },
  transaction: {
    flexDirection: "row",
  },
  transactions: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    backgroundColor: "#F8FBFF",
    width: "100%",
    height: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 25,
    paddingVertical: 45,
  },
});

export default Main;
