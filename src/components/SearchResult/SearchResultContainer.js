import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import { getCardsForSearchResults } from '../../redux/cardsRedux';
// eslint-disable-next-line camelcase
import { createAction_changeSearchString } from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props.match.params.searchString),
});
const mapDispatchToProps = (dispatch) => ({
  changeSearchString: (newSearchString) =>
    dispatch(createAction_changeSearchString(newSearchString)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
