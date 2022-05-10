import React from "react";
import Todo from "./Todo";
import Footer from "./Footer";

const TodoList = () => {
  return (
    <div className="todoContainer">
      <Todo />
      <Footer />
    </div>
  );
};

export default TodoList;