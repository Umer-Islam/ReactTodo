import { useState } from "react";
export default function Todo() {
  const [tasks, setTasks] = useState(['eat','shower','take out trash']);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {
    setNewTask(event.target.value)
  }
  function addTask() {


    if(newTask !==''){
    setTasks(t=>[...t,newTask])
    setNewTask('')}
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
}

function moveTaskUp(index) {
    if (index > 0) {
        const updatedTasks = [...tasks];
        const temp = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index - 1];
        updatedTasks[index - 1] = temp;
        setTasks(updatedTasks);
    }
}

  function moveTaskDown(index) {
    if(index< tasks.length-1){
        const updatedTasks = [...tasks];
        const temp = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index + 1];
        updatedTasks[index + 1] = temp;
        setTasks(updatedTasks);

    }
  }
  return (
    <>
      <div className="todo-list">
        <h1>Todo List</h1>
        <div className="bar">
          <input type="text" placeholder="add task..." value={newTask} onChange={handleInputChange} maxLength = {200} />
          <button className="add-button" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
                <li key={index}> 
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=>{deleteTask(index)}}>Delete</button>
                <button className="move-button" onClick={()=>{moveTaskUp(index)}}>⬆</button>
                <button className="move-button" onClick={()=>{moveTaskDown(index)}}>⬇</button>

                </li>
            )}
        </ol>
      </div>
    </>
  );
}