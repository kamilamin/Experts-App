import { combineReducers } from 'redux';
import user from './reducer_user';
import datas from './reducer_datas';

export default combineReducers({
    user,
    datas
});

