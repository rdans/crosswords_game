import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridBoxes from './cw/GridBoxes'
import 'semantic-ui-css/semantic.min.css'
import Home from './comp/Home'
import QuestionField from './questions/QuestionField'

function App() {
  return (
    <div >
      {/* // put navbar here */}
      <Home/>
      <GridBoxes/>
      <QuestionField/>
      {/* // put footer here  */}
    </div>
  );
}

export default App;
