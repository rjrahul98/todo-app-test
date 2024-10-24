import React from "react";
import styles from "./Todo.module.css";
import { FILTER_OPTIONS, TodoType } from "./constants";
import useTodoContext from "./useTodoContext";

type ItemProp = {
  todo: TodoType;
  deleteTodo: (id: number) => void;
  updateStatus: (id: number, isCompleted: boolean) => void;
};

function ItemsList() {
  const { todos, setTodos, activeFilter, searchInput } = useTodoContext();

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateStatus = (id: number, isCompleted: boolean) => {
    setTodos(
      todos.filter((ele) =>
        ele.id === id ? (ele.isCompleted = isCompleted) : ele
      )
    );
  };

  return (
    <>
      <div className={styles.todosContainer}>
        {todos
          .filter((todo) =>
            activeFilter === FILTER_OPTIONS.incompleted
              ? !todo.isCompleted
              : activeFilter === FILTER_OPTIONS.completed
              ? todo.isCompleted
              : true
          )
          .filter((ele) =>
            ele.text.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((todo) => (
            <Item
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              updateStatus={updateStatus}
            />
          ))}
      </div>
    </>
  );
}

const Item = ({ todo, deleteTodo, updateStatus }: ItemProp) => {
  return (
    <div
      className={`${styles.itemContainer} ${
        todo.isCompleted && styles.completed
      }`}
    >
      <div className={styles.itemLeftSide}>
        <input
          checked={todo.isCompleted}
          type="checkbox"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            updateStatus(todo.id, e.target.checked);
          }}
        />
        <p className={styles.itemText}>{todo.text}</p>
      </div>
      <div onClick={() => deleteTodo(todo.id)} className={styles.itemRightSide}>
        x
      </div>
    </div>
  );
};

export default ItemsList;
