import { func, string } from 'prop-types';
import React, { Component } from 'react';

class Name extends Component {
  render() {
    const { value, handleChanges } = this.props;

    let error = undefined;
    if (value.length > 40) error = 'Nome muito grande';

    return (
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
          value={value}
          onChange={handleChanges}
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

Name.propTypes = {
  value: string.isRequired,
  handleChanges: func.isRequired,
};

export default Name;
