/* eslint-disable react/no-unused-state */
import React from 'react';
import { Button, Text } from 'pk-ui-web';
import Typing from 'react-typing-animation';
import propTypes from 'prop-types';
import styles from './styles';

class Header extends React.Component {
  state = { path: '' }

  onPress = (path) => {
    const { history: { push } } = this.props;
    this.setState({ path });
    push(path);
  }

  render() {
    const { history: { location: { pathname } } } = this.props;
    return (
      <div style={styles.icon}>
        <Text bold headline primaryColor override={styles.text}>
          <Typing speed={150}>
            [Park IT Iconix]
          </Typing>
        </Text>
        <div style={styles.container}>
          <Button
            onClick={() => this.onPress('/')}
            secondary={pathname !== '/'}
          >
            ICONS
          </Button>
          <Button
            onClick={() => this.onPress('/loaders')}
            secondary={pathname !== '/loaders'}
          >
            LOADERS
          </Button>
          <Button
            onClick={() => this.onPress('/theme')}
            secondary={pathname !== '/theme'}
          >
            THEME
          </Button>
          <Button
            onClick={() => this.onPress('/create')}
            secondary={pathname !== '/create'}
          >
            CREATE
          </Button>
          <Button
            onClick={() => this.onPress('/submit')}
            secondary={pathname !== '/submit'}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.string,
    }),
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default (Header);
