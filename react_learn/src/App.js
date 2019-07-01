import React from 'react';
import ClickCounter from './HigherOrderComponents/ClickCounter'
import HoverCounter from './HigherOrderComponents/HoverCounter'
import Hero from './ErrorBoundary/Hero'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import PureCompoent from './PureComponents/ParentComp'
import './App.css';

function App() {
  return (
    <div className="App">
      {/*HOC*/}

      {/* <ClickCounter name={"Dhanush"}/>
      <HoverCounter name={"Dharma"}/> */}

      {/*Error Boundary*/}

      {/* <ErrorBoundary>
      <Hero heroName="Dhanush"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Dharma"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"/>
      </ErrorBoundary> */}

      {/*Pure Component*/}
      {/* <PureCompoent/> */}

    </div>
  );
}

export default App;
