import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CreatTransactionModal from "./src/components/UI/CreatTransactionModal";
import store, { persistor } from "./src/redux/store";
import Main from "./src/screens/Main";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider style={styles.container}>
          {/* <Main /> */}
          <CreatTransactionModal />
          <StatusBar style="light" />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A3785",
    alignItems: "center",
    justifyContent: "center",
  },
});
