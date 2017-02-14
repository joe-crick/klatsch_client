import {combineReducers} from 'redux';
// Reducers
import authReducer from './reducers/auth-reducer';
import homeReducer from './reducers/home-reducer';

// Constants
import globalStore from './stores/global-store';

export default combineReducers({
  authStore: authReducer,
  homeStore: homeReducer,
  globalStore: globalStore
});
