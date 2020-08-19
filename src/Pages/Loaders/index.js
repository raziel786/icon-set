import React from 'react';
import { Button, EaseIn } from 'pk-ui-web';
import Loader1 from '../../Loaders/1.gif';
import Loader2 from '../../Loaders/2.gif';
import Loader3 from '../../Loaders/3.gif';
import Loader4 from '../../Loaders/4.gif';
import styles from './styles';

class Loaders extends React.Component {
  state = {
    selected: 1,
  }

  render() {
    const { selected } = this.state;
    let icon = Loader1;
    switch (selected) {
      case 1:
        icon = Loader1;
        break;
      case 2:
        icon = Loader2;
        break;
      case 3:
        icon = Loader3;
        break;
      case 4:
        icon = Loader4;
        break;
      default:
        icon = Loader1;
        break;
    }
    return (
      <EaseIn>
        <div style={styles.container}>
          <div style={styles.padding}>
            <img
              width={400}
              src={icon}
              alt="loader"
            />
          </div>
          <div style={styles.flex}>
            <Button onClick={() => this.setState({ selected: 1 })}>
              Suitcase
            </Button>
            <Button onClick={() => this.setState({ selected: 2 })}>
              Aeroplane
            </Button>
            <Button onClick={() => this.setState({ selected: 3 })}>
              Cup
            </Button>
            <Button onClick={() => this.setState({ selected: 4 })}>
              Handshake
            </Button>
          </div>
        </div>
      </EaseIn>
    );
  }
}


export default Loaders;
