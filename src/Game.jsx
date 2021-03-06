import * as React from 'react';
import './Game.css';
import {Field} from './Field.jsx';
import {Snake} from './Snake.jsx';

export class Game extends React.PureComponent {
  state = {
    snakeSegments: [[5, 4], [4, 4], [3, 4], [2, 4], [1, 4]],
  };
  /** @enum {'right'|'left'|'up'|'down'} */
  direction = 'right';
  intervalID;

  nextStep() {
    const snakeSegments = [...this.state.snakeSegments];
    const snakeHead = this.state.snakeSegments[0];
    switch (this.direction) {
      case 'right':
        snakeSegments.unshift([snakeHead[0]+1, snakeHead[1]]);
        break;
      case 'left':
        snakeSegments.unshift([snakeHead[0]-1, snakeHead[1]]);
        break;
      case 'up':
        snakeSegments.unshift([snakeHead[0], snakeHead[1]-1]);
        break;
      case 'down':
        snakeSegments.unshift([snakeHead[0], snakeHead[1]+1]);
        break;
      default: // no default case in this case:)
    }

    snakeSegments.pop();
    if ((snakeSegments[0][0] > 9 || snakeSegments[0][0] < 0) || (snakeSegments[0][1] > 9 || snakeSegments[0][1] < 0)) {
      console.log('Game Over!')
    }
    for ( let i = 4; i <= snakeSegments.length - 1; i++ ) {
      if (snakeSegments[0][0] === snakeSegments[i][0] && snakeSegments[0][1] === snakeSegments[i][1]) {
        console.log('Game Over');
        break;
      }
    }
    this.setState({snakeSegments: snakeSegments});
  }
  start() {
    this.intervalID = setInterval(this.nextStep.bind(this), 1000);
  }
  onKeyPress = (event) => {
    const snakeHead = this.state.snakeSegments[0];
    const snakeSegPrev = this.state.snakeSegments[1];
    switch (event.key) {
      case 'ArrowUp':
        if (snakeSegPrev[0] !== snakeHead[0] || snakeSegPrev[1] !== snakeHead[1] - 1) {
          this.direction = 'up';
        }
        break;
      case 'ArrowDown':
        if (snakeSegPrev[0] !== snakeHead[0] || snakeSegPrev[1] !== snakeHead[1] + 1) {
          this.direction = 'down';
        }
        break;
      case 'ArrowLeft':
        if (snakeSegPrev[0] !== snakeHead[0] - 1 || snakeSegPrev[1] !== snakeHead[1]) {
          this.direction = 'left';
        }
        break;
      case 'ArrowRight':
        if (snakeSegPrev[0] !== snakeHead[0] + 1 || snakeSegPrev[1] !== snakeHead[1]) {
          this.direction = 'right';
        }
        break;
      default:

    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyPress);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    document.removeEventListener('keydown', this.onKeyPress);
  }

  render() {
    return <div>
      <h1>Snake is on</h1>
      <button onClick={this.start.bind(this)}>Start</button>
      <Field>
        <Snake segments={this.state.snakeSegments} />
      </Field>
      <div>
        <span>Moves: 16</span>
        <span>Score: 3</span>
      </div>
    </div>
  }
}
