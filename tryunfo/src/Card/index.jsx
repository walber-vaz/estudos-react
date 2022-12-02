import { bool, string } from 'prop-types';
import React from 'react';

import { ContainerCard } from './styles';

function Card(props) {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
  } = props;

  return (
    <ContainerCard>
      <h2 data-testid="name-card">{cardName}</h2>
      {cardImage ? (
        <img src={cardImage} alt={cardName} data-testid="image-card" />
      ) : (
        <img
          src="https://via.placeholder.com/150"
          alt={cardName}
          data-testid="image-card"
        />
      )}
      <p data-testid="description-card">{cardDescription}</p>
      <div id="container-attr">
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
      </div>
      <p data-testid="rare-card">{cardRare}</p>
      {cardTrunfo ? (
        <p data-testid="trunfo-card" id="super-trunfo">
          Super Trunfo
        </p>
      ) : null}
    </ContainerCard>
  );
}

Card.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
};

export default Card;
