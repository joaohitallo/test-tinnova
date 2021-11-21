
import { Form } from '@unform/web';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container } from './styles';

import * as Yup from 'yup'

import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import { useCallback, useRef, useState } from 'react';



interface Errors {
  [key: string]: string;
}



export function SignUp() {

  const formRef = useRef<FormHandles>(null);
  const [errors, setErrors] = useState<Errors>({})
  
  
  
  const handleSubmit = useCallback(async (data: object) => {
    try {

      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatorio'),
        email: Yup.string()
          .required('O email é obrigatorio')
          .email('Esse email é invalido'),
        cpf: Yup.string()
          .required('O cpf é obrigatorio')
          .min(11, 'Digite um cpf valido')
          .max(11, 'Digite um cpf valido'),
        telefone: Yup.string()
        .required('O telefone é obrigatorio')
        ,
      })
      await schema.validate(data, {
        abortEarly: false,
      });

     
    } catch (err) {
      console.log(err)
      setErrors(getValidationErrors(err as any)) 
      console.log(errors)
      formRef.current?.setErrors(errors)
    }
  }, []);

  
  return (
    <Container>

      <Form   ref={formRef} onSubmit={handleSubmit}> 
        <Input name="name" label="Nome Completo (sem abreviações)"err={errors.name}  type="text" />
        <Input name="email" label="E-mail" err={errors.email} type="email" />
        <Input name="cpf" label="CPF" err={errors.cpf}  type="number" />
        <Input name="telefone" label="Telefone" err={errors.telefone}  type="number" />
        <Button type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}


