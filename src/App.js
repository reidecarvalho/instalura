import React from 'react';
import TimelineHeader from './componentes/TimelineHeader';
import Timeline from './componentes/Timeline';

function App() {
  return (
    <div id="root">
      <div className="main">
        <TimelineHeader />
        <Timeline />
      </div> 
    </div> 
  );
}

export default App;
