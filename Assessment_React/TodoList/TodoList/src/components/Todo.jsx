import React, { useState } from "react";

let storage = [];


function TodoList(){

    function Todo(){
        const [tasks, setTasks] = useState([]);
        const [inputValue, setInputValue] = useState('');

        const addTask = ()=> {
            if (inputValue.trim() !== ''){
                setTasks(...tasks, inputValue);
            };
        }

        const modifyTask = (e)=> {
            setInputValue(e.target.value)
        };

        const deleteTask = (e)=> {
            const addedTask = tasks.filter((_, i) => i !== index) ;
            setTasks(addedTask)
        }

    }
    return(
        <div>
           <input type="text" /> 
           <button>Submit</button>
        </div>
    )
}

export default TodoList