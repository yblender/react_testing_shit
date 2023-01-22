import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';

function App(props : any) {
  var myName = "poopy"
  const [selectedMenu, setCount] = useState("");
    function HandleMenuClick(e : any, ele : any){
        console.log(e);
        setCount(ele);
    }
    if(selectedMenu == "Test1"){
      return(
        
        <div>Fuck yeah
          <button onClick={(e) => HandleMenuClick(e, "")}>Back</button>
        </div>
      );
    }
    return (
      
      <div className="App">
         <div>
        <a className='Menu-Item' onClick={(e) => HandleMenuClick(e, "Test1")}>test 1</a>|
        <a className='Menu-Item' onClick={(e) => HandleMenuClick(e, "Test2")}>test 2</a>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Edit <code>src/App.tsx</code> and {myName}.
          </h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  
}

export default App;
