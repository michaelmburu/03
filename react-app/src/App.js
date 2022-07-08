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
  //Handling loading states
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);

    fetch(`https://api.github.com/users/michaelmburu`)
    .then(response => response.json())
    .then(setData) //same as data => SetData(data)
    .then(() => setLoading(false))
    .catch(setError)
  }, []);

    if(loading) return <h1>Loading...</h1>;
    if(error) return <pre>{JSON.stringify(error)}</pre>
    if(!data) return null;
    return (
      <GithubUser name={data.name} location ={data.location} avatar = {data.avatar_url} />
    );
}

export default App;
