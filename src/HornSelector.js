import React from 'react';
import Form from "react-bootstrap/Form";


class HornSelector extends React.Component {
 
  handleChange = (event) => {
    event.preventDefault();
    this.props.chosenByHorns(event.target.value);
  }

  render() {
    return (
    <Form.Group>
      <Form.Label>Select to sort by number of horns.</Form.Label>
      <Form.Select onChange={this.handleChange}>
        <option value="">Please select to sort by number of horns</option>
        <option value="1">1 Horn</option>
        <option value="2">2 Horns</option>
        <option value="3">3 Horns</option>
        <option value="100">All the Horns</option>
      </Form.Select>
    </Form.Group>
    )
  }
}

export default HornSelector;