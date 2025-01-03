import React from "react";

function Result({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.task}</strong> - {task.status} - {task.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Result;
