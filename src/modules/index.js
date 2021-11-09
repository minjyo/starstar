import { combineReducers } from 'redux';
// import { all } from 'redux-saga/effects';
import loading from './loading';

const rootReducer = combineReducers({
  // meeting,
  loading,
});

export function* rootSaga() {
  // yield all([meetingSaga()]);
}

export default rootReducer;
