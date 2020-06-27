import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const MainStack = createStackNavigator();
import trivia from '../../trivia';

const {TriviaListContainer} = trivia.containers;

export const MainStackScreenContainer: React.FC = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Trivia" component={TriviaListContainer} />
    </MainStack.Navigator>
  );
};
