import React, { useContext } from "react";
import { TodoType } from "./constants";

type TodoContextType = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  activeFilter: number;
  setActiveFilter: React.Dispatch<React.SetStateAction<number>>;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

export const TodoContext = React.createContext<TodoContextType | undefined>(
  undefined
);

function useTodoContext() {
  const TodoContextState = useContext(TodoContext);
  if (TodoContextState === undefined) {
    throw new Error("TodoContext can not be undefined");
  }
  return TodoContextState;
}

export default useTodoContext;
