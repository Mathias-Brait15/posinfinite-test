import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import DetailScreen from "./screen/DetailScreen";
import HomeScreen from "./screen/HomeScreen";
import InvoiceScreen from "./screen/InvoiceScreen";
import AddProductScreen from "./screen/AddProductScreen";
import LoginScreen from "./screen/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomePage"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailPage"
            component={DetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InvoicePage"
            component={InvoiceScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddPage"
            component={AddProductScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
