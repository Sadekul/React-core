import React, { Component } from 'react';
class FunctionClick extends Component {
     name =(params) =>{
        console.log(params);
    }
    render() {
        return (
            <button onClick={()=>{this.name("sadekul")}}>Click</button>
        );
    }
}

export default FunctionClick;