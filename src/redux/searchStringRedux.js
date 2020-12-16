import shortid from 'shortid';

// selectors
export const getSearchString = (state) => state.searchString;

export const countVisibleCards = ({ cards, searchString }) =>
  cards.filter((card) => new RegExp(searchString, 'i').test(card.title)).length;

export const countAllCards = ({ cards }) => cards.length;

// action name creator
const reducerName = 'searchString';
const createActionName = (name) => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
// eslint-disable-next-line camelcase
export const createAction_changeSearchString = (payload) => ({
  payload: payload,
  id: shortid.generate(),
  type: CHANGE,
});

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return [action.payload];
    default:
      return statePart;
  }
}
