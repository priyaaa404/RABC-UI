import React, { useState } from "react";

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState(["Read", "Write", "Delete"]);
  const [newPermission, setNewPermission] = useState("");

  const addPermission = () => {
    if (!newPermission) {
      alert("Permission cannot be empty!");
      return;
    }
    if (permissions.includes(newPermission)) {
      alert("Permission already exists!");
      return;
    }
    setPermissions([...permissions, newPermission]);
    setNewPermission("");
  };

  const deletePermission = (permission) => {
    setPermissions(permissions.filter((perm) => perm !== permission));
  };

  return (
    <div>
      <h2>Permission Management</h2>
      <div>
        <h3>Add Permission</h3>
        <input
          type="text"
          placeholder="Permission"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
        />
        <button onClick={addPermission}>Add Permission</button>
      </div>
      <ul>
        {permissions.map((perm, index) => (
          <li key={index}>
            {perm} <button onClick={() => deletePermission(perm)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionManagement;
