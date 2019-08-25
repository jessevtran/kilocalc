import React from 'react';
import './App.css';
import UnitConverter from "./components/UnitConverter";
import styled from "styled-components";

const Footer = styled.footer`
  bottom: 0;
  height: 5%;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <UnitConverter />
      <Footer>
        Please send any problems or requests to this <a href="mailto:mike+kilocalc@vessia.net">email</a> or <a href="https://instagram.com/lambdalift">instagram</a>
      </Footer>
    </div>
  );
}

export default App;
