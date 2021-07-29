import { combineReducers } from 'redux';
import paintingsReducer from './paintings.reducers';

const rootReducer = combineReducers({
  paintings: paintingsReducer,
});

export default rootReducer;
