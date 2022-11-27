import axios from 'axios';
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import './styles.css';


function Create() {
  const [name, setName] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  function postData() {
    axios.post(`https://6383e28d4ce192ac604c6b78.mockapi.io/fakeData`, {
      name: name,
      sobrenome: sobrenome,
      checkbox: checkbox
    });
  };

  return (
    <div>
      <Form className='create-form'>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Digite seu sobrenome' onChange={(e) => setSobrenome(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Eu concordo com os Termos e Condições' onChange={() => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button type='submit' onClick={postData}>Enviar</Button>
      </Form>
    </div>
  )
};

export default Create;
