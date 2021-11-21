import styled, {css} from 'styled-components';

type ContaienerProps = {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContaienerProps>`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #efeeed;
  
  input {
  outline: 0;
  border-width: 0 0 2px;
  border-color: #efeeed;
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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance:textfield; 
  }
  

`;
