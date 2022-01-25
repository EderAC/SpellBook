import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Characters from '../pages/Characters';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Characters" component={Characters} />
  </App.Navigator>
);

export default AppRoutes;
