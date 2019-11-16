import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-eva-icons';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';
import FirstLogin from './pages/FirstLogin';
import Menu from './pages/Menu';
import AuthLoading from './pages/AuthLoading';

import theme from './assets/theme';

const AppNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home-outline" fill={tintColor} width="24" height="24" />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="person-outline" fill={tintColor} width="24" height="24" />
        ),
      },
    },
    Wallet: {
      screen: Wallet,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="credit-card-outline"
            fill={tintColor}
            width="24"
            height="24"
          />
        ),
      },
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="keypad" fill={tintColor} width="24" height="24" />
        ),
        tabBarVisible: false,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: theme.colors.green,
      showLabel: false,
      style: {
        backgroundColor: theme.colors.darkBlue,
        height: 60,
      },
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Login,
    SignUp,
    FirstLogin,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      App: AppNavigation,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
