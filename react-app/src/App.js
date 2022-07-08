import { useState, useEffect } from 'react';
import './App.css';

//Using API's in React

function App() {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/michaelmburu`)
    .then(response => response.json())
    .then(setData) //same as data => SetData(data)
  }, []);

  if(data) return <pre>{JSON.stringify(data, null, 2)}</pre>

  return (
    <h1>Data</h1>
  );
}

export default App;
