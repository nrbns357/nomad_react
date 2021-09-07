import React from 'react';
import './App.css';

document.title="nomad-react";

const foodIlike = [
  {img:"img"},
  {name:"gusgh"}
];

function Food(props){
  return <h1>I like {props.fav}</h1>
}

function reander(dish){
  console.log(dish);
  return <Food name="gusgh"/>
} 

const App = () => {
  return (
    <>
      {foodIlike.map(reander)}      
    </>
  );
};

export default App;