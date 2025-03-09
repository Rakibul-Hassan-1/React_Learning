import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/canvas" activeStyle={{ fontWeight: "bold" }}>
        Canvas
      </NavLink>
      <NavLink to="/invite-users" activeStyle={{ fontWeight: "bold" }}>
        Invite Users
      </NavLink>
      <NavLink to="/chat" activeStyle={{ fontWeight: "bold" }}>
        Chat
      </NavLink>
    </nav>
  );
}

export default NavBar;
