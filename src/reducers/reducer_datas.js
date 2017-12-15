import { SET_DATAS } from '../constants';
// import default from './index';

export default (state = [], action) => {
    switch(action.type) {
        case SET_DATAS:
            const { datas } = action;
            return datas;
        default:
            return state;        
    }
}