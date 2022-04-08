import logo from './logo.svg';
import './App.css';
import Todo from "./Todo.js"
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const[textValue , setTextValue] = useState()

  function handleSubmit(e){
    e.preventDefault()
    if(textValue!=""&&textValue!= null){
      setTodos([...todos , {"title":textValue,"key":Math.floor(Math.random()*1000000000),"finished":false}])
    }
    console.log(todos)
  }

  function handleClick(i){
    let items = [...todos]
    let item = i
    item.finished = !item.finished
    items[items.indexOf(i)] = item
    setTodos(items)
    console.log(i)
  }
  function deleteItem(i){
    let items = [...todos]
    items.splice(items.indexOf(i),1)
    setTodos(items)
    
  }
  return (
    <div className="App">
      <h1>
        Yapılacaklar listesi
      </h1>
      <form onSubmit={handleSubmit}>
        <div >
          <input className='textinput' type="text" onChange={(e)=>(setTextValue(e.target.value))}/>
            <button className='btn btnSubmit' type='submit'>
              Ekle
            </button>
        </div>
      </form>
      <ul>
      {todos.map((i)=>{return(<li key={i.key}>
        <Todo name={i.title} finished={i.finished}
         func={()=>(handleClick(i))} funcDelete={()=>(deleteItem(i))} />
      </li>)})}
      </ul>
    </div>
  );
}

export default App;
