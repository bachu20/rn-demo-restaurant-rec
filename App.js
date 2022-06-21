import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BusinessSearch from "./src/screens/BusinessSearch";
import Business from "./src/screens/Business";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BusinessSearch">
        <Stack.Screen name="Business Search" component={BusinessSearch} />
        <Stack.Screen name="Business" component={Business} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
