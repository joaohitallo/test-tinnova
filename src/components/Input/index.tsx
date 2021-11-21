import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
}

export function Input({  name, ...rest }: InputProps) {
  return (
    <Container>
      {name}
      <input {...rest}/>
    </Container>
  );
};


