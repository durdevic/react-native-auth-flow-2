import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

// import { HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen } from './src/screens';
import HomeScreen from './src/screens/HomeScreen';
import OtherScreen from './src/screens/OtherScreen';
import SignInScreen from './src/screens/AuthScreens/SignInScreen';
import AuthLoadingScreen from './src/screens/AuthScreens/AuthLoadingScreen';

console.disableYellowBox = true;

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(AppNavigator);