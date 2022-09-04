import { configureStore } from '@reduxjs/toolkit';
import pointsReducer from '../features/points/pointsSlice';

export const store = configureStore({
  reducer: { pointsPerSuit: pointsReducer },
  devTools: process.env.NODE_ENV !== 'production',
});
