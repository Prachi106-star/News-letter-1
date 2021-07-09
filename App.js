import * as React from 'react';
import {View} from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import AppHeader from "./components/AppHeader";
import JokeScreen from "./screens/JokeScreen";
import WheatherScreen from "./screens/WeatherScreen";
import HoroscopeScreen from "./screens/Horoscope.screen";
import NewsScreen from "./screens/NewsScreen";
import {createSwitchNavigator,createAppContainer} from 'react-navigation' ;

export default class App extends React.Component {
  render() {
    return (
      <View>
      <AppHeader />
       < HomeScreen />
       
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen ,
JokeScreen : JokeScreen
})
const AppContainer = createAppContainer(AppNavigator)