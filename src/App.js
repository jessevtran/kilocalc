import React from "react";
import "./App.css";
import UnitConverter from "./components/UnitConverter";
import styled from "styled-components";
import { Container, Typography } from "@material-ui/core";

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
        <Container>
          <Typography variant="body1">
            <a href="https://gitlab.com/michaelvessia/kilocalc">
              View the source, file an issue, or make changes
            </a>
            <div>
              Want to support more powerlifting software?
              <a href="https://www.patreon.com/openpowerlifting">
                {" "}
                Donate to the cause!
              </a>
            </div>
          </Typography>
        </Container>
      </Footer>
    </div>
  );
}

export default App;
