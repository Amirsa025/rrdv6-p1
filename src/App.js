import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Admin from "./components/Admin";
import Analitics from "./components/Analitics";
import Home from "./components/home";
import Landing from "./components/landing";
import Navigation from "./components/Navigaition";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ id: "1", name: "robin" });
  const handleLogout = () => setUser(null);

  return (
    <>
      <h1>React Router</h1>

      <Navigation />

      {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}

<Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
        <Route
          path="home"
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="Admin"
          element={
            <ProtectedRoute user={user}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="analytics" element={<Analitics />} />
        
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
};

export default App;
