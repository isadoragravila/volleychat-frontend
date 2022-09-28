import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState } from "react";
import UserContext from "./context/UserContext";

function App() {
  const [token, setToken] = useState("");
  const contextValue = { token, setToken };

  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;