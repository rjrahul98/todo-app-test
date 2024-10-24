import { ChangeEvent, useEffect, useState } from "react";
import { FILTER_OPTIONS } from "./constants";
import styles from "./Todo.module.css";
import useTodoContext from "./useTodoContext";

type Props = {};
let timeout: any = null;

function HeaderSection({}: Props) {
  const { activeFilter, setActiveFilter, setSearchInput } = useTodoContext();
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setSearchInput(inputText);
    }, 500);
  }, [inputText]);

  return (
    <>
      <div className={styles.topHeader}>
        <h2>Today</h2>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputText(e.target.value);
          }}
          placeholder="Search"
          type="text"
        />
        <div className={styles.filterBtns}>
          <button
            className={activeFilter === FILTER_OPTIONS.all ? styles.active : ""}
            onClick={() => {
              setActiveFilter(FILTER_OPTIONS.all);
            }}
          >
            All
          </button>
          <button
            className={
              activeFilter === FILTER_OPTIONS.completed ? styles.active : ""
            }
            onClick={() => {
              setActiveFilter(FILTER_OPTIONS.completed);
            }}
          >
            Completed
          </button>
          <button
            className={
              activeFilter === FILTER_OPTIONS.incompleted ? styles.active : ""
            }
            onClick={() => {
              setActiveFilter(FILTER_OPTIONS.incompleted);
            }}
          >
            Incompleted
          </button>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
