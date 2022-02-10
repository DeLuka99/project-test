import { useState } from "react";
import styled, { css } from "styled-components";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Main>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Main>
  );
}

export default App;

const Main = styled.div(
  ({ theme }) => css`
    height: 100vh;
    background: ${theme.colors.dark};
  `
);
