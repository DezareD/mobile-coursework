import React from 'react';
import routes from '../config/routes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext from '../auth/AuthContext';

import { Colors, Typography } from '../styles';

import Home from '../screens/Home';
import Splash from '../screens/Splash';
import GetStarted from '../screens/GetStarted';


const Stack = createStackNavigator();

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
                        <Icon name="home" color={color} size={23} />
                      )
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
              </>
            : 
              <>
                <Stack.Screen name='MyTabs' component={MyTabs} />
                <Stack.Screen name={routes.Home} component={Home} />
              </>
            }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;