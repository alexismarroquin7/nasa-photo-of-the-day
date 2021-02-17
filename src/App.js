
import React, { useState } from "react";
import "./App.css";

function App() {
  const [apodData, setApodData] = useState([]);
  const [count, setCount] = useState(null);


  const getCount = (input) => {
    return setCount(input);
  }

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
