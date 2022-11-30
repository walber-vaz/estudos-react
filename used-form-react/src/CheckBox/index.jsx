import { bool, func } from 'prop-types';
import React, { Component } from 'react';

class CheckBox extends Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <input
        type="checkbox"
        name="confirm"
        id="confirm"
        value={value}
        onChange={handleChanges}
      />
    );
  }
}

CheckBox.propTypes = {
  value: bool.isRequired,
  handleChanges: func.isRequired,
};

export default CheckBox;
