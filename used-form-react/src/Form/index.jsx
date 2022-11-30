import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  const handleChangeName = (event) => {
    setName({ name: event.target.value });
  };

  const handleChangeSobrenome = (event) => {
    setLastname({ lastname: event.target.value });
  };

  return (
    <div>
      <h1>React Form</h1>
      <form>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => handleChangeName(event)}
          />
        </label>
        <label htmlFor="lastname">
          Sobrenome
          <input
            type="text"
            name="sobrenome"
            id="sobrenome"
            value={lastname}
            onChange={(event) => handleChangeSobrenome(event)}
          />
        </label>
        <textarea />
        <select>
          <option value="Javascript">Javascript</option>
          <option value="Typescript">Typescript</option>
        </select>
      </form>
    </div>
  );
}

export default Form;
