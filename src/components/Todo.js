import React from "react";
import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";
import { useSelector } from "react-redux";
import { showFilteredTodos } from "../reducers/filterReducer";

const Todo = () => {
  const todos = useSelector(state => state.todos);
  const activeFilter = useSelector(state => state.filtered);

  const filteredTodos = showFilteredTodos(todos, activeFilter);

  return (
    <>
      {filteredTodos.map(item => {
        return (
          <div className="todo" key={item.id}>
            <CheckButton todo={item} />
            <p className={`${item.completed && "completedTodo"}`}>
              {item.text}
            </p>
            <DeleteButton todoId={item.id} />
          </div>
        );
      })}
    </>
  );
};

export default Todo;