import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const cliend_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

  useEffect(() => {
    const loadUsers = async () => {
      const loadedUsers = await axios.get(
        `https://api.github.com/users?client_id=${cliend_id}&cliend_secret=${client_secret}`
      );
      setUsers(...users, loadedUsers.data);
      setLoading(false);
    };
    loadUsers();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Users users={users} loading={loading} />
      </div>
    </div>
  );
};

export default App;
