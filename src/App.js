import React from 'react';
import PropTypes from "prop-types";

document.title="nomad-react";

const foodIlike = [
  
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating:3.9
    },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
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