import React from 'react';
import { EaseIn, Text } from 'pk-ui-web';
import propTypes from 'prop-types';
import FeatherIcons from '../../Imports/feather';
import OrionIcons from '../../Imports/orion';
import ParkITIcons from '../../Imports/parkit';
import styles from './styles';

const Details = ({ location: { state: { name } } }) => {
  const icons = [
    ...FeatherIcons,
    ...OrionIcons,
    ...ParkITIcons,
  ];
  const icon = icons.find((el) => el.import === name);
  return (
    <EaseIn>
      <div style={styles.container}>
        <div>
          <Text headline primaryColor>
            {icon.title.replace(/([A-Z])/g, ' $1').trim()}
          </Text>
          <Text override={styles.padding}>
            {'Created By '}
            <Text override={styles.inline} bold primaryColor>
              {icon.author}
            </Text>
          </Text>
          <Text override={styles.padding}>
            {'Icon Import Name '}
            <Text override={styles.inline} bold primaryColor>
              {icon.import}
            </Text>
          </Text>
          <Text>
            Tags
          </Text>
          <div styles={styles.padding}>
            <Text primaryColor caption>
              {icon.tags}
            </Text>
          </div>
          <Text override={styles.top}>
            Embed
          </Text>
          <div style={styles.box}>
            <Text bold primaryColor>
              import
              {' { '}
              {icon.import}
              {' } '}
              from pk-ui-icons;
            </Text>
          </div>
        </div>
        <div style={styles.iconContainer}>
          <div style={styles.icon}>
            <icon.src width="200px" height="200px" />
          </div>
        </div>
      </div>

    </EaseIn>
  );
};

Details.propTypes = {
  name: propTypes.string.isRequired,
  location: propTypes.shape({
    state: propTypes.shape({}),
  }).isRequired,
};

export default Details;
