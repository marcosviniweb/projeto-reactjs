import React, { useState } from 'react';

export function SearchBar(props) {
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setLocalSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    props.onSearch(localSearchQuery); // Notificar o componente pai sobre a consulta de pesquisa
  };

  return (
    <div className="input-group mb-3">
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
        onClick={handleSearchClick} // Adicionado manipulador de clique ao botão
      >
        Pesquisar
      </button>
    </div>
  );
}
