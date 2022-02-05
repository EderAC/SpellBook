import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Routes from './routes';

const client = new ApolloClient({
  uri: 'https://tomednd5e.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#232129" />
      <View style={{ flex: 1, backgroundColor: '#232129' }}>
        <Routes />
      </View>
    </NavigationContainer>
  </ApolloProvider>
);

export default App;
