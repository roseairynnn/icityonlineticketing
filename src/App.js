import './App.css';
import React from 'react';
import data from './data.json';
import Hardcodeddata from './Hardcodeddata.js';
//import Fetcheddata from './Fetcheddata.js';


function App() {
  console.log(data);
  return (
    <div className="App">
      {/*<>
       <Fetcheddata data={data}/> 
      </>*/}

      <>
      <Hardcodeddata data={data}/>
      </>
    </div>
  );
  
}

export default App;
