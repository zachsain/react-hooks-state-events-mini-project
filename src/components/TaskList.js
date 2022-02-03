import React, {useState} from "react";
import Task from "./Task"

function TaskList({tasks}) {
console.log(tasks)
  
  function handleRemove(event){
    console.log(event)
  }

  return (
    <div className="tasks">
      {tasks.map((task) => {
          return <Task name={task.text} categories={task.category} key={task.text} deleteButton={handleRemove} />
      })}
    </div>
  );
}

export default TaskList;
