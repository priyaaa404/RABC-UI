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
    <div>
      <h2>Role Management</h2>
      <input
        type="text"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
        placeholder="New role"
      />
      <button onClick={handleAddRole}>Add Role</button>
      <ul>
        {roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
