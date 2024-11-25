import React, { useState } from 'react';

const RoleManagement = () => {
  const [roles, setRoles] = useState(['Admin', 'User']);
  const [newRole, setNewRole] = useState('');

  const handleAddRole = () => {
    if (newRole) {
      setRoles([...roles, newRole]);
      setNewRole('');
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mt-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Role Management</h2>
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="New role"
          className="border rounded p-2 w-full"
        />
        <button
          onClick={handleAddRole}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Role
        </button>
      </div>
      <ul className="space-y-2">
        {roles.map((role, index) => (
          <li
            key={index}
            className="bg-gray-100 p-3 rounded shadow-sm text-gray-800"
          >
            {role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
