
import React, { useState, useEffect } from "react";
import "./App.css";
import Card from './components/Card';

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
      <Card getCount={getCount} apodData={apodData}/>
    </div>
  );
}

export default App;
