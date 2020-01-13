import React from "react";
import "./App.css";
import UnitConverter from "./components/UnitConverter";
import styled from "styled-components";

const Body = styled.div`
  padding: 1rem;
`;
const Footer = styled.footer`
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
        <div>
          <a href="https://gitlab.com/michaelvessia/kilocalc">View the source, file an issue, or make changes</a>
        </div>
        <div>
          Want to support more powerlifting software?
          <a href="https://www.patreon.com/openpowerlifting">Donate to the cause!</a>
        </div>
      </Footer>
    </div>
  );
}

export default App;
