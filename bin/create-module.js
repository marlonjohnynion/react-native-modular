const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateSliceContent = module => {
  return `import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type State = {};

const slice = createSlice({
  name: '${module}',
  initialState: {} as State,
  reducers: {},
});

/**
 * actions exposed to be used internally (within the module)
 */
export const {} = slice.actions;
export default slice;
`;
};

const moduleIndexContent = `import slice from './slice';
import * as components from './components';
import * as containers from './containers';
import * as thunks from './thunks';

const {actions, reducer} = slice;

/**
 * The module index is responsible for maintaining its public API.
 * This is the exposed surface where modules can interface with each other.
 */
export default {components, containers, actions, reducer, thunks};
`;

const componentsDirIndexContent = "export * from './Component'";
const containersDirIndexContent = "export * from './Container'";
const thunksDirIndexContent = "export * from './thunk'";

const sampleComponentContent = `import React from 'react';
import {View} from 'react-native';

type ComponentProps = {};

export const Component: React.FC<ComponentProps> = (props) => {
  return (
    <View/>
  );
};
`;

const sampleContainerContent = `import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Component} from '../components';
import {RootState} from '../../../store';

const mapState = (state: RootState) => ({});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ContainerProps = PropsFromRedux & {};

const Wrapper: React.FC<ContainerProps> = props => {
  return <Component {...props} />;
};

export const Container = connector(Wrapper);
`;

const sampleThunkContent = `import {Dispatch} from '@reduxjs/toolkit';

export const thunk = () => {
  return async (dispatch: Dispatch) => {};
};
`;

const createModule = async () => {
  const module = await new Promise(resolve => {
    rl.question('Enter module name: ', answer => {
      answer = answer.toLowerCase();
      resolve(answer);
      rl.close();
    });
  });

  const base = `../src/Modules/${module}`;
  const directories = ['components', 'containers', 'thunks', '__tests__'];
  await Promise.all(
    directories.map(directory => {
      return fs.mkdirSync(base + '/' + directory, {recursive: true});
    })
  );
  await fs.writeFileSync(`${base}/slice.ts`, generateSliceContent(module));
  await fs.writeFileSync(`${base}/index.ts`, moduleIndexContent);
  await fs.writeFileSync(
    `${base}/components/index.ts`,
    componentsDirIndexContent
  );
  await fs.writeFileSync(
    `${base}/containers/index.ts`,
    containersDirIndexContent
  );
  await fs.writeFileSync(
    `${base}/containers/Container.tsx`,
    sampleContainerContent
  );
  await fs.writeFileSync(
    `${base}/components/Component.tsx`,
    sampleComponentContent
  );
  await fs.writeFileSync(`${base}/thunks/index.ts`, thunksDirIndexContent);
  await fs.writeFileSync(`${base}/thunks/thunk.ts`, sampleThunkContent);
  return module;
};

createModule().then(module => {
  console.log('[OK] MODULE [' + module + '] CREATED.');
});
