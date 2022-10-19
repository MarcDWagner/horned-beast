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

  handleCloseModal = () => {
    this.setState({
      showModal: false,

    })
  }

  handleOpenModal = (photo) => {
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
          handleOpenModal={this.handleOpenModal}
          data={data}
        />
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
        >
          {/* <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedPhoto}</Modal.Title>
          </Modal.Header> */}
        </Modal>
        <Footer />
      </>
    )
  }
}

// export
export default App;