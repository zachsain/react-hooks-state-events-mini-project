import React from "react";

function Task({name, categories, deleteButton}) {

  
  console.log(name)
  return (
    <div className="task">
      <div className="label">{categories}</div>
      <div className="text">{name}</div>
      <button className="delete" onClick={deleteButton}>X</button>
    </div>
  );
}

export default Task;
