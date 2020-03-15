import { combineReducers } from 'redux';
import authReducer from './auth-reducer';

const rootReducer = combineReducers({
    authReducer,
});

export default rootReducer;
