import React from 'react';

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

  render() {
    return (
      <article>

        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.title} />
        <p>{this.props.description}</p>
        <p>Number of Horns: {this.props.horns}</p>
        <p onClick={this.handleVotes}>Vote here</p>
        <p>{this.state.votes} Votes</p>
      </article>
    )
  }
}

export default HornedBeast;