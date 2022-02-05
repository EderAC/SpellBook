import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import PcClasses from '../pages/PcClasses';
import Spells from '../pages/Spells';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#232129' },
    }}
  >
    <App.Screen name="PcClasses" component={PcClasses} />
    <App.Screen name="Spells" component={Spells} />
  </App.Navigator>
);

export default AppRoutes;
