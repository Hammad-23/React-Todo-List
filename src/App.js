import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [list,setList] = useState([])
  const [text,setText] = useState('')
  const [update,setUpdate] = useState(false)
  const [add,setAdd] = useState(true)
  const [editedindex,setEditedindex] = useState('')
  

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

  const deleteItem = function(index){

    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)


  }

  const editItem = function(index){
    setAdd(false)
    const newList = [...list]
    setText(text)
    
    // console.log(index)
    // const newEdited = [...editedindex]
    setEditedindex(index) 
    console.log(editedindex)
    const edit = newList[index]
    setText(edit)
    setUpdate(true)
    
   

  }

  const updateItem = function(){
    const newList = [...list]
    
       console.log(editedindex)
       console.log(newList)
       console.log(text)
    
    newList.splice(editedindex,1,text)
   console.log(newList)
   setList(newList)
   setText('')
   setUpdate(false)
   setAdd(true)
    
    
    
    
    
   


  }



  return (
    <div className="App">
      <header className="App-header">

        <div style = {{paddingBottom: '200px', fontSize: '50px'}}>
          <p>TODO LIST</p>
        </div>
   
         <div style = {{paddingBottom: '500px', boxShadow: 'black 0px 4px 4px 2px', width: '300px'}}>
        <input  className = 'form-control' type ='text' placeholder = 'enter here' onChange={textGet} value = {text}/>
       { add && <button className = 'btn btn-primary' onClick={addItem}>ADD</button>}
       { update && <button style={{marginLeft: '10px'}} className = 'btn btn-warning'  onClick={updateItem}>Update</button>}
        <br/><br/>
        <ul>
          {list.map(function(item , index){
            return( <li>
              {item}
              
              <button onClick = {() => deleteItem(index)} className = 'btn btn-success'>Delete</button>
              <button style={{marginLeft: '10px'}} onClick={() =>editItem(index)} className='btn btn-secondary'>Edit</button>
              
            
            </li>)
          })}
        </ul>

        </div>

    




      </header>
    </div>

  
  );
}



export default App;
