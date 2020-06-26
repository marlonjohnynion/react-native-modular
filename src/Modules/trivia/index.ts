import slice from './slice';
import * as components from './components';
import * as containers from './containers';
import * as thunks from './thunks';

const {actions, reducer} = slice;

/**
 * The module index is responsible for maintaining its public API.
 * This is the exposed surface where modules can interface with each other.
 */
export default {components, containers, actions, reducer, thunks};
