import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';
//import reportWebVitals from './reportWebVitals';


class Greet extends React.Component{
    render(){
    return(<h1>
      Hello people
    </h1>);
    }
}

ReactDOM.render(<Greet></Greet>,document.getElementById('root'));