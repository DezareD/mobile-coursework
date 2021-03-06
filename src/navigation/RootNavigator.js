import React from 'react';
import routes from '../config/routes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AuthContext from '../auth/AuthContext';

import { Text } from 'react-native';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faSync, faGift, faCogs } from "@fortawesome/free-solid-svg-icons";

import { Colors, Typography } from '../styles';

import Home from '../screens/Home';
import Splash from '../screens/Splash';
import GetStarted from '../screens/GetStarted';
import Login from '../screens/Login';
import Transactions from '../screens/Transaction/index';
import AddTransaction from '../screens/Transaction/add-transaction'

import MoneyBox from '../screens/MoneyBox';
import Settings from '../screens/Settings';
import Notifications from '../screens/Notifications';
import AddMoneyBox from '../screens/AddMoneyBox';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
          initialRouteName={routes.Home}
          activeColor={Colors.WHITE}
          inactiveColor={Colors.GRAY_DARK}
          barStyle={[Typography.BODY, { backgroundColor: Colors.BLACK, borderTopWidth: 0.3 }]}>
              <Tab.Screen 
                  name={routes.Home} 
                  component={Home}
                  options={{
                      tabBarLabel: <Text style={[Typography.TAGLINE, {color: Colors.WHITE}]}>{routes.Home}</Text>,
                      tabBarIcon: ({ color }) => (
                        <FontAwesomeIcon icon={faHome} padding={12} style={{ color: color }} />
                      )
                  }} />
                  <Tab.Screen 
                name={routes.Transactions} 
                component={Transactions}
                options={{
                    tabBarLabel: <Text style={[Typography.TAGLINE, {color: Colors.WHITE}]}>{routes.Transactions}</Text>,
                    tabBarIcon: ({ color }) => (
                      <FontAwesomeIcon icon={faSync} padding={12} style={{ color: color }} />
                    ),
                }} />
                <Tab.Screen 
                    name={routes.MoneyBox} 
                    component={MoneyBox}
                    options={{
                        tabBarLabel: <Text style={[Typography.TAGLINE, {color: Colors.WHITE}]}>{routes.MoneyBox}</Text>,
                        tabBarIcon: ({ color }) => (
                          <FontAwesomeIcon icon={faGift} padding={12} style={{ color: color }} />
                        ),
                    }} />
            <Tab.Screen 
                name={routes.Settings} 
                component={Settings}
                options={{
                    tabBarLabel: <Text style={[Typography.TAGLINE, {color: Colors.WHITE}]}>{routes.Settings}</Text>,
                    tabBarIcon: ({ color }) => (
                      <FontAwesomeIcon icon={faCogs} padding={12} style={{ color: color }} />
                    ),
                }} />
      </Tab.Navigator>
    );
  }

const RootNavigator = () => {
    const {state} = React.useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false,
            }}>
               {state.isLoading ?
              <Stack.Screen name={routes.Splash} component={Splash} />
            : state.user == null ? 
              <>
                <Stack.Screen name={routes.GetStarted} component={GetStarted} />
                <Stack.Screen name={routes.Login} component={Login} />
              </>
            : 
              <>
                <Stack.Screen name='MyTabs' component={MyTabs} />
                <Stack.Screen name={routes.Notifications} component={Notifications} />
                <Stack.Screen name={routes.Home} component={Home} />
                <Stack.Screen name={routes.AddTransaction} component={AddTransaction} />
                <Stack.Screen name={routes.AddMoneyBox} component={AddMoneyBox} />
              </>
            }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;