import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import { useState } from "react";
import UserContext from "./context/UserContext";

function App() {
  const [token, setToken] = useState("");
  const [page, setPage] = useState("feed");
  const contextValue = { token, setToken, page, setPage };

  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;