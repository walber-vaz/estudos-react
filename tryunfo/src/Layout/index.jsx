import React from 'react';
import Form from '../Form';
import Header from '../Header';

import { bool, func, string } from 'prop-types';
import { Container } from './styles';

function Layout(props) {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    // hasTrunfo,
    isSaveButtonDisabled,
    onInputChange,
    onSaveButtonClick,
  } = props;

  return (
    <Container>
      <Header />
      <Form
        cardName={cardName}
        cardDescription={cardDescription}
        cardAttr1={cardAttr1}
        cardAttr2={cardAttr2}
        cardAttr3={cardAttr3}
        cardImage={cardImage}
        cardRare={cardRare}
        cardTrunfo={cardTrunfo}
        // hasTrunfo={hasTrunfo}
        isSaveButtonDisabled={isSaveButtonDisabled}
        onInputChange={onInputChange}
        onSaveButtonClick={onSaveButtonClick}
      />
    </Container>
  );
}

Layout.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  // hasTrunfo: bool.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};

export default Layout;
