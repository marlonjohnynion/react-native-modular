import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackScreenContainer} from './MainStackScreenContainer';

const RootStack = createStackNavigator();

/** You may add modal screens below the MainStackScreenContainer */
const RootStackScreen: React.FC = () => {
  return (
    <RootStack.Navigator mode={'modal'}>
      <RootStack.Screen
        name={'Main'}
        component={MainStackScreenContainer}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export const RootStackScreenContainer = RootStackScreen;
