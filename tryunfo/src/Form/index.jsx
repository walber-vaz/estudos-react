import React from 'react';
import { ContainerForm, FormContainer, FormStyled } from './styles';

function Form() {
  return (
    <ContainerForm>
      <FormContainer>
        <FormStyled>
          <h2>Adicione sua carta</h2>
          <label htmlFor="">
            Nome da carta:
            <input
              type="text"
              data-testid="name-input"
              placeholder="Digite nome da sua carta"
            />
          </label>
          <label htmlFor="">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              placeholder="Digite a descrição da sua carta"
              spellCheck="true"
              lang="pt-BR"
            />
          </label>
          <label htmlFor="">
            Atributo 1:
            <input
              type="number"
              data-testid="attr1-input"
              placeholder="Digite o valor do atributo 1"
            />
          </label>
          <label htmlFor="">
            Atributo 2:
            <input
              type="number"
              data-testid="attr2-input"
              placeholder="Digite o valor do atributo 2"
            />
          </label>
          <label htmlFor="">
            Atributo 3:
            <input
              type="number"
              data-testid="attr3-input"
              placeholder="Digite o valor do atributo 3"
            />
          </label>
          <label htmlFor="">
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              placeholder="Digite o link da imagem"
            />
          </label>
          <label htmlFor="">
            Raridade:
            <select data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="">
            Super Trunfo:
            <input type="checkbox" data-testid="trunfo-input" />
          </label>
          <button type="submit" data-testid="save-button">
            Salvar
          </button>
        </FormStyled>
      </FormContainer>
    </ContainerForm>
  );
}

export default Form;
