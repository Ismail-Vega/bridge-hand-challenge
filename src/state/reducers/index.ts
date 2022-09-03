import { combineReducers } from 'redux';
import pointsReducer from './pointsReducer';
import { SuitPoints } from '../store/storeTypes';

interface ApplicationState {
  pointsPerSuit: SuitPoints;
}

export default combineReducers<ApplicationState>({
  pointsPerSuit: pointsReducer,
});
