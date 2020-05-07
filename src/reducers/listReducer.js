import { CONSTANTS } from '../Actions';

let listId = 4;
let cardId = 2;

const intialState = [
    {
        title: 'TODO',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'This is a card',
            },
            {
                id: 1,
                text: 'This is a another card',
            }
        ]
    },
    {
        title: 'DOING',
        id: 1,
        cards: [
            {
                id: 0,
                text: 'This is a card',
            },
            {
                id: 1,
                text: 'This is a another card',
            }
        ]
    },
    {
        title: 'DONE',
        id: 2,
        cards: [
            {
                id: 0,
                text: 'This is a card',
            },
            {
                id: 1,
                text: 'This is a another card',
            }
        ]
    },
    {
        title: 'REJECTED',
        id: 3,
        cards: [
            {
                id: 0,
                text: 'This is a card',
            },
            {
                id: 1,
                text: 'This is a another card',
            }
        ]
    },    
]

const listReducer = (state = intialState, action) => {
    switch (action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listId,
            }
            listId += 1;
            return [newList, ...state];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardId,
            }
            cardId += 1;
            
            const newState = state.map(list => {
                if(list.id === action.payload.listId){
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });
            console.log('>>>', newState);
            return newState;
        case CONSTANTS.DELETE_CARD:
            const data = [...state]
            delete data[action.payload.listId].cards[action.payload.cardId]
            return data;
            
        default:
            return state;
    }
};

export default listReducer;