import React, { Component } from 'react';
import { Input } from 'pk-ui-web';
import { FiSearch } from 'react-icons/fi';
import propTypes from 'prop-types';
import styles from './styles';

class SearchBar extends Component {
  render() {
    const { beginSearch } = this.props;
    return (
      <Input
        className="search-input"
        testid="global-search"
        googleId="SearchBar-Input"
        defaultValue=""
        value=""
        onChange={(e) => beginSearch(e.target.value)}
        getRef={this.setInputRef}
        style={styles.input}
        placeholder="Search for anything"
        icon={(
          <FiSearch
            style={styles.icon}
            onClick={() => beginSearch()}
          />
          )}
      />
    );
  }
}

SearchBar.propTypes = {
  beginSearch: propTypes.func.isRequired,
};

export default SearchBar;
