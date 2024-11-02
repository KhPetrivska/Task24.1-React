import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  dataState: dataReducer,
});

export default rootReducer;