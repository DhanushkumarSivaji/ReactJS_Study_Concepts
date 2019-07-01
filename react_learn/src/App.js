import React from 'react';
import ClickCounter from './HigherOrderComponents/ClickCounter'
import HoverCounter from './HigherOrderComponents/HoverCounter'
import Hero from './ErrorBoundary/Hero'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import PureCompoent from './PureComponents/ParentComp'
import MemoComponent from './MemoComponent/ParentComp'
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

      {/*Memo Component*/}
      {/* <MemoComponent/> */}

    </div>
  );
}

export default App;
