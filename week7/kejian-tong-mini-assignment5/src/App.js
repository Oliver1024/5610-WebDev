import './index.css';
import React from 'react'
import Board from './components/Board'

function App() {
  return (
    <React.Fragment>
      <div className="page-wrapper">
        <div className="box-wrapper">
          <Board />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
