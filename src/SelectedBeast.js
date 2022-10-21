import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';
// import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {


  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selected.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body id='body'>
             <img src={this.props.selected.image_url} 
              alt={this.props.selected.title}>
              </img>                     
        </Modal.Body>
          <Modal.Footer>
            {this.props.selected.description}
          </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;

