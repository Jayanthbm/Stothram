/* eslint-disable prettier/prettier */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from './src/Screens/HomeScreen';
import ShotramScreen from './src/Screens/ShotramScreen';
import BhajaneScreen from './src/Screens/BhajaneScreen';
import SettingsScreen from './src/Screens/SettingsScreen';

//Shotras
import Dashavatara from './src/Shotras/Dashavatara';
import GodaSthuti from './src/Shotras/GodaSthuti';
import GopalaVimshathi from './src/Shotras/GopalaVimshathi';
import Hayagriva from './src/Shotras/Hayagriva';
import MukundaMala from './src/Shotras/MukundaMala';
import RaghuveeraGadya from './src/Shotras/RaghuveeraGadya';
import Sudarshanastaka from './src/Shotras/Sudarshanastaka';
import Tiruppavai from './src/Shotras/Tiruppavai';
import GarudaDandakam from './src/Shotras/GarudaDandakam';

import BhajaYatirajam from './src/Bhajanes/BhajaYatirajam';
import ThugireRangana from './src/Bhajanes/ThugireRangana';
import HanumanChalisa from './src/Bhajanes/HanumanChalisa';

const switchNavigator = createSwitchNavigator({
  HomeScreen: createBottomTabNavigator({
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <Icon name="home" size={20} />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: () => (
          <Icon
            name="settings"
            size={20}
          />
        ),
      },
    },
  }),
  ShotramScreen: ShotramScreen,
  BhajaneScreen: BhajaneScreen,
  //Shotras
  Dashavatara: Dashavatara,
  GodaSthuti: GodaSthuti,
  GopalaVimshathi: GopalaVimshathi,
  Hayagriva: Hayagriva,
  MukundaMala: MukundaMala,
  RaghuveeraGadya: RaghuveeraGadya,
  Sudarshanastaka: Sudarshanastaka,
  Tiruppavai: Tiruppavai,
  GarudaDandakam: GarudaDandakam,

  //Bhajanes
  BhajaYatirajam: BhajaYatirajam,
  ThugireRangana: ThugireRangana,
  HanumanChalisa: HanumanChalisa,
});

const App = createAppContainer(switchNavigator);

export default App;
