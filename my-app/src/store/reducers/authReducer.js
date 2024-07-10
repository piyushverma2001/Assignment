import React, { useState } from "react";

const AdminPanel = () => {
  const [selectedSection, setSelectedSection] = useState("users");

  const renderSection = () => {
    switch (selectedSection) {
      case "users":
        return <UsersSection />;
      case "reports":
        return <ReportsSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <UsersSection />;
    }
  };

  return (
    <div className="admin-panel">
      <nav className="admin-nav">
        <ul>
          <li onClick={() => setSelectedSection("users")}>Manage Users</li>
          <li onClick={() => setSelectedSection("reports")}>View Reports</li>
          <li onClick={() => setSelectedSection("settings")}>Settings</li>
        </ul>
      </nav>
      <div className="admin-content">{renderSection()}</div>
    </div>
  );
};

const UsersSection = () => (
  <div>
    <h2>Manage Users</h2>
    {/* Add user management functionality here */}
  </div>
);

const ReportsSection = () => (
  <div>
    <h2>View Reports</h2>
    {/* Add report viewing functionality here */}
  </div>
);

const SettingsSection = () => (
  <div>
    <h2>Settings</h2>
    {/* Add settings functionality here */}
  </div>
);

export default AdminPanel;
