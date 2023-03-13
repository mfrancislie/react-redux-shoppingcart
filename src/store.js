import {
  applyMiddleware,
  compose,
  combineReducers,
  legacy_createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducer/productReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  combineReducers({
    products: productsReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
