// imports
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast';

// class components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // check: '✔️',
      showModal: false,
      // selectedPhoto: {}
    }
  }

  // addCheckMark = () => {
  //   this.setState({
  //     check: this.state.check + '✔️'
  //   })
  // }

  photoDetail = () => {
    this.setState({
      selectedPhoto: this.state.selectedPhoto
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true,
      // selectedPhoto: photo,
    })
  }

  render() {
    return (
      <>
        <Header
        // check={this.state.check}
        />
        <Main
          // addCheckMark={this.addCheckMark}
          photoDetail={this.photoDetail}
          handleOpenModal={this.handleOpenModal}
          data={data}       
          />
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          selectedPhoto={this.state.selectedPhoto}   
        />
        <Footer />
      </>
    )
  }
}

// export
export default App;