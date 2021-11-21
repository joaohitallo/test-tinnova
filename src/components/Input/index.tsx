import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  err: string;
}

export function Input({  name, label, err, ...rest }: InputProps) {
  const inputRef = useRef(null);
  const [ isFocused, setIsFocused] = useState(false)
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
    
  }, [fieldName, registerField]);
  
  return (
    <Container isErrored={!!err} isFocused={isFocused}>
      <p>{label}</p>
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
        {...rest}
      />
     <span>{err}</span>
      
    </Container>
  );
};


