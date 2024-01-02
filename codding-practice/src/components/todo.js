import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
function Todo() {
  const [taskList, setTaskList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);
  const [active, setActive] = useState(true);

  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  let taskName = "";
  function typingTask(e) {
    taskName = e.target.value;
    if (taskName.length > 0) setActive(false);
  }
  function addTask() {
    taskList.push(taskName);
    setTaskList([...taskList]);
    console.log(taskList);
  }
  function completedTask(task) {
    for (let i = 0; i < task.length; i++) {
      if (taskList[i] == task) {
        taskList.splice(i, 1);
      }
    }
    setTaskList([...taskList]);
    finishedList.push(task);
    setFinishedList([...finishedList]);
    console.log(taskList);
  }

  return (
    <div style={{ paddingLeft: 125, paddingTop: 125, backgroundColor: "blue" }}>
      <input type="text" onChange={(e) => typingTask(e)} />
      <button onClick={() => addTask()} disabled={active}>
        {" "}
        Add Task
      </button>
      <br />
      <div>
        <h3>Todo List:</h3>
        {taskList.map((item) => {
          return (
            <button
              onClick={() => completedTask(item)}
              style={{ marginLeft: 10 }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div>
        <h3>Finished List:</h3>
        {finishedList.map((item) => {
          return (
            <span style={{ background: "gray", color: "red", marginLeft: 10 }}>
              {item}
            </span>
          );
        })}
      </div>
      <button onClick={() => dispatch(increment())}>INC {count} --</button>
      <button onClick={() => dispatch(decrement())}>DEC {count} --</button>
    </div>
  );
}
export default Todo;
