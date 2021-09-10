import React, { useState } from 'react';
import PropTypes from "prop-types";

document.title="nomad-react";



const App = () => {


  const [state,setState] = useState(0);
  const add = ()=>{
    setState(state + 1);
  };
  const minus = () =>{
    setState(state - 1);
  };

  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }

  return (
    <div>
      <h1>The number is: {state}</h1>
      <button onClick={add}>Add</button> 
      <button onClick={minus}>Minus</button>
    </div>
  );
};


export default App;