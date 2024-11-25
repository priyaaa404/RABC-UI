import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null);  // Using useRef correctly

  useEffect(() => {
    // Example: Fetch users from an API or local data
    const fetchedUsers = [
      { id: 1, name: 'John Doe', role: 'Admin' },
      { id: 2, name: 'Jane Smith', role: 'User' }
    ];
    setUsers(fetchedUsers);
  }, []);

  const handleAddUser = () => {
    const name = inputRef.current.value; // Accessing input value using useRef
    if (name) {
      const newUser = { id: Date.now(), name, role: 'User' };
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>User Management</h2>
      <input ref={inputRef} placeholder="Enter user name" />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
