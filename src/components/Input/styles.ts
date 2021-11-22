import styled, {css} from 'styled-components';

type ContaienerProps = {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContaienerProps>`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  
  
  input {
  outline: 0;
  border-width: 0 0 2px;
  border-color: #efeeed;
  font-size: 1.5rem;
  }

  p {
    font-family:700 1.5rem 'Roboto', sans-serif;
    color:#efeeed;
    font-size: 2rem;
  }

  span {
    color: #eb4a46;
  }

  ${props => props.isFocused && css`
     input{
       border-color: #333333;
     },
    p {
      color: #333333;
    }
  `}

  ${props => props.isErrored && css`
    input {
      border-color: #eb4a46;
    }
  `}

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    p{
      font-size: 1.5rem;
    }
    input {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 479px) {
    p{
      font-size: 1rem;
    }
    input {
      font-size: 0.5rem;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance:textfield; 
  }
  

`;
