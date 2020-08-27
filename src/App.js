import React from 'react';
import logo from './logo.svg';
import './App.css';
import Drawer from './drawer';
import Greet from './components/greet';
import Card from './card'; 
import Counter from './components/counter';

function App() {
 
  return (
    <React.Fragment>
     {/* <Drawer name="Sadekul" /> */}
    <Greet name="sadekul" age="26"/>
    {/* <Card /> */}

    <Counter/>
    </React.Fragment>

  );
}

export default App;
