import {CONSTANTS} from '../Actions';

export const addCard = (listId, text) =>{
    return {
        type: CONSTANTS.ADD_CARD,
        payload: {text, listId}
    };
};