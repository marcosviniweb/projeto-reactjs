import React, { useState } from 'react';

export function SearchBar(props) {
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('firstName');

  const handleInputChange = (event) => {
    setLocalSearchQuery(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilterBy(event.target.value);
  };

  const handleSearchClick = () => {
    props.onSearch(localSearchQuery, filterBy);
  };

  return (
    <div className="input-group mb-3">
      <select
        className="form-select"
        value={filterBy}
        onChange={handleSelectChange}
      >
        <option value="firstName">First Name</option>
        <option value="age">Age</option>
        <option value="gender">Gender</option>
        <option value="lastName">Last Name</option>
      </select>
      <input
        type="text"
        value={localSearchQuery}
        onChange={handleInputChange}
        className="form-control"
        placeholder=""
        aria-label="Texto da pesquisa"
        aria-describedby="button-addon1"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        onClick={handleSearchClick}
      >
        Pesquisar
      </button>
    </div>
  );
}
