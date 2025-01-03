import React, { useState } from "react";

const TodoApp = () => {
  const [formData, setFormData] = useState({
    task: "",
    status: "",
    date: "",
  });

  const [tasks, setTasks] = useState([]); // To store the list of tasks

  // Update the formData state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, formData]); // Add new task to the list
    setFormData({ task: "", status: "", date: "" }); // Reset the form
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={formData.task}
          onChange={handleChange}
          placeholder="Task"
          required
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.task}</strong> - {task.status} - {task.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
