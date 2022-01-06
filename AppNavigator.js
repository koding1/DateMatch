import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartScreen from './StartScreen';
import SecondScreen from './SecondScreen';
 
 
const AppNavigator = createStackNavigator({
  StartScreen: { screen: StartScreen },
  SecondScreen: { screen: SecondScreen }
});
 
export default createAppContainer(AppNavigator, {
  initialRouteName: 'StartScreen',
});
 