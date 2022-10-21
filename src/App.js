// imports
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
import HornSelector from './HornSelector.js';

// class components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // check: '✔️',
      showModal: false,
      selected: {},
      showByHorns: data,
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }

  handleOpenModal = (beastObj) => {
    this.setState({
      showModal: true,
      selected: beastObj,
    })
  }

  chosenByHorns = (horns) => {
    let showBeasts
    if (horns) {
      showBeasts = data.filter(beast => beast.horns === Number(horns));
    } else {
      showBeasts = data;
    }
    this.setState({
      showByHorns: showBeasts
    });
  }




  render() {
    return (
      <>
        <Header
        // check={this.state.check}
        />
        <HornSelector
          chosenByHorns={this.chosenByHorns}
        />
        <Main
          // addCheckMark={this.addCheckMark}
          photoDetail={this.photoDetail}
          handleOpenModal={this.handleOpenModal}
          data={this.state.showByHorns}
        />
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          // selectedPhoto={this.state.selectedPhoto}
          selected={this.state.selected}
        />
        <Footer />
      </>
    )
  }
}

// export
export default App;
      // addCheckMark = () => {
      //   this.setState({
      //     check: this.state.check + '✔️'
      //   })
      // }