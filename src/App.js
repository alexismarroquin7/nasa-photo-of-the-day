
import React from "react";
import "./App.css";
import Content from "./components/Content"
import styled from 'styled-components';

const StyledApp = styled.div`
  background:${props => props.theme.background};
  color:${props => props.theme.color};

  h1 {
    color:${props => props.accent ? 'royalblue' : 'white'};
  }
`

function App({accent}) {

  return (
    <StyledApp accent>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h1><span>🚀</span>N.A.S.A.'s A.P.O.D</h1>
      <Content />
    </StyledApp>
  );
}

export default App;
