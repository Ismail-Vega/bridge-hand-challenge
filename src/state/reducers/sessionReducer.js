import { createSlice } from '@reduxjs/toolkit';
import {
  loginFulfilled,
  logout,
  updateSession,
  registerFulfilled,
} from 'state/actions/userActions';

const initialState = {
  authenticated: false,
  user: null,
  info: {},
};

const fulfilledReducer = (state, { payload }) => {
  state.user = payload;
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [loginFulfilled]: fulfilledReducer,
    [registerFulfilled]: fulfilledReducer,
    [logout]: () => initialState,
    [updateSession]: (state, { payload }) => {
      state.info = payload;
      state.authenticated = true;
    },
  },
});

export default sessionSlice.reducer;
