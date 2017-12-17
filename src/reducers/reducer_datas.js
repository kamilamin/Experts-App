import { SET_DATAS } from '../constants';
// import default from './index';
const initialState = {
    datas: []
}

// export default (state = initialState, action) => {
//     switch(action.type) {
//         case SET_DATAS:
//             const { datas } = action;
//             return datas;
//         default:
//             return state;        
//     }
// }


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATAS:
            return {
                ...state,
                datas: action.payload,
            }
        default:
            return state;
    }

}