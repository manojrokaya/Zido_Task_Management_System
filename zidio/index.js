import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [user, setUser] = useState(false);
  const location = useLocation();

  return (
    <Router>
      <div>
        {user ? <Homepage /> : <Login />}
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/create-task" element={<CreateTask />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
