import React from 'react';
import axios from "axios";
import Movie from "./Movie";

document.title="nomad-react";



// const App = () => {


//   const [isLoading,setIsLoading] = useState(true);
  
//   setTimeout (()=> 
//   setIsLoading(false)
//   , 5000);

//     getMovies = async() =>{
//       const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
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
      getMovies = async () =>{
        const {
          data: { 
            data:{ movies }
            }
          } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
            this.setState({movies, isLoading: false});
        };
    
        componentDidMount() {
          this.getMovies();
        }
 
  render(){
     
    const { isLoading,movies } =this.state;
    return <div>
      {isLoading ? "Loading..." : movies.map(movie =>{
        console.log(movie);
        return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.poster}/>
      })}</div>;

    
  }
}

export default App;