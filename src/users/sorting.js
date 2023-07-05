import React from 'react';

const Sorting = ({ sortingValue, setSortingValue }) => {
  return (
    <div className="sortingContainer">
      <span className="sortingText">Sorting by</span>
      <select
        onChange={(e) => setSortingValue(e.target.value)}
        className="form-select selecting"
        aria-label="Sorting by"
        value={sortingValue}
      >
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
    </div>
  );
};
export default Sorting;
