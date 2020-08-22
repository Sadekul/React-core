import React from 'react';
import './App.css';

function testCard(props) {
  return (
    <div className="abc">
      <h1>{props.name}</h1>
  <h2>{props.phone}</h2>

  <h2>{props.name}</h2>
    </div>
  );
}

export default testCard;