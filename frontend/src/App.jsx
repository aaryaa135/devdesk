import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AuthSuccess from "./pages/AuthSuccess";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/auth/success"
        element={<AuthSuccess />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

    </Routes>

  );

}

export default App;