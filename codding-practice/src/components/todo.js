import React, { useState } from "react";

function Todo() {
  const [taskList, setTaskList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);
  const [active, setActive] = useState(true);
  let taskName = "";
  function typingTask(e) {    
    taskName = e.target.value;
    if(taskName.length>0)
    setActive(false)
  }
  function addTask() {    
    taskList.push(taskName);
    setTaskList([...taskList])
    console.log(taskList);
    
  }
  function completedTask(task) {
    for(let i=0;i<task.length;i++)
    {
        if(taskList[i]==task)
        {
            taskList.splice(i,1)
           
        }
    }
    setTaskList([...taskList])
     finishedList.push(task)
     setFinishedList([...finishedList])
    console.log(taskList)
  }

  return (
    <div style={{ paddingLeft: 125,paddingTop:125 }}>
      <input type="text" onChange={(e) => typingTask(e)} />
      <button onClick={() => addTask()} disabled={active}> Add Task</button>
      <br />
      <div >
        <h3>Todo List:</h3>
        {taskList.map((item) => {
          return <button onClick={() => completedTask(item)} style={{marginLeft:10}}>{item}</button>;
        })}
      </div>
      <div >
        <h3>Finished List:</h3>
        {finishedList.map((item) => {
          return <span style={{background:"gray",color:"red",marginLeft:10}}>{item}</span>;
        })}
      </div>
    </div>
  );
}
export default Todo;
