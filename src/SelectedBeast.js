import React from 'react';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedPhoto: {}
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (photo) => {
    this.setState({
      showModal: true,
      selectedPhoto: photo,
    })
  }




  render() {
    return (
      <Modal
        show={this.state.showModal}
        onHide={this.handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.state.selectedPhoto}</Modal.Title>
        </Modal.Header>
      </Modal>
    )
  }
}

export default SelectedBeast;