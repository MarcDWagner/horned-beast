import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';
// import './HornedBeast.css';


class Main extends React.Component {
  render(){
    let allBeasts = []

    data.forEach((beast, index)=>{
      allBeasts.push(
        <HornedBeast
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        horns={beast.horns}
        key={index}
        />
      )
    });
    console.log(allBeasts);

    return (
      <>
        <main>
          {allBeasts}
        </main>
      </>
    )
  }
}

export default Main;