import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

const [tasks, setTasks] = useState(TASKS)
const [category, setCategory] = useState(TASKS)

console.log(tasks)

function onTaskFormSubmit(add){
  console.log(add)
  setTasks([...tasks, add])
  setCategory([...tasks, add])
  // console.log(newArray)
  // console.log(newArray)
  // setTasks(newArray)

}

 function handleClick(event) {
   
  let innerText = event.target.innerText
  event.target.className = "selected"

  const tasksFilter = category.filter(task => {
  
   if(task.category === innerText) {
     return task
   } else if (innerText === "All") {
     return task
   }
 
  })

  setTasks(tasksFilter)

 }

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={tasks} handleClick={handleClick} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
