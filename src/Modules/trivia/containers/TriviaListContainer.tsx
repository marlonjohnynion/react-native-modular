import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {TriviaList} from '../components';
import {RootState} from '../../../store';
import {fetchTrivia} from '../thunks';

const mapState = (state: RootState) => ({
  trivia: state.trivia.list,
});

const mapDispatch = {
  fetchTrivia,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type TriviaListContainerProps = PropsFromRedux & {
  trivia: Array<any>;
  fetchTrivia: () => Promise<void>;
};

const Wrapper: React.FC<TriviaListContainerProps> = props => {
  /** hydration, side effects will be on the container */
  React.useEffect(() => {
    props.fetchTrivia();
  }, []);
  return <TriviaList {...props} />;
};

export const TriviaListContainer = connector(Wrapper);
