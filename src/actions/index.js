import { SIGNED_IN, SET_DATAS } from '../constants';

export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

// export function setDatas(datas) {
//     console.log("setdatas call", datas)
//     const action = {
//         type: SET_DATAS,
//         payload: datas
//     }
//     return action;
// }

export const setDatas = (datas) => {
    console.log("setdatas call", datas)
    return {
        type: SET_DATAS,
        payload: datas
    }
}


