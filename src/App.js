import "./styles.css";
import userContext from "./Contextlogin";
import { useState } from "react";
import Login from "./Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";

export default function App() {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [click, setClick] = useState(false);

  return (
    <BrowserRouter>
      <userContext.Provider
        value={{
          name,
          setName,
          gmail,
          setGmail,
          password,
          setPassword,
          click,
          setClick,
        }}
      >
        <div className="App">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>
      </userContext.Provider>
    </BrowserRouter>
  );
}
