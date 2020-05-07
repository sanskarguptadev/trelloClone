import {CONSTANTS} from '../Actions';

export const deleteCard = (listId, cardId) =>{
    return {
        type: CONSTANTS.DELETE_CARD,
        payload: {listId, cardId}
    };
};