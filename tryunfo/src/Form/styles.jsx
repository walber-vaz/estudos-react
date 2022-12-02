import styled from 'styled-components';

const ContainerForm = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 1rem auto;
  border: 1px solid red;
  width: 1200px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 450px;
  background-color: rgb(248, 248, 248);
  border-radius: 0.5rem;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  color: #282c34;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    border: 1px solid #282c34;
    color: #282c34;
    background-color: rgb(248, 248, 248);
    outline: none;
  }

  input::placeholder {
    color: silver;
  }

  textarea {
    resize: none;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    border: 1px solid #282c34;
    color: #282c34;
    background-color: rgb(248, 248, 248);
    outline: none;
  }

  textarea::placeholder {
    color: silver;
  }

  select {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    border: 1px solid #282c34;
    color: #282c34;
    background-color: rgb(248, 248, 248);
    outline: none;
  }

  input[type='checkbox'] {
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #282c34;
    background-color: rgb(248, 248, 248);
    outline: none;
    position: absolute;
    margin-left: -1.5rem;
    left: 45%;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    border: 1px solid #282c34;
    color: rgb(248, 248, 248);
    background-color: #282c34;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #363c47;
    color: rgb(248, 248, 248);
  }
`;

export { ContainerForm, FormContainer, FormStyled };
