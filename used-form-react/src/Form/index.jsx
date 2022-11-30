import React, { Component } from 'react';
import CheckBox from '../CheckBox';
import Description from '../Description';
import Name from '../Name';
import SelectLang from '../SelectLang';
import Sobrenome from '../Sobrenome';

const indexState = {
  name: '',
  lastname: '',
  description: '',
  lang: '',
  confirm: false,
};

class Form extends Component {
  state = { ...indexState };

  handleChanges = ({ target: { name, value, type, checked } }) => {
    value = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, lastname, lang, description, confirm } = this.state;
    return (
      <div>
        <h1>React Form</h1>
        <form>
          <Name value={name} handleChanges={this.handleChanges} />
          <Sobrenome value={lastname} handleChanges={this.handleChanges} />
          <Description value={description} handleChanges={this.handleChanges} />
          <SelectLang value={lang} handleChanges={this.handleChanges} />
          <CheckBox value={confirm} handleChanges={this.handleChanges} />
        </form>
      </div>
    );
  }
}

export default Form;
