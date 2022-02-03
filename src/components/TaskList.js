import React, {useState} from "react";
import Task from "./Task"

function TaskList({tasks}) {
console.log(tasks)
  
  return (
    <div className="tasks">
      {tasks.map((task) => {
          return <Task name={task.text} categories={task.category} key={task.text} />
      })}
    </div>
  );
}

export default TaskList;
