import React from "react";
import "./App.css";
import UnitConverter from "./components/UnitConverter";
import styled from "styled-components";

const Body = styled.div`
  padding: 1rem;
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  height: 5%;
  width: 100%;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <div className="App">
      <Body>
        <UnitConverter />
      </Body>
      <Footer>
        <a href="mailto:mike+kilocalc@vessia.net">Report an issue</a>
      </Footer>
    </div>
  );
}

export default App;
