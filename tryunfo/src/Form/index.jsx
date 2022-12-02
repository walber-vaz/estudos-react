import { bool, func, string } from 'prop-types';
import React from 'react';
import { ContainerForm, FormContainer, FormStyled } from './styles';

function Form(props) {
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
    <ContainerForm>
      <FormContainer>
        <FormStyled>
          <h2>Adicione sua carta</h2>
          <label htmlFor="cardName">
            Nome da carta:
            <input
              type="text"
              data-testid="name-input"
              placeholder="Digite nome da sua carta"
              id="cardName"
              name="cardName"
              value={cardName}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              placeholder="Digite a descrição da sua carta"
              spellCheck="true"
              lang="pt-BR"
              id="cardDescription"
              name="cardDescription"
              value={cardDescription}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="cardAttr1">
            Atributo 1:
            <input
              type="number"
              data-testid="attr1-input"
              placeholder="Digite o valor do atributo 1"
              id="cardAttr1"
              name="cardAttr1"
              value={cardAttr1}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="cardAttr2">
            Atributo 2:
            <input
              type="number"
              data-testid="attr2-input"
              placeholder="Digite o valor do atributo 2"
              id="cardAttr2"
              name="cardAttr2"
              value={cardAttr2}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="cardAttr3">
            Atributo 3:
            <input
              type="number"
              data-testid="attr3-input"
              placeholder="Digite o valor do atributo 3"
              id="cardAttr3"
              name="cardAttr3"
              value={cardAttr3}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="cardImage">
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              placeholder="Digite o link da imagem"
              id="cardImage"
              name="cardImage"
              value={cardImage}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="cardRare">
            Raridade:
            <select
              data-testid="rare-input"
              id="cardRare"
              name="cardRare"
              value={cardRare}
              onChange={onInputChange}
            >
              <option defaultValue value="normal">
                Normal
              </option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            Super Trunfo:
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="cardTrunfo"
              name="cardTrunfo"
              value={cardTrunfo}
              onChange={onInputChange}
            />
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={isSaveButtonDisabled}
            onClick={onSaveButtonClick}
          >
            Salvar
          </button>
        </FormStyled>
      </FormContainer>
    </ContainerForm>
  );
}

Form.propTypes = {
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

export default Form;
