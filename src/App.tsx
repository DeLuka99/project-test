import { useState } from "react";
import styled from "styled-components";
import { Home } from "./pages/Home";
import { Teste } from "./pages/Teste";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Teste />} />
        </Routes>
      </Router>
      {/* <img src={logo} alt="logo D3" />
      <button type="button" onClick={() => setCount(count + 1)}>
        count is: {count}
      </button> */}
    </>
  );
}

export default App;
