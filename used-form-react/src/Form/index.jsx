import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastname: '',
      description: '',
      lang: '',
      confirm: false,
    };

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges({ target: { name, value, type, checked } }) {
    value = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, lastname, lang, description, confirm } = this.state;
    return (
      <div>
        <h1>React Form</h1>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChanges}
            />
          </label>
          <label>
            Sobrenome
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastname}
              onChange={this.handleChanges}
            />
          </label>
          <textarea
            name="description"
            value={description}
            onChange={this.handleChanges}
          />
          <select name="lang" value={lang} onChange={this.handleChanges}>
            <option value="Javascript">Javascript</option>
            <option value="Typescript">Typescript</option>
          </select>
          <input
            type="checkbox"
            name="confirm"
            id="confirm"
            value={confirm}
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

export default Form;
