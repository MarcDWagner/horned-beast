import React from 'react';
import Form from 'react-bootstrap/Form';


class Header extends React.Component{
  render(){
    return(
      <header>
        <h1>Horned Beasts</h1>
        <Form.Group>
            <legend>Selected Numbers</legend>
            <Form.Select name="input" id="" onChange={this.handleSelect}>
              <option value="empty">Please select to sort by number of horns</option>
              <option value="one">1 Horn</option>
              <option value="two">2 Horns</option>
              <option value="three">3 Horns</option>
              <option value="hundred">100 Horns</option>
            </Form.Select>
          </Form.Group>
      </header>
    )

  }
}

export default Header;
