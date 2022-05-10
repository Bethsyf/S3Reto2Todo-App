import React from "react";
import Button from "./Button";

import { useDispatch } from "react-redux";
import { completeTodo } from "../action/todoActions";

const CheckButton = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(completeTodo(todo.id))}
      className={`checkBtn ${todo.completed && "completedIcon"}`}
    >
      {todo.completed && <img src={'https://res.cloudinary.com/dmaviub4l/image/upload/v1652185556/todoapp/x1gtqitvvwi4iz3ex5y5.svg'} alt="checkicon" />}
    </Button>
  );
};

export default CheckButton;