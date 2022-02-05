import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useRoute, RouteProp } from '@react-navigation/native';

import tw from '../../../lib/tailwind.js';
import redLogo from '../../images/logo.png';

interface ISpell {
  id: string;
  name: string;
  description: string;
  school: string;
  level: string;
  cast: string;
  range: string;
  component: string;
  duration: string;
  material: string;
}

interface ISpellData {
  spellByClassId: ISpell[];
}

const spells = gql`
  query GetSpellsByClassId($id: ID!) {
    spellByClassId(classId: $id) {
      id
      name
      description
      school
      level
      cast
      range
      component
      duration
      material
    }
  }
`;

const Spells: React.FC = () => {
  const [classId, setClassId] = useState<string>('');
  const [className, setClassName] = useState<string>('');

  const route = useRoute<
    RouteProp<
      {
        params:
          | { id: string | undefined; className: string | undefined }
          | undefined;
      },
      'params'
    >
  >();

  useEffect(() => {
    if (route.params?.id) {
      setClassId(route.params.id);
    }
    if (route.params?.className) {
      setClassName(route.params.className);
    }
  }, [route.params?.className, route.params?.id]);

  const { loading, error, data } = useQuery<ISpellData>(spells, {
    variables: { id: classId },
  });

  if (error) {
    return <Text style={tw`text-font900 text-red100 m-auto`}>Error :(</Text>;
  }
  if (data?.spellByClassId.length === 0) {
    return (
      <Text style={tw`text-font900 text-red100 m-auto`}>
        Essa classe não possui magias
      </Text>
    );
  }
  return (
    <SafeAreaView style={tw`flex`}>
      <ScrollView>
        <View style={tw`flex  items-center p-400`}>
          <Image source={redLogo} style={tw`h-130px w-130px`} />
          <Text style={tw`text-font800 text-yellow300`}>
            Magias de {className}
          </Text>

          {loading && (
            <ActivityIndicator size="large" color="#999" style={tw`m-auto`} />
          )}

          {data &&
            data.spellByClassId.map(spell => (
              <View
                key={spell.id}
                style={tw`flex justify-center items-center p-400 bg-gray800 mt-600 rounded-200 w-full`}
              >
                <View
                  style={tw`flex flex-row w-full items-center justify-between`}
                >
                  <View style={tw`flex flex-col items-center justify-center`}>
                    <Text
                      style={tw`text-font200 text-yellow100 ml-200 font-bold`}
                    >
                      DURAÇÃO
                    </Text>
                    <Text style={tw`text-font200 text-yellow100 ml-200`}>
                      {spell.duration}
                    </Text>
                  </View>

                  <View style={tw`flex flex-col items-center justify-center`}>
                    <Text
                      style={tw`text-font200 text-yellow100 ml-200 font-bold`}
                    >
                      LEVEL
                    </Text>
                    <Text style={tw`text-font200 text-yellow100 ml-200`}>
                      {spell.level}
                    </Text>
                  </View>

                  <View style={tw`flex flex-col items-center justify-center`}>
                    <Text
                      style={tw`text-font200 text-yellow100 ml-200 font-bold`}
                    >
                      DISTÂNCIA
                    </Text>
                    <Text style={tw`text-font200 text-yellow100 ml-200`}>
                      {spell.range}
                    </Text>
                  </View>
                </View>
                <Text style={tw`font-bold text-font500 text-yellow200 mt-200`}>
                  {spell.name}
                </Text>
                <Text
                  style={tw`text-font300 text-yellow100 text-justify mt-300 font-secondary`}
                >
                  {spell.description}
                </Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Spells;
