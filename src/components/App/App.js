import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
// import { pageContents } from '../../data/dataStore';
import PropTypes from 'prop-types';
// import Creator from '../Creator/Creator';
// import { settings } from '../../data/dataStore';

class App extends React.Component {
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

  // render() {
  //   return (
  //     <main className={styles.component}>
  //       <h1 className={styles.title}>{pageContents.title}</h1>
  //       <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
  //       {/* <List {...listData} /> */}
  //       {this.state.listData.map(({ key, ...listDataProps }) => (
  //         <List key={key} {...listDataProps} />
  //       ))}

  //       <Creator
  //         text={settings.listCreatorText}
  //         action={(title) => this.addList(title)}
  //       />
  //     </main>
  //   );
  // }

  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map((listData) => (
          <List key={listData.id} {...listData} />
        ))}
        {/*
        <List {...listData} />
        */}
      </main>
    );
  }
}

export default App;
