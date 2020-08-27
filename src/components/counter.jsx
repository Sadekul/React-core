import React, { Component } from 'react';
class counter extends Component {
    state = { 
        count: 0
     }
     increment=()=>{
         let x=this.state.count+1;
         this.setState({count:x});

     }
     decrement=()=>{
        let x=this.state.count-1;
        this.setState({count:x});

    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
        <button disabled={this.state.count<10?false:true} onClick={this.increment}>Increment</button>
        <button disabled={this.state.count<=0?true:false} onClick={this.decrement}>decrement</button>
            </div>
        );
    }
}

export default counter;