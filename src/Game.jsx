import * as React from 'react';
import './Game.css';
import {Field} from './Field.jsx';
import {Snake} from './Snake.jsx';

export class Game extends React.PureComponent {
  state = {
    snakeSegments: [[5, 4], [4, 4]],
  };
  /** @enum {'right'|'left'|'up'|'down'} */
  direction = 'right';
  intervalID;
  nextStep() {
    let snakeSegments = [...this.state.snakeSegments];
    snakeSegments.unshift([this.state.snakeSegments[0][0]+1, this.state.snakeSegments[0][1]]);
    snakeSegments.pop();
    this.setState({snakeSegments: snakeSegments});
  }
  start() {
    this.intervalID = setInterval(this.nextStep.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
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
