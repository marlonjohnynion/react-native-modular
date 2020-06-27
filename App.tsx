import React from 'react';
import {store} from './src/store';
import {Provider} from 'react-redux';
import navigation from './src/Modules/navigation';

const {Navigation} = navigation.containers;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
