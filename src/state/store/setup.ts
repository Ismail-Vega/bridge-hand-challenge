import reduxThunk from 'redux-thunk';
import storeReducers from '../reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function setupStore() {
  return createStore(
    storeReducers,
    composeWithDevTools(applyMiddleware(reduxThunk))
  );
}
