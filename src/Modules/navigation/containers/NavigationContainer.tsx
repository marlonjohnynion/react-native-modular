import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackScreenContainer} from './RootStackScreenContainer';

const Wrapper: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStackScreenContainer />
    </NavigationContainer>
  );
};

export const Navigation = Wrapper;
