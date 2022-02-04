import React, {useState} from "react";
import Task from "./Task"
import CategoryFilter from "./CategoryFilter"

function TaskList({tasks}) {

const [listOfTasks, setListOfTask] = useState(tasks)

let newTasksList = tasks
  
  function handleRemove(deletedTask){

    setListOfTask(listOfTasks.filter(task => {
    return  task.text !== deletedTask
    }))
  }

  return (
    
    <div className="tasks">
      {listOfTasks.map((task) => {
          return <Task 
                    name={task.text} categories={task.category} 
                    key={task.text}
                    onDeleteTask={handleRemove} />;
                  
      })}
    </div>
  );
}

export default TaskList;
