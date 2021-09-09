import React from 'react';
import PropTypes from "prop-types";

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
    rating : 4.9
  }
];

function Food({name, picture, rating}){
  return (
  <div>
    <h2>i like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
  );
}

Food.propTypes ={
  name : PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const App = () => {
  return (
    <div>
        {foodIlike.map(dish => (<Food key={dish.id} rating={dish.rating} name={dish.name} picture={dish.image}/>))}
    </div>
  );
};

export default App;