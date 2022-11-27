import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import './styles.css';

const Create = () => (
  <Form className='create-form'>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='Digite seu nome' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Digite seu sobrenome' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='Eu concordo com os Termos e Condições' />
    </Form.Field>
    <Button type='submit'>Enviar</Button>
  </Form>
);

export default Create;
