import { Reducer } from 'redux';
import { suitActions } from '../actions';
import { SuitPoints, SuitAction } from '../store/storeTypes';

const initialState: SuitPoints = {
  spades: 0,
  hearts: 0,
  diamonds: 0,
  clubs: 0,
};

const pointsReducer: Reducer<SuitPoints> = (
  state = initialState,
  action: SuitAction
) => {
  const { type, payload } = action;

  switch (type) {
    case suitActions.SUITS_POINTS_UPDATE:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default pointsReducer;
