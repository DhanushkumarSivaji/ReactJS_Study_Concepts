import React from 'react';
import ClickCounter from './HigherOrderComponents/ClickCounter'
import HoverCounter from './HigherOrderComponents/HoverCounter'
import './App.css';

function App() {
  return (
    <div className="App">
     <ClickCounter name={"Dhanush"}/>
     <HoverCounter name={"Dharma"}/>
    </div>
  );
}

export default App;
