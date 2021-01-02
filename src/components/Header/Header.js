import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

class Header extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
  };

  static defaultProps = {
    icon: settings.header.icon,
  };

  render() {
    const { icon } = settings.header;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
              <Icon name={icon} />
            </Link>
            <nav>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink exact to="/info" activeClassName="active">
                Info
              </NavLink>
              <NavLink exact to="/faq" activeClassName="active">
                FAQ
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
