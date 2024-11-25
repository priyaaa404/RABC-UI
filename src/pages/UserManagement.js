import React, { useState, useEffect, useRef } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchedUsers = [
      { id: 1, name: 'John Doe', role: 'Admin' },
      { id: 2, name: 'Jane Smith', role: 'User' },
    ];
    setUsers(fetchedUsers);
  }, []);

  const handleAddUser = () => {
    const name = inputRef.current.value;
    if (name) {
      const newUser = { id: Date.now(), name, role: 'User' };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      inputRef.current.value = '';
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">User Management</h2>
      <div className="flex items-center gap-4 mb-4">
        <input
          ref={inputRef}
          placeholder="Enter user name"
          className="border rounded p-2 w-full"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </div>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between bg-gray-100 p-3 rounded shadow-sm"
          >
            <span>
              {user.name} - {user.role}
            </span>
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
