// src/components/Filter.js
import React from 'react';

const Filter = ({ filter, sortOrder, onFilterChange, onSortOrderChange }) => {
  return (
    <div>
      <label>
        Filter:
        <select value={filter} onChange={onFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </label>
      <label>
        Sort Order:
        <select value={sortOrder} onChange={onSortOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
