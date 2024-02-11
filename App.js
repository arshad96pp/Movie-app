import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import MainNavigator from "./navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    PoppinsM: Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
      <View className="flex-1">
        <StatusBar backgroundColor={"black"} barStyle={'light-content'} />
        <MainNavigator />
      </View>
      </NavigationContainer>
    </Provider>
  );
}
