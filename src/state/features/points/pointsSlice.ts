import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  RootState,
  SuitPoints,
  SuitState,
  SuitAction,
} from '../../store/storeTypes';

const defaultHand: SuitPoints = {
  SPADES: 0,
  HEARTS: 0,
  DIAMONDS: 0,
  CLUBS: 0,
};

const initialState: SuitState = {
  SOUTH: defaultHand,
  EAST: defaultHand,
  NORTH: defaultHand,
  WEST: defaultHand,
};

export const pointsSlice = createSlice({
  name: 'pointsPerSuit',
  initialState,
  reducers: {
    setPoints: (state, action: PayloadAction<SuitAction>) => {
      const { payload } = action;
      state[payload.position] = payload.suitPoints;
    },
  },
});

export const { setPoints } = pointsSlice.actions;
export const selectPoints = (state: RootState) => state.pointsPerSuit;
export default pointsSlice.reducer;
