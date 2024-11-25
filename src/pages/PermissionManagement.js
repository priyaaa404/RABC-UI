import React, { useState } from 'react';

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState({
    'Admin': ['Read', 'Write', 'Delete'],
    'User': ['Read']
  });
  const [role, setRole] = useState('Admin');
  const [newPermission, setNewPermission] = useState('');

  const handleAddPermission = () => {
    if (newPermission && !permissions[role].includes(newPermission)) {
      setPermissions({
        ...permissions,
        [role]: [...permissions[role], newPermission]
      });
      setNewPermission('');
    }
  };

  return (
    <div>
      <h2>Permission Management</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        {Object.keys(permissions).map((role) => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>
      <input
        type="text"
        value={newPermission}
        onChange={(e) => setNewPermission(e.target.value)}
        placeholder="New permission"
      />
      <button onClick={handleAddPermission}>Add Permission</button>
      <h3>Permissions for {role}</h3>
      <ul>
        {permissions[role].map((perm, index) => (
          <li key={index}>{perm}</li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionManagement;
