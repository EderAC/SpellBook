import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TouchableOpacity } from 'react-native-gesture-handler';
import tw from '../../../lib/tailwind.js';

import d20 from '../../images/d20.png';
import blackLogo from '../../images/dnd_logo.png';
import redLogo from '../../images/logo.png';

interface IClass {
  id: string;
  name: string;
  description: string;
  hitDice: string;
  primaryAbility: string;
}

interface IClassData {
  getPcClasses: IClass[];
}

const pcClasses = gql`
  query GetAllClasses {
    getPcClasses {
      id
      name
      hitDice
      description
      primaryAbility
    }
  }
`;

const PcClasses: React.FC = () => {
  const { loading, error, data } = useQuery<IClassData>(pcClasses);
  if (error) {
    return <Text>Error :(</Text>;
  }
  return (
    <SafeAreaView style={tw`flex`}>
      <ScrollView>
        <View style={tw`flex  items-center p-400`}>
          <Image source={redLogo} style={tw`h-130px w-130px`} />
          <Text style={tw`text-font900 text-yellow500`}>Classes</Text>
          {data &&
            data.getPcClasses.map(pcClass => (
              <View
                key={pcClass.id}
                style={tw`flex justify-center items-center p-400 bg-red200 mt-600 rounded-200 w-full`}
              >
                <TouchableOpacity>
                  <View style={tw`flex flex-row w-full items-center`}>
                    <View style={tw`flex-row items-center mr-auto`}>
                      <Image source={blackLogo} style={tw`h-500 w-500`} />
                      <Text style={tw`text-font200 text-yellow200 ml-200`}>
                        {pcClass.primaryAbility}
                      </Text>
                    </View>
                    <Text style={tw`font-bold text-font500 text-yellow400`}>
                      {pcClass.name}
                    </Text>
                    <View style={tw`flex-row items-center ml-auto`}>
                      <Image source={d20} style={tw`h-500 w-500`} />
                      <Text style={tw`text-font200 text-yellow200 ml-200`}>
                        {pcClass.hitDice}
                      </Text>
                    </View>
                  </View>

                  <Text
                    style={tw`text-font300 text-yellow200 text-justify mt-300`}
                  >
                    {pcClass.description}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PcClasses;
