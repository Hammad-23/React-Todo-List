import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const list=['civic','corolla','swift','mira','honda']
const cars = [{
  name: 'civic', model : '2012'},
  {name: 'corolla', model : '2012'},
  {name: 'swift', model : '2012'
  
}]

function App() {
  const [show,setShow] = useState(false)
  const enter = function(){
    alert('Hello world.')
    setShow(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <input type={Text} placeholder={'enter your name'}/>
        <button onClick={enter}>Enter</button>
      <br></br>
      <ul>
       {list.map(function(item){
         return <li>{item}</li>
        })}
      </ul>
      <br></br>
  {show && < ol>
  {cars.map(function(item){
    return <li>{item.name}
    {item.model}</li>
  })}

</ol>}

      </header>
    </div>
  );
}

export default App;
