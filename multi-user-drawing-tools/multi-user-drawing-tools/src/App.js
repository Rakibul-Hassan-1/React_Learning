import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Header/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <div className="app-content">
          <AppRoutes />
        </div>
      </div>
      
    </Router>
  );
}

export default App;
