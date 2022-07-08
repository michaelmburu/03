import React, { useState, useEffect } from 'react';
import './App.css';

//Working wih render props

const mtkenya_peaks = [
  {name: "Lenana", elevation: 4800},
  {name: "Batian", elevation: 5199}, 
  {name: "Nelion", elevation: 4985}
]

function List({data, renderItem, renderEmpty}){
  return !data.length ? (renderEmpty) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

function App() {

    return (
     <List 
        data={mtkenya_peaks} 
        renderEmpty={<p>This list is empty</p>}
        renderItem={item => <>{item.name} {item.elevation}</>} 
     />
    );
}

export default App;
