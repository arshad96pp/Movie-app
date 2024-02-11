import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screen/SigninScreen";
import SigninOtpScreen from "../screen/SigninOtpScreen";
import CatogoryScreen from "../screen/CatogoryScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import SearchScreen from "../screen/SearchScreen";
import MyListScreen from "../screen/MyListScreen";
import ProfileScreen from "../screen/ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import MovieDetailsScreen from "../screen/MovieDetailsScreen";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
    
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F6C90E",
        tabBarItemStyle: { backgroundColor: "#191919" },
        tabBarHideOnKeyboard:true
    
      }}
    >
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <Ionicons name="home" size={20} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={20} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="myList"
        component={MyListScreen}
        options={{
          tabBarLabel: "My List",
          tabBarIcon: ({ color }) => (
            <Ionicons name="save" size={20} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu" size={20} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={SigninScreen} />
      <Stack.Screen name="loginOtp" component={SigninOtpScreen} />
      <Stack.Screen name="catogory" component={CatogoryScreen} />
      <Stack.Screen name="bottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="details" component={MovieDetailsScreen} />

    </Stack.Navigator>
  );
};

export default MainNavigator;
