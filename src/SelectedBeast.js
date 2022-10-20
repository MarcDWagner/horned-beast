import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {


  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <p>{this.props.beastObj}</p>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast;

