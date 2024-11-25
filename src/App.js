import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = () => <h2>Dashboard</h2>;
const UserManagement = () => <h2>User Management</h2>;
const RoleManagement = () => <h2>Role Management</h2>;
const PermissionManagement = () => <h2>Permission Management</h2>;

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><a href="/users">User Management</a></li>
          <li><a href="/roles">Role Management</a></li>
          <li><a href="/permissions">Permission Management</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/roles" element={<RoleManagement />} />
        <Route path="/permissions" element={<PermissionManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
