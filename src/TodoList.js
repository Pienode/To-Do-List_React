// src/TodoList.js
import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import Filter from './components/Filter';
import TaskList from './components/TaskList';
import BackgroundChanger from './components/BackgroundChanger';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((t, i) => 
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const getFilteredTasks = () => {
    let filteredTasks = tasks;
    if (filter === 'completed') {
      filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === 'pending') {
      filteredTasks = tasks.filter(task => !task.completed);
    }
    return filteredTasks;
  };

  const getSortedTasks = (tasks) => {
    return tasks.sort((a, b) => 
      sortOrder === 'asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
    );
  };

  const filteredTasks = getSortedTasks(getFilteredTasks());

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask onAdd={handleAddTask} />
      <Filter
        filter={filter}
        sortOrder={sortOrder}
        onFilterChange={handleFilterChange}
        onSortOrderChange={handleSortOrderChange}
      />
      <TaskList
        tasks={filteredTasks}
        onToggleComplete={handleToggleComplete}
        onRemove={handleRemoveTask}
      />
      <BackgroundChanger />
    </div>
  );
};

export default TodoList;
