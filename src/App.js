import './App.css';
import React, {Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';


const app = new Clarifai.App({
  apiKey: '299da3fe832444309cc84c080b92a0c4'
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
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }
 
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    //DOM manipulation
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }


  onInputChange = (event) =>{
    //console.log(event.target.value);
    this.setState({input: event.target.value});
  }
  
  onButtonSubmit = () => {
      this.setState({imageUrl: this.state.input});
      //Clarifai.FACE_DETECT_MODEL
      //8db5a955134d4204a51971f951872e50
      //c0c0ac362b03416da06ab3fa36fb58e3
      //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      app.models.predict(Clarifai.FACE_DETECT_MODEL , this.state.input).then(response => this.displayFaceBox(this.calculateFaceLocation(response))).catch(err => console.log(err));
    }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }else if (route === 'home'){
      this.setState({isSignedIn : true})
    }
    this.setState({route : route});
  }

  render(){
    const {isSignedIn, imageUrl, route, box} = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === 'home' ?
          <div>
            <Logo/>
            <Rank/>
            <ImageLinkForm onInputChange = {this.onInputChange}  onButtonSubmit = {this.onButtonSubmit}/>
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </div>
          : (
            route === 'signin' ?
            <Signin onRouteChange={this.onRouteChange}/>
            :
            <Register onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );    
  }
}



export default App;
