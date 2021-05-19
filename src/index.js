import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';
//import reportWebVitals from './reportWebVitals';


// class Greet extends React.Component{
//     render(){
//     return(<h1>
//       Hello people
//     </h1>);
//     }
// }

const Greet=props=>{
  console.log(props);
  return(
    <div>
      <button>action</button>
      <h1>Hello {props.name}</h1>
    
    </div>
    
    );
}

ReactDOM.render(<Greet></Greet>,document.getElementById('root'));


export default Greet;