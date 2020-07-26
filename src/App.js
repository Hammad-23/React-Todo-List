import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const cars = [{
  name: 'civic', model : '2012'},
  {name: 'corolla', model : '2012'},
  {name: 'swift', model : '2012'
  
}]

const names = ['areeb','arif','hammad']

const obj = {name: "Hello World Object"}
const data = ['We', 'are', 'United'] //Show these in seperate tags

const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs' ,'Ionic']}]

function App() {

  const [list,setList] = useState('alo','piyaz')
  const [text,setText] = useState('')

  const addItem =function(){
    const newList = [...list]
    newList.push(text)
    setList(newList)
    setText('')
     console.log(newList)
  }

  const textGet = function(e){
   const input = e.target.value
    setText(input)
  }

  return (
    <div className="App">
      <header className="App-header">

        <div style = {{paddingBottom: '200px', fontSize: '50px'}}>
          <p>TODO LIST</p>
        </div>
   
         <div style = {{paddingBottom: '500px'}}>
        <input  className = 'form-control' type ='text' placeholder = 'enter here' onChange={textGet} value = {text}/>
        <button className = 'btn btn-primary' onClick={addItem}>ADD</button>
        </div>

        {/* <ul>
          {list.map(function(item){
            return <li>{item}</li>
          })}
        </ul> */}

        <div>
          <ul>
          {names.map(function(item){
            return <li>{item}</li>

          })}

          </ul>

        </div>




      </header>
    </div>

  
  );
}



export default App;
