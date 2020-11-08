import * as React from 'react';
import './Game.css';
import {Field} from './Field.jsx';

export class Game extends React.PureComponent {
  render() {
    return <div>
      <h1>Snake is on</h1>
      <button>Start</button>
      <Field />
      <div>
        <span>Moves: 16</span>
        <span>Score: 3</span>
      </div>
    </div>
  }
}
