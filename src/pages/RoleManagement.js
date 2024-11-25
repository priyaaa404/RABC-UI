import React, { useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Viewer", permissions: ["Read"] },
  ]);

  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  const addRole = () => {
    if (!newRole.name) {
      alert("Role name is required!");
      return;
    }
    setRoles([...roles, { ...newRole, id: Date.now() }]);
    setNewRole({ name: "", permissions: [] });
  };

  const deleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div>
      <h2>Role Management</h2>
      <div>
        <h3>Add Role</h3>
        <input
          type="text"
          placeholder="Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <button onClick={addRole}>Add Role</button>
      </div>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            {role.name} - Permissions: {role.permissions.join(", ")}
            <button onClick={() => deleteRole(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
