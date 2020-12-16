import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({ cards }, columnId) =>
  cards.filter((card) => card.columnId == columnId);

// action name creator
const reducerName = 'cards';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const ADD_CARDS = createActionName('ADD_CARDS');

// action creators
export const createActionAddCards = (payload) => ({
  payload: { ...payload, id: shortid.generate() },
  type: ADD_CARDS,
});

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARDS:
      return [...state, action.payload];
    default:
      return state;
  }
}
