import {setTriviaList} from '../slice';
import {Dispatch} from '@reduxjs/toolkit';

export const fetchTrivia = () => {
  return async (dispatch: Dispatch) => {
    const trivia = await fetch('https://jservice.io/api/random?count=10');
    const list = await trivia.json();
    dispatch(setTriviaList(list));
  };
};
