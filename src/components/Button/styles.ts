import styled, { css } from 'styled-components';

type ContaienerProps = {
  isDisable: boolean;
}

export const Container = styled.div<ContaienerProps>`
  display: flex;
  justify-content: center;
  padding: 0 1.5rem;
  height: 4rem;
  background: var(--green);
  color: #FFF;
  border-radius: 0.25rem;
  border: 0;
  
  margin-top: 1.5rem;
  font-weight: 600;

  button {
    height: 4rem;
    width: 80%;
    font-size: 1.5rem;
    padding: 18px;
    border: 0;
    border-radius: 18px;
    background-color: #00c8b3;
    color: #ffffff;

    ${props => props.isDisable && css`
     background-color: #f6f6f6;
     color:#dddcdc;
    `}

    ${props => !props.isDisable && css`
      transition: filter 0.2s;  
      &:hover {
        filter: brightness(0.7);
      }
    `}
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
      button {
        height: 3.5rem;
        font-size: 1.2rem;
      }
    }
    @media only screen and (max-width: 479px) {
      button {
        height: 3rem;
        font-size: 1rem;
      }
    }
`;
