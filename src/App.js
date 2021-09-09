import React from 'react';
import './App.css';
import A from "./asset/img/1 (1).jpg";

document.title="nomad-react";

const foodIlike = [
  {
    id : 1,
    image : "1",
    name : "kimbap",
    rating: 1.3
  },

  {
    id : 2,
    image : "2",
    name : "kimchi",
    rating : 5.5
  }
];

function Food(p){
  return <h1>i like {p.name} <br/>{p.picture}</h1>
}


const App = () => {
  return (
    <div>
        {foodIlike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image}/>))}
    </div>
  );
};

export default App;