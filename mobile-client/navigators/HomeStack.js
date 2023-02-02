import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./Tab";
import Home from "../screen/HomeScreen";
import DetailScreen from "../screen/DetailScreen";
import InvoiceScreen from "../screen/InvoiceScreen";

const Stack = createNativeStackNavigator();

export default HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TabBottom"
          component={Tab}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Invoice"
          component={InvoiceScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
