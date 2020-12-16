import { connect } from 'react-redux';
import Column from './Column';
import {
  createActionAddCards,
  getCardsForColumn,
} from '../../redux/cardsRedux';

// export const getCardsForList = ({ cards }, columnId) =>
//   cards.filter((card) => card.listId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: (title) =>
    dispatch(
      createActionAddCards({
        listId: props.id,
        title,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
