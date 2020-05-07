import {CONSTANTS} from '../Actions';
export const addList = (title) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title
    };
};