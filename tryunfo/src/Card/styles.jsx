import styled from 'styled-components';

const ContainerCard = styled.div`
  background: hsla(220, 13%, 18%, 1);
  background: linear-gradient(
    225deg,
    hsla(220, 13%, 18%, 1) 0%,
    hsla(165, 100%, 20%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(220, 13%, 18%, 1) 0%,
    hsla(165, 100%, 20%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(220, 13%, 18%, 1) 0%,
    hsla(165, 100%, 20%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#282C34", endColorstr="#00644B", GradientType=1 );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  border-radius: 0.5rem;
  border: 0.5rem solid #f4ff5c;
  color: white;
  padding: 1rem;
  margin-top: -5.5rem;
  height: 600px;
  box-shadow: 12px 18px 5px 1px rgba(0, 0, 0, 0.5);

  h2 {
    font-size: 2rem;
    margin: 0 0 1rem 0;
    border-bottom: white 0.1rem solid;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
    border-top-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin: 0;
  }

  #container-attr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  #container-attr p {
    font-size: 1.5rem;
    margin: 0;
    border-top-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
    border: 0.1rem solid #f4ff5c;
    color: #f4ff5c;
    font-weight: 700;
    padding: 1.5rem;
  }

  #super-trunfo {
    font-size: 1.8rem;
    margin: 0;
    color: #f4ff5c;
    font-weight: 700;
  }
`;

export { ContainerCard };

// CardHeader #282c34
