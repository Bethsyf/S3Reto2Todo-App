import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeTodo } from "../action/todoActions";

const DeleteButton = ({ todoId }) => {
  const dispatch = useDispatch();
  return (
    <Button className="deleteBtn" onClick={() => dispatch(removeTodo(todoId))}>
      <img src={'https://res.cloudinary.com/dmaviub4l/image/upload/v1652185556/todoapp/qzgyur8lcgljx6lbudfj.svg'} alt="deleteicon" />
    </Button>
  );
};

export default DeleteButton;