import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  
}

export function Input({  ...rest }: InputProps) {
  return (
    <Container>
      <input {...rest}/>
    </Container>
  );
};


