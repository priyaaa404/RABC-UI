import React from 'react';
import ErrorBoundary from './ErrorBoundary';  // Import the ErrorBoundary component
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';
import PermissionManagement from './pages/PermissionManagement';

const App = () => {
  return (
    <ErrorBoundary>
      <div>
        <h1>Admin Dashboard</h1>
        {/* Your UI components */}
        <UserManagement />
        <RoleManagement />
        <PermissionManagement />
      </div>
    </ErrorBoundary>
  );
};

export default App;
