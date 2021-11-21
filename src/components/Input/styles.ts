import styled, {css} from 'styled-components';

type ContaienerProps = {
  isFocused: boolean;
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

  ${props => props.isFocused && css`
     input{
       border-color: #333333;
     },
    p {
      color: #333333;
    }
  `}

  

`;
