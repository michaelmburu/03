import { useState } from 'react';
import './App.css';


function App({}) {
  const [title, setTitle] = useState("");
  const [color , setColor] = useState("#00000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#00000");
  };

  return (
    <form onSubmit={submit}>
      <input type="text" 
        onChange={event => setTitle(event.target.value)} 
        value={title} 
        placeholder='color titles'
      />
      <input  
        onChange={ event => setColor(event.target.value)}
        type="color" 
        value={color}/>
      <button>ADD</button>
    </form>
  );
}

export default App;
