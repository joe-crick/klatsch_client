import {combineReducers} from 'redux';
// Reducers
import authReducer from './reducers/auth-reducer';
import homeReducer from './reducers/home-reducer';
import {routerReducer} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

// Constants
import globalStore from './stores/global-store';

export default combineReducers({
  authStore: authReducer,
  homeStore: homeReducer,
  globalStore: globalStore,
  routing: routerReducer,
  form: formReducer
});
