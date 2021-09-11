import React, { Component, useState } from 'react';
import axios from "axios";

document.title="nomad-react";



// const App = () => {


//   const [isLoading,setIsLoading] = useState(true);
  
//   setTimeout (()=> 
//   setIsLoading(false)
//   , 5000);

//     getMovies = async() =>{
//       const movies = await axios.get("http://yts-proxy.now.sh/list_movies.json")
//     };

//     componentDidMount() {
//       getMovies();
//     }

//   return (
//     <div>
//       {isLoading ? "Loading..." : "We are ready"}
//     </div>
//   );
// };


class App extends React.Component{
  state ={
    isLoading: true,
    movies: []
  };  
      getMovies = async() =>{
          const movies = await axios.get("http://yts-proxy.now.sh/list_movies.json");
          console.log(movies.data.data.movies);
        };
    
        componentDidMount() {
          this.getMovies();
        }
 
  render(){
     
    const{isLoading}=this.state;
    return(
      <>
        {isLoading? "Loading..." : "We are ready"}
      </>
    )
  }
}

export default App;