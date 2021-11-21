
import React,{ ButtonHTMLAttributes} from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &{
  
}

 export function Button({ children ,...rest}: ButtonProps) {
  return (
    <Container>
      <p></p>
      <button
        {...rest}
      >
        {children}
      </button>
    </Container>
  );
};


