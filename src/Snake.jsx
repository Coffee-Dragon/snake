import * as React from 'react';
import './Snake.css';

export class Snake extends React.PureComponent {
    render() {
        return <div className="snake">
            {this.props.segments.map(([x, y], i) => {
                return <div key={i} style={{
                    top: 30 * y,
                    left: 30 * x,
                }}></div>
            })}
        </div>
    }
}
