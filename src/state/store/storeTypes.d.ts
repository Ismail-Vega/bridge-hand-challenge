import { store } from './store';

export type SuitPoints = Record<string, number>;
export type SuitState = Record<string, SuitPoints>;

export interface SuitAction {
  position: string;
  suitPoints: SuitPoints;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
