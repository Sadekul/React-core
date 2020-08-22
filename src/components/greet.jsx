import React, { Component } from 'react';
import Test from '../testCard';

class greet extends Component {
    state={
        username:"sadikul",
        phone: "0262739834"
    }
    render() {
        return (
            <div>
        <h1>my name is {this.props.name} and {this.props.age}</h1>
        <Test name={this.state.username} phone={this.state.phone} />

        <h2>{this.state.username}</h2>
        </div>
        );
    }
}

export default greet;