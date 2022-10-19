import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      votes: 0,
    }
  }

  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  handlePhotoClick = () => {
    this.props.handleOpenModal(this.props.photo)
  }

  render() {
    return (
      <article>
        {/* <img src={this.props.image_url} alt={this.props.title} /> */}
        <Card style={{ width: '18rem' }}>
        <Card.Img 
          variant="top" 
          src={this.props.image_url} 
          alt={this.props.title} 
          onClick={this.props.handleOpenModal} 
          />
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{this.props.description}</Card.Subtitle>
        <Card.Text>Horns: {this.props.horns}</Card.Text>
        <Button onClick={this.handleVotes}variant="secondary">Vote Here</Button>
        <p onClick={this.props.addHearts}>♥️Favorited {this.state.votes} Times♥️</p>
        </Card.Body>
        </Card>
         {/* <h2>{this.props.title}</h2> */}
        {/* <p>{this.props.description}</p> */}
        {/* <p>Number of Horns: {this.props.horns}</p> */}
      </article>
    )
  }
}

export default HornedBeast;