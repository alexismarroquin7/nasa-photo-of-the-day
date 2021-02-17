
import React from "react";
import "./App.css";
import axios from "axios";
import Card from './components/Card'

function App() {

  // const fetchApod = () => {
    
  // }

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Card />
    </div>
  );
}

export default App;
