import { func, string } from 'prop-types';
import React, { Component } from 'react';

class Description extends Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <textarea name="description" value={value} onChange={handleChanges} />
    );
  }
}

Description.propTypes = {
  value: string.isRequired,
  handleChanges: func.isRequired,
};

export default Description;
