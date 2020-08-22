import React from 'react';
import logo from './logo.svg';
import './App.css';
import Drawer from './drawer';
import Greet from './components/greet';
import Card from './card'; 

function App() {
 
  return (
    <React.Fragment>
     {/* <Drawer name="Sadekul" /> */}
    <Greet name="sadekul" age="26"/>
    {/* <Card /> */}
    </React.Fragment>
  );
}

export default App;
