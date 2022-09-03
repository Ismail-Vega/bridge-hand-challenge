import { ActionCreator } from 'redux';
import { SuitAction } from '../store/storeTypes';

export const SUITS_POINTS_UPDATE = 'SUIT_POINTS/UPDATE';

export const updateSuitPoints: ActionCreator<SuitAction> = (
  suit: string,
  points: number
) => ({
  type: SUITS_POINTS_UPDATE,
  payload: {
    [suit]: points,
  },
});
