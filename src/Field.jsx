import * as React from 'react';
import './Field.css';

export class Field extends React.PureComponent {
    renderCells() {
        const cells = [];
        for (let i = 0; i < 100; i++) {
            cells.push(<div key={i} className="field__cell" />); 
        }
        return cells;
    }

    render() {
        return <div className="field">
            {this.renderCells()}
            {this.props.children}
        </div>
    }

    
}