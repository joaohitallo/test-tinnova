import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00c8b3;
  height: 100vh;

  .card-content {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    border-radius: 8px;
    box-shadow: 4px 5px 34px 4px rgba(128,128,128,0.66);

    button {
      margin: 8px;
    }

  }

`;

export const Content = styled.div`
  max-height: 80%;
  overflow-x: hidden;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1rem;

  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }

`
