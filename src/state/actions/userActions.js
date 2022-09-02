import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import userService from 'services/userService';
import parseError from 'utils/parseError';

export const login = createAsyncThunk('user/login', async (userInput) => {
  try {
    const { data } = await userService.login(userInput);
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const register = createAsyncThunk('user/register', async (userInput) => {
  try {
    const { data } = await userService.register(userInput);
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const updateSession = createAction('session/update');
export const logout = createAction('user/logout');

export const { fulfilled: loginFulfilled, rejected: loginRejected } = login;
export const { fulfilled: registerFulfilled, rejected: registerRejected } = register;
