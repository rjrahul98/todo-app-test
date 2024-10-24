import { useEffect, useState } from "react";
import { FILTER_OPTIONS, TodoType } from "./constants";
import HeaderSection from "./HeaderSection";
import { TodoContext } from "./useTodoContext";
import AddTodo from "./AddTodo";
import ItemsList from "./ItemsList";

const getTodos = () => {
  const list = localStorage.getItem("todos");
  return list ? JSON.parse(list) : [];
};
type Props = {};

function Todo({}: Props) {
  const [todos, setTodos] = useState<TodoType[]>(getTodos);
  const [activeFilter, setActiveFilter] = useState<number>(FILTER_OPTIONS.all);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        activeFilter,
        setActiveFilter,
        searchInput,
        setSearchInput,
      }}
    >
      <HeaderSection />
      <ItemsList />
      <AddTodo />
    </TodoContext.Provider>
  );
}

export default Todo;
