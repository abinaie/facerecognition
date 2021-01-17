import './App.css';
import React, {Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Clarifai from 'clarifai';
//import Particles from 'react-particles-js';

const app = new Clarifai.App({
  apikey: '8481393ddce6419fa6187d136d4e73dc'
});

// const particlesOptions = {
//   particles: {
//     number:{
//       value:30,
//       density:{
//         enable: true,
//         value_area:800
//       }
//     }
//   }
// }

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }
  
  onButtonSubmit = () =>{
    console.log('click!')
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function(response){
        console.log(response);
      },
      function(err){
        //action1
      }
    )
  }

  render(){
    return (
      <div className="App">
       {/* <Particles classNmae='particles' params={particlesOptions}/>*/}
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange = {this.onInputChange}  onSubmit = {this.onButtonSubmit}/>
       { 
        /*
        <FaceRecognition/>
       */}
      </div>
    );    
  }
}



export default App;
