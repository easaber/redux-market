import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            
            <button onClick={this.props.click}>{this.props.title}</button>
            
        );
    }
}

export default Button;
