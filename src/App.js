// imports
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

// class components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // check: '✔️',
      showModal: false,
      selected: {}
    }
  }

  // addCheckMark = () => {
  //   this.setState({
  //     check: this.state.check + '✔️'
  //   })
  // }

  // photoDetail = () => {
  //   this.setState({
  //     selectedPhoto: this.state.selectedPhoto
  //   })
  // }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }

  handleOpenModal = (beastObj) => {
    console.log(beastObj);
    this.setState({
      showModal: true,
      // titleclicked: title, 
      // imageclicked: image_url,
      // desclicked: description,
      selected: beastObj,
    })
    console.log(this.state.selected)
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