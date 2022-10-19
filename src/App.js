// imports
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import './App.css';
import data from './data.json';

// class components
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      heart: '',
      // showModal: false,
      // selectedPhoto: {}
    }
  }

    addHearts = () => {
      this.setState({
        heart: this.state.heart + 'heart'
      })
    }



  render(){
    return (
      <>
        <Header
          heart={this.state.heart} 
        />
        <Main 
          addHearts={this.addHearts} 
          handleOpenModal={this.handleOpenModal}
          data={data}
          />

        <Footer />
      </>
    )
  }
}

// export
export default App;