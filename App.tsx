import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";

import store, { persistor } from "./src/redux/store";
import Navigator from "./src/config/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
          <StatusBar style="light" />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
