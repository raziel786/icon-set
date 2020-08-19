import React from 'react';
import {
  EaseIn, Button, Input, Text,
} from 'pk-ui-web';
import styles from './styles';

const Submit = () => (
  <EaseIn>
    <div style={styles.container}>
      <div style={styles.child}>
        <Text subheading primaryColor>
          Drag Icon Here...
        </Text>
      </div>
      <div>
        <div style={styles.submission}>
          <Text bold primaryColor>
            Icon Name
          </Text>
          <Input />
        </div>
        <div style={styles.submission}>
          <Text bold primaryColor>
            Icon Tags
          </Text>
          <Input />
        </div>
        <Button style={styles.button}>
          Submit
        </Button>
      </div>
    </div>
  </EaseIn>
);

export default Submit;
