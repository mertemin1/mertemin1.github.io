import React, { useState } from 'react';
import "./todo.css"
function Todo(props){
    return(
        <div className='main'>
            <button className='btn btnDelete' onClick={props.funcDelete}>
                Sil
            </button>
            <div className={props.finished==true?
            "container containerTrue":
            "container containerFalse"}>
                {props.name}
            </div>
            <button className='btn btnDone' onClick={props.func}>
                A
            </button>
        </div>
    )
}
export default Todo;