import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Text, View } from 'react-native';
import tw from '../../../lib/tailwind.js';

interface IClass {
  id: string;
  name: string;
  description: string;
  hitDice: string;
  primaryAbility: string;
}

interface IClassData {
  pcClass: IClass;
}

const bard = gql`
  query GetClassById {
    pcClass(id: "437fbeea-d481-4333-8b5a-471f8d0005fc") {
      name
      hitDice
      description
      primaryAbility
    }
  }
`;

const Characters: React.FC = () => {
  const { loading, error, data } = useQuery<IClassData>(bard);
  if (error) {
    return <Text>Error :(</Text>;
  }
  return (
    <View>
      <Text>Classe Bardo</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text style={tw`text-font700 text-primary500`}>Dados</Text>
          {data && <Text>{data.pcClass.description}</Text>}
        </>
      )}
    </View>
  );
};

export default Characters;
