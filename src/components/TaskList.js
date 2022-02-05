import React, {useState} from "react";
import Task from "./Task"
import CategoryFilter from "./CategoryFilter"

function TaskList({tasks, setTasks}) {

  
  function handleRemove(deletedTask){

    setTasks(tasks.filter(task => {
    return  task.text !== deletedTask
    }))
  }

  return (
    
    <div className="tasks">
      {tasks.map((task) => {
          return <Task 
                    name={task.text} categories={task.category} 
                    key={task.text}
                    onDeleteTask={handleRemove} />;
                  
      })}
    </div>
  );
}

export default TaskList;
