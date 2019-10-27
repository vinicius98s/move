import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

import AuthLoading from './pages/AuthLoading';

const AppNavigation = createBottomTabNavigator({Home});

const AuthStack = createStackNavigator(
  {
    Login,
    SignUp,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
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
