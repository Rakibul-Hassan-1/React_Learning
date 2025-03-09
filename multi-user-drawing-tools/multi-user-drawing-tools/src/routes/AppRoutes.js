import React from "react";
import { Route, Routes } from "react-router-dom";
import Canvas from "../components/Canvas/Canvas";
import Chat from "../components/Chat/Chat";
import InviteUsers from "../components/UserManagement/InviteUsers";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/canvas" element={<Canvas />} />
      <Route path="/invite-users" element={<InviteUsers />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default AppRoutes;
