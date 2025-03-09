// src/components/UserManagement/InviteUsers.js
import React from "react";

function InviteUsers() {
  return (
    <div>
      <h2>Invite Users</h2>
      <form>
        <input type="email" placeholder="Enter email address" />
        <button type="submit">Send Invitation</button>
      </form>
    </div>
  );
}

export default InviteUsers;
