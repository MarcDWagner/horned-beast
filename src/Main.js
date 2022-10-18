import React from 'react';
import HornedBeast from './HornedBeast';
// import rhinos from './rhinos.bmp';

class Main extends React.Component {
  render(){
    return (
      <>
      <main>
        <HornedBeast 
        title="Uniwahl" 
        imgURL="" 
        description="A unicorn and a narwhal nuzzling their horns" />

        <HornedBeast 
        title="Rhino Family" 
        // imgURL={rhinos} 
        description="Parent rhino with two babies" />

        <HornedBeast 
        title="Unicorn Head" 
        imgURL="" 
        description="Someone wearing a very silly unicorn head mask" />

        </main>
      </>
    )
  }
}

export default Main;