import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedPhoto: {}
    }
  }

  render() {
    return (
      <article>
        <modal>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedPhoto}</Modal.Title>
          </Modal.Header>

        </modal>
      </article>

)
  }
}

export default SelectedBeast;

// {/* <Card style={{ width: '18rem' }}>
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the
//       bulk of the card's content.
//     </Card.Text>
//     {/* <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link> */}
//   {/* </Card.Body> */}