import React, {useState} from "react";

// take the value from category input field & task input field 
// push them into new object 
// add that new object to state 

function NewTaskForm({categories, onTaskFormSubmit}) {

  let newTask = {}

  // const [newTask, setNewTask] = useState(newTask)

 let copyCategories = [...categories]
 
copyCategories[0] = "Select:"

// let newTask = {}

  function handleCategory(event) {
   
    newTask.category = event.target.value
    // addToState(newTask)
  }

  function handleNewTask(event) {
   
   newTask.text = event.target.value
    // addToState(newTask)
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(newTask)
    onTaskFormSubmit(newTask)
  }
  console.log(newTask)

  console.log(categories)
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleNewTask} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory} >
          { copyCategories.map(category => {
          
           return <option key={category} value={category}>{category}</option>
          })
        }
        </select>
      </label>
      <input type="submit" value="Add task" onClick={handleSubmit} />
    </form>
  );
}

export default NewTaskForm;
