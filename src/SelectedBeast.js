import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showModal: false,
  //     selectedPhoto: {}
  //   }
  // }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>test{this.state.selectedPhoto}</Modal.Title> */}
          {/* <Modal.Title>Test</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Card className="text-center">
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Img
              variant="top"
              src={this.props.image_url}
              alt={this.props.title}
            />
            <Card.Body>
              <Card.Title>{this.props.description}</Card.Title>
              <Card.Text>{this.props.horns}</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast;

