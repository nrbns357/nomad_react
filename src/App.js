import React, { useState } from 'react';
import axios from "axios";

document.title="nomad-react";



const App = () => {


  const [isLoading,setIsLoading] = useState(true);
  
  setTimeout (()=> 
  setIsLoading(false)
  , 5000);

  return (
    <div>
      {isLoading ? "Loading..." : "We are ready"}
    </div>
  );
};


// class App extends React.Component{
//   state ={
//     isLoading: true
//   };
//   componentDidMount(){
//     setTimeout(()=>{
//       this.setState({isLoading: false});
//     },6000);
//   }
//   render(){
//     const{isLoading}=this.state;
//     return(
//       <>
//         {isLoading? "Loading..." : "We are ready"}
//       </>
//     )
//   }
// }

export default App;