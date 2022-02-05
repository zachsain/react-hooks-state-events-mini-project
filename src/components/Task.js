import React from "react";

function Task({name, categories, onDeleteTask}) {

  function handleClick() {
    onDeleteTask(name)
  }

  return (
    <div className="task">
      <div className="label">{categories}</div>
      <div className="text">{name}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
