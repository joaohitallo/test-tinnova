import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1.5rem;
  height: 4rem;
  background: var(--green);
  color: #FFF;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;

  button {
    padding: 18px;
    border: 0;
    border-radius: 18px;
    background-color: #00c8b3;
    color: #ffffff;


    transition: filter 0.2s;
        
    &:hover {
      filter: brightness(0.7);
    }
  }
`;
