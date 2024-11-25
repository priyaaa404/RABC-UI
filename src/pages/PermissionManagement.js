import React, { useState } from 'react';

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState({
    Admin: ['Read', 'Write', 'Delete'],
    User: ['Read'],
  });
  const [role, setRole] = useState('Admin');
  const [newPermission, setNewPermission] = useState('');

  const handleAddPermission = () => {
    if (newPermission && !permissions[role].includes(newPermission)) {
      setPermissions({
        ...permissions,
        [role]: [...permissions[role], newPermission],
      });
      setNewPermission('');
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mt-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Permission Management
      </h2>
      <div className="flex items-center gap-4 mb-4">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded p-2"
        >
          {Object.keys(permissions).map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
          placeholder="New permission"
          className="border rounded p-2 w-full"
        />
        <button
          onClick={handleAddPermission}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Permission
        </button>
      </div>
      <h3 className="text-gray-700 font-medium mb-2">
        Permissions for {role}
      </h3>
      <ul className="space-y-2">
        {permissions[role].map((perm, index) => (
          <li
            key={index}
            className="bg-gray-100 p-3 rounded shadow-sm text-gray-800"
          >
            {perm}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionManagement;
