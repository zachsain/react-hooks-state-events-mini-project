import React from "react";

function CategoryFilter({categories, tasks, handleClick, }) {
  console.log(categories)


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(item => {
        
      return <button key={item} className= "" onClick={handleClick}>
          {item} 
        </button>
        })}
    </div>
  );
}

export default CategoryFilter;
