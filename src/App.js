import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";

document.title="nomad-react";



const App = () => {


  const [isLoading,setIsLoading] = useState(true);
  
useEffect(()=>{
  setIsLoading(false);
}, 6000);

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