import React from 'react';

export function SearchBar() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
      >
        Pesquisar
      </button>
    </div>
  );
}
