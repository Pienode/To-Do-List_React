// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, index, onToggleComplete, onRemove }) => {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onToggleComplete(index)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onRemove(index)}>Remove</button>
    </li>
  );
};

export default TaskItem;
