import React from "react";
import ClearButton from "./ClearButton";
import { useSelector } from "react-redux";
import FilterButtons from "./FilterButton";

const Footer = () => {
  const todos = useSelector(state => state.todos);

  const unCompletedTodos = tasks => {
    return tasks.filter(task => !task.completed);
  };

  const item = unCompletedTodos(todos).length > 1 ? "items" : "item";

  return (
    <div className="todoFooter">
      <div className="itemsLeft">
        <span>
          {unCompletedTodos(todos).length} {item} left
        </span>
      </div>
      <FilterButtons />
      <ClearButton />
    </div>
  );
};

export default Footer;