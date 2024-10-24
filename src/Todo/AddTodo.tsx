import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Todo.module.css";
import useTodoContext from "./useTodoContext";
import { TodoType } from "./constants";

function AddTodo() {
  const { todos, setTodos } = useTodoContext();
  const [inputValue, setInputValue] = useState<string>("");

  const addTodo = (text: string) => {
    if (!text.trim()) {
      return;
    }
    const newTodo: TodoType = {
      text: text.trim(),
      id: Date.now(),
      isCompleted: false,
    };
    setTodos([...todos, { ...newTodo }]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <form style={{ marginTop: 20 }} onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type Something"
        className={styles.inputTodo}
      />
      <button className={styles.addTodoBtn} type="submit">
        + Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
