import './App.css';
import React from 'react';
import data from './data.json';
import Fetcheddata from './Fetcheddata';


function App() {
  console.log(data);
  return (
    <div className="App">
      <>
      <Fetcheddata data={data}/>
      </>
    </div>
  );
  
}

export default App;
