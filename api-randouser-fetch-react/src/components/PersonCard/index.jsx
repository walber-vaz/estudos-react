import React, { Component } from 'react'
import { shape, number, string } from 'prop-types';

class PersonCard extends Component {
  render() {
    const { person: { name, email, age, image } } = this.props;

    return (
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{age}</p>
        <img src={ image } alt={ name } />
      </div>
    )
  }
}

PersonCard.propTypes = {
  person: shape({
    name: string,
    email: string,
    age: number,
    image: string,
  }).isRequired,
};

export default PersonCard