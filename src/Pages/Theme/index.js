import React from 'react';
import { Button, EaseIn } from 'pk-ui-web';
import SVG1 from './components/1.svg';
import SVG2 from './components/2.svg';
import SVG3 from './components/3.svg';
import SVG4 from './components/4.svg';
import styles from './styles';

class Theme extends React.Component {
  state = {
    selected: 1,
  }

  render() {
    const { selected } = this.state;
    let icon = SVG1;
    switch (selected) {
      case 1:
        icon = SVG1;
        break;
      case 2:
        icon = SVG2;
        break;
      case 3:
        icon = SVG3;
        break;
      case 4:
        icon = SVG4;
        break;
      default:
        icon = SVG1;
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
              Line
            </Button>
            <Button onClick={() => this.setState({ selected: 2 })}>
              Solid
            </Button>
            <Button onClick={() => this.setState({ selected: 3 })}>
              Coloured
            </Button>
            <Button onClick={() => this.setState({ selected: 4 })}>
              Flat
            </Button>
          </div>
        </div>
      </EaseIn>
    );
  }
}


export default Theme;
