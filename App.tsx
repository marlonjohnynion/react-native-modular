import React from 'react';
import {store} from './src/store';
import {Provider} from 'react-redux';
import home from './src/Modules/trivia';

const {TriviaListContainer} = home.containers;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TriviaListContainer />
    </Provider>
  );
};

export default App;
