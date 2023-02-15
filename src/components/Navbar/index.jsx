import React from "react";
import "./Navabar.css";
import {
  ArtificialReality,
  Dashboard,
  Calls,
  AccountSettings,
  ManageOrganization,
  AnalyticsAndReports,
  Library,
} from "../../assets/icons";

const navItems = [
  {
    name: "Dashboard",
    icon: <Dashboard />,
  },

  {
    name: "Calls",
    icon: <Calls />,
  },
  {
    name: "Account Settings",
    icon: <AccountSettings />,
  },
  {
    name: "Manage Organization",
    icon: <ManageOrganization />,
  },
  {
    name: "Analytics & Reports",
    icon: <AnalyticsAndReports />,
  },
  {
    name: "Library",
    icon: <Library />,
  },
];

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="logo-wrapper">
        <ul>
          <li>
            <div className="logo-icon">
              <ArtificialReality />
            </div>
            <p>Artificial Reality</p>
          </li>
        </ul>
      </div>
      <div className="list-wrapper">
        <div>
          <ul>
            {navItems.map((obj) => {
              return (
                <li className="list">
                  {obj.icon}
                  <p className="list-title">{obj.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
