import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddProductScreen from "../screen/AddProductScreen";
import Home from "../screen/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

export default TabBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "#b2498b",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-restaurant" : "ios-restaurant-outline";
          } else if (route.name === "Menu") {
            iconName = focused ? "ios-fast-food" : "ios-fast-food-outline";
          }
          return <Ionicons name={iconName} size={size} color={"#b2498b"} />;
        },
        tabBarActiveTintColor: "#b2498b",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <Tab.Screen
        name="AddProductScreen"
        component={AddProductScreen}
        options={{
          title: "Our Menu",
        }}
      />
    </Tab.Navigator>
  );
};
