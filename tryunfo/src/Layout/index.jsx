import React from 'react';
import Form from '../Form';
import Header from '../Header';

import { Container } from './styles';

function Layout() {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
}

export default Layout;
