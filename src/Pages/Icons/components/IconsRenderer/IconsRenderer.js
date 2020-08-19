import React from 'react';
import { EaseIn, Text } from 'pk-ui-web';
import propTypes from 'prop-types';
import styles from './styles';
import Loader from '../../../../Loaders/Loader.gif';

const IconsRenderer = ({
  totalAmount, icons, push, loading,
}) => {
  if (loading) {
    return (
      <div style={styles.loader}>
        <img src={Loader} alt="loading..." />
        <Text heading primaryColor>Rendering...</Text>
      </div>
    );
  }
  return (
    <EaseIn>
      <div style={styles.container}>
        {icons.length === 0 && <Text heading primaryColor>No Icons Found</Text>}
        {icons.length > 0 && icons.length < 282 && icons.map((icon) => (
          <div>
            <div
              role="presentation"
              style={styles.child}
              onKeyDown={() => push(`/details/${icon.title}`, { name: icon.import })}
              onClick={() => push(`/details/${icon.title}`, { name: icon.import })}
            >
              <icon.src width="50px" height="50px" />
            </div>
          </div>
        ))}
        {icons.length === totalAmount && icons.slice(1, 100).map((icon) => (
          <div
            role="presentation"
            style={styles.child}
            onKeyDown={() => push(`/details/${icon.title}`, { name: icon.import })}
            onClick={() => push(`/details/${icon.title}`, { name: icon.import })}
          >
            <icon.src width="50px" height="50px" />
          </div>
        ))}
      </div>
    </EaseIn>
  );
};

IconsRenderer.propTypes = {
  totalAmount: propTypes.number.isRequired,
  icons: propTypes.instanceOf(Array).isRequired,
  push: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
};

export default IconsRenderer;
