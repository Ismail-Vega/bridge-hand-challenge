import { Action } from 'redux';

export type SuitPoints = Record<string, number>;

export interface SuitAction extends Action {
  type: string;
  payload?: SuitPoints;
}

export type SuitPointsDispatch = (args: SuitAction) => SuitAction;
