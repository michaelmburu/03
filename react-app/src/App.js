import { useState, useEffect } from 'react';
import './App.css';

function GithubUser({name, location, avatar}){
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img height={150} src={avatar} alt={name}/>
    </div>
  )
}
//Using API's in React

function App() {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/michaelmburu`)
    .then(response => response.json())
    .then(setData) //same as data => SetData(data)
  }, []);

  if(data)
    return (
      <GithubUser name={data.name} location ={data.location} avatar = {data.avatar_url} />
    );
}

export default App;
