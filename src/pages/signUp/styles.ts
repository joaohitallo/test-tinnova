import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00c8b3;
  height: 100vh;


  form {
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;

    h1 {
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    form {
      padding: 1.5rem;
    }
  }
  @media only screen and (max-width: 400px) {
    form {
      padding: 1rem;
    }
  }
`;
