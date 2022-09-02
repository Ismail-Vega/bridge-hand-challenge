import notesService from 'services/notesService';
import parseError from 'utils/parseError';
import createAsyncThunk from 'utils/createAsyncThunk';

export const create = createAsyncThunk('notes/create', async (note) => {
  try {
    await notesService.create(note);
    const { data } = await notesService.list();
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const update = createAsyncThunk('notes/update', async (note) => {
  try {
    await notesService.update(note);
    const { data } = await notesService.list();
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const get = createAsyncThunk('notes/get', async (id) => {
  try {
    const { data } = await notesService.get(id);
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const list = createAsyncThunk('notes/list', async () => {
  try {
    const { data } = await notesService.list();
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const remove = createAsyncThunk('notes/remove', async (id) => {
  const response = await notesService.remove(id);
  return response.data;
});
