import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { clearCompletedTodos } from "../action/todoActions";

const ClearButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="clearButton">
      <Button onClick={() => dispatch(clearCompletedTodos())}>
        Clear Completed
      </Button>
    </div>
  );
};

export default ClearButton;