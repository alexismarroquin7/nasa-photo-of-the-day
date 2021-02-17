
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from './components/Card';
import { BASE_URL, API_KEY } from './constants';

function App() {
  const [apodData, setApodData] = useState([]);
  const [count, setCount] = useState('');

  useEffect(() => {
    const fetchApod = () => {
      axios.get(`${BASE_URL}${API_KEY}none`)
        .then(res => {
          return setApodData(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
    fetchApod();
  }, []);

  const getCount = event => {
    const amount = event.target.value;
    return setCount(amount);
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
