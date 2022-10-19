import React from 'react';
import HornedBeast from './HornedBeast';

import './Main.css';



class Main extends React.Component {
  render() {
    let allBeasts = this.props.data.map((beast, index) => {
      return <HornedBeast
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        horns={beast.horns}
        key={index}
        // addCheckMark={this.props.addCheckMark}
        handleOpenModal={this.props.handleOpenModal}
      />
    });
    // console.log(allBeasts);




  return(
      <>
  <main>
    {allBeasts}
  </main>
      </>
    )
  }
}

export default Main;