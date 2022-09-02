import { createSlice } from '@reduxjs/toolkit';
import { update, list, remove, create } from 'state/actions/notesActions';

const initialState = {
  results: [],
  size: 0,
  total: 0,
};

const updateState = (state, { payload }) => {
  state.results = payload?.results;
  state.size = payload?.size;
  state.total = payload?.total;
};

const sessionSlice = createSlice({
  name: 'notes',
  initialState,
  extraReducers: {
    [update.fulfilled]: updateState,
    [list.fulfilled]: updateState,
    [remove.fulfilled]: updateState,
    [create.fulfilled]: updateState,
  },
});

export default sessionSlice.reducer;
