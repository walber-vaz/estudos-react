import { func, string } from 'prop-types';
import React, { Component } from 'react';

class Sobrenome extends Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <label htmlFor="lastname">
        Sobrenome
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={value}
          onChange={handleChanges}
        />
      </label>
    );
  }
}

Sobrenome.propTypes = {
  value: string.isRequired,
  handleChanges: func.isRequired,
};

export default Sobrenome;
