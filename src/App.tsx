import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Routes from './routes';

const client = new ApolloClient({
  uri: 'http://192.168.100.16:3333/graphql',
  cache: new InMemoryCache(),
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#D1BDAB" />
      <View style={{ flex: 1, backgroundColor: '#D1BDAB' }}>
        <Routes />
      </View>
    </NavigationContainer>
  </ApolloProvider>
);

export default App;
