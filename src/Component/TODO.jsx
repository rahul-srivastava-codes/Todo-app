import React, { useState } from "react";
import Result from "./Result";


function TODO() {
  const [Initial, setInitial] = useState({
    task: "",
    status: "",
    date: "",
  });

  const [Task, setTask] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInitial((prev) => ({ ...prev, [name]: value }));
  }

  function addTask(e) {
    e.preventDefault();
    setTask((previewTask) => [...previewTask, Initial]);
    setInitial({ task: "", status: "", date: "" });
    alert("Task added successfully");
  }

  return (
    <div className="w-screen h-screen flex justify-around">
      <form onSubmit={addTask}>
        <div className="w-[50%] h-[50%] bg-orange-100 flex items-center justify-around">
          <div>
            <div className="text-2xl items-center">Add Task</div>
            <div className="w-[350px] h-[350px] bg-lime-700 flex flex-col px-2 py-2">
              <div className="px-2 py-2">
                <div>Task</div>
                <input
                  type="text"
                  name="task"
                  value={Initial.task}
                  placeholder="Enter Task"
                  className="grid justify-items-stretch"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="px-2 py-2">
                <div>Status</div>
                <select
                  name="status"
                  value={Initial.status}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="px-2 py-4">
                <div>Deadline</div>
                <input
                  type="date"
                  placeholder="dd/mm/yy"
                  className="grid justify-items-stretch"
                  name="date"
                  value={Initial.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="rounded-full py-[4px] h-[35px] w-[100px] bg-red-200 text-center">
                <button className="text-sx" onSubmit={addTask}>
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div>
        <Result tasks={Task}></Result>
      </div>
    </div>
  );
}

export default TODO;
