import React from "react";
import { FaCogs, FaComments, FaPaintBrush, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Importing CSS for Sidebar

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Drawing Tools</h1>
      <ul className="sidebar-menu">
        <li>
          <Link to="/canvas">
            <FaPaintBrush className="sidebar-icon" /> Canvas
          </Link>
        </li>
        <li>
          <Link to="/invite-users">
            <FaUserPlus className="sidebar-icon" /> Invite Users
          </Link>
        </li>
        <li>
          <Link to="/chat">
            <FaComments className="sidebar-icon" /> Chat
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCogs className="sidebar-icon" /> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
