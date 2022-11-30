import { func, string } from 'prop-types';
import React, { Component } from 'react';

class SelectLang extends Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <select name="lang" value={value} onChange={handleChanges}>
        <option value="Javascript">Javascript</option>
        <option value="Typescript">Typescript</option>
      </select>
    );
  }
}

SelectLang.propTypes = {
  value: string.isRequired,
  handleChanges: func.isRequired,
};

export default SelectLang;
