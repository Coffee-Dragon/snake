import * as React from 'react';
import './Game.css';
import {Field} from './Field.jsx';
import {Snake} from './Snake.jsx';

export class Game extends React.PureComponent {
  state = {
    snakeSegments: [[5, 4], [4, 4]],
  };

  render() {
    return <div>
      <h1>Snake is on</h1>
      <button>Start</button>
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
