import React, { useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { DataTable } from './components/DataTable';
import { fetchUsers } from './services/userService';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };

    getUsers();
  }, []);

  return (
    <div className="container">
      <Header />
      <main className="flex-shrink-0">
        <div id="app"></div>
        <div className="card">
          <div className="card-body">
            <SearchBar onSearch={setSearchQuery} />
            <DataTable users={users} searchQuery={searchQuery} />
          </div>
        </div>
      </main>

      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    </div>
  );
}
