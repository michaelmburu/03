import { useState } from 'react';
import './App.css';

//Custom react hook with use as prefix
function useInput(initialValue){
  const [value, setValue] = useState(initialValue);
  //Return two properties
  return [
    {
      value, 
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps , resetColor] = useState("#00000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor("#00000");
  };

  return (
    <form onSubmit={submit}>
      <input type="text" 
        {...titleProps}
        placeholder='color titles'
      />
      <input {...colorProps} type="color" 
       />
      <button>ADD</button>
    </form>
  );
}

export default App;
