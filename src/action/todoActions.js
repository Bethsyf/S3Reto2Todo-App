import { types } from "../type/types"


export const addTodo = text => {
  return {
    type: types.Add,
    payload: text,
  };
};

export const removeTodo = id => {
  return {
    type: types.Delete,
    payload: id,
  };
};

export const completeTodo = id => {
  return {
    type: types.Complete,
    payload: id,
  };
};

export const clearCompletedTodos = () => {
  return {
    type: types.Clear
  };
};