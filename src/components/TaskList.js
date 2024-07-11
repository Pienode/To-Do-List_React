// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onRemove }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onToggleComplete={onToggleComplete}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TaskList;
