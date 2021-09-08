import React from 'react';
import './App.css';
import A from "./asset/img/1 (1).jpg";

document.title="nomad-react";

const foodIlike = [
  {
    image : "1",
    name : "kimbap"
  },

  {
    image : "2",
    name : "kimchi"
  }
];

function Food(props){
  return <h1>I like {props.fav}</h1>
}

function reander(dish){
  console.log(dish);
  return <Food name={dish.name} picture={dish.image}/>
} 

const App = () => {
  return (
    <div>
        {foodIlike.map(reander)}
    </div>
  );
};

export default App;