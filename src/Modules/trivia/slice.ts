import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type State = {
  list: Array<any>;
};

const slice = createSlice({
  name: 'trivia',
  initialState: {
    list: [],
  } as State,
  reducers: {
    setTriviaList: (state: State, action: PayloadAction<Array<any>>) => {
      state.list = action.payload;
    },
  },
});

/**
 * actions exposed to be used internally (within the module)
 */
export const {setTriviaList} = slice.actions;
export default slice;
