import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/Listlink.js';
import PropTypes from 'prop-types';

class Home extends React.Component {
  state = {
    listData: this.props.listData || [],
  };

  static propTypes = {
    lists: PropTypes.array,
    defaultImage: PropTypes.string,
    image: PropTypes.string,
    listData: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
  };

  addList(title) {
    this.setState((state) => ({
      listData: [
        ...state.listData,
        {
          key: state.listData.length
            ? state.listDate[state.listData.length - 1].key + 1
            : 0,
          title,
          description: [],
          image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
          colums: [],
        },
      ],
    }));
  }
  render() {
    const { title, subtitle, lists } = this.props;

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        {lists.map((listData) => (
          <ListLink key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default Home;
