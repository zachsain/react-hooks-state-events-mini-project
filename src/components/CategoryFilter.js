import React from "react";

function CategoryFilter({categories, tasks}) {
  console.log(categories)

  let selected; 

  function handleClick(event){
    console.log(event.className)
    return selected = "selected"
  // change class name to selected
  // filter tasks to only = the task that was selected 


  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(item => {
      return <button key={item} className={selected} onClick={handleClick}>
          {item}
        </button>
        })}
    </div>
  );
}

export default CategoryFilter;
