import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PhotoGrid from './components/PhotoGrid';
import InfoCard from './components/InfoCard';
import './App.css';

let imageSources=[
  "first",
  "second",
  "third",
  "fourth",

  "fifth",
  "sixth",
  "seventh",
  "eighth",

  "ninth",
  "tenth",
  "eleventh",
  "twelfth"
]
class App extends Component {


  picPressed = () =>{
    let indexArray=[]
    let count=1;

    imageSources.forEach(element => {
      indexArray.push(count);
      count++;
    });
    console.log('index array ='+indexArray)

    let numberOfDivisions = Math.round(indexArray.length/4)
    let firstPoint=numberOfDivisions+1;
    let secondPoint = firstPoint*2;
  
    
    let firstRow=imageSources.slice(0,firstPoint);
    let secondRow=imageSources.slice(numberOfDivisions+1,secondPoint);
    let thirdRow=imageSources.slice(secondPoint,imageSources.length);

    console.log(firstRow);
    console.log(secondRow);
    console.log(thirdRow);



  }

  render() {
    return (
      <div>
        <Navbar topScore="21" currentScore="78" />
        <InfoCard />
        <PhotoGrid picPressed={this.picPressed}/>
        <Footer />
      </div>
    )
  }
}

export default App;
