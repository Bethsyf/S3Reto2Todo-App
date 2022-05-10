import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import "../styles/styles.css";

const App = () => {
  const theme = useSelector(state => state.theme);
  return (
    <div className={`app ${theme}`}>
      <Header />
      <TodoInput />
      <TodoList />      
    </div>
  );
};

export default App;