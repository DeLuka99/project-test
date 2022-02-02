import { useState } from "react";

import logo from "./assets/logo.svg";

import styled from "styled-components";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Background className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </Background>
  );
}

export default App;

const Background = styled.div(
  ({ theme }) => `
    background: ${theme.colors.dark};
  `
);
