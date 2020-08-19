import React from 'react';
import { Text, EaseIn } from 'pk-ui-web';
import propTypes from 'prop-types';
import SearchBar from '../../Components/SearchBar';
import styles from './styles';
import FeatherIcons from '../../Imports/feather';
import OrionIcons from '../../Imports/orion';
import ParkITIcons from '../../Imports/parkit';
import IconsRenderer from './components/IconsRenderer';

class Icons extends React.Component {
  state = {
    icons: [...FeatherIcons, ...OrionIcons, ...ParkITIcons],
    totalAmount: [...FeatherIcons, ...OrionIcons, ...ParkITIcons].length,
    loading: false,
  }

  beginSearch = (search) => {
    if (search.length < 3) {
      return this.setState({
        icons:
        [
          ...FeatherIcons,
          ...OrionIcons,
          ...ParkITIcons,
        ],
      });
    }
    const iconList = [...FeatherIcons, ...OrionIcons, ...ParkITIcons];
    const icons = iconList
      .filter((icon) => icon.title.toLowerCase()
        .includes(search.toLowerCase()));

    this.setState({ icons, loading: true });

    if (icons.length === 0) {
      return this.setState({ loading: false });
    }
    setTimeout(() => { this.setState({ loading: false }); }, 1500);
  }

  render() {
    const { history: { push } } = this.props;
    const { icons, loading, totalAmount } = this.state;
    return (
      <EaseIn>
        <div style={styles.logo}>
          <SearchBar beginSearch={this.beginSearch} />
          <Text caption override={styles.padding}>
            {icons.length}
            {' Icons Available'}
          </Text>
        </div>
        <IconsRenderer
          icons={icons}
          push={push}
          loading={loading}
          totalAmount={totalAmount}
        />
      </EaseIn>
    );
  }
}

Icons.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
};

export default Icons;
