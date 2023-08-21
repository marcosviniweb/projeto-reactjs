import React, { useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/header/Header';
import { SearchBar } from './components/searchBar/SearchBar';
import { DataTable } from './components/data-table/DataTable';
import { Footer } from './components/footer/Footer';
import { fetchUsers } from './services/userService';

export default function App() {
  const [searchQuery, setSearchQuery] = useState({
    query: '',
    filter: 'firstName',
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };

    getUsers();
  }, []);

  const handleSearch = (query, filter) => {
    setSearchQuery({ query, filter });
  };

  return (
    <div className="container">
      <Header />
      <main className="flex-shrink-0">
        <div id="app"></div>
        <div className="card">
          <div className="card-body">
            <SearchBar onSearch={handleSearch} />
            <DataTable users={users} searchQuery={searchQuery} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
