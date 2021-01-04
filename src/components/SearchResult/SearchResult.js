import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import styles from './SearchResult.scss';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { title, icon, cards } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
            {title}
          </h3>
          <div>
            {cards.map((cardData) => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;
