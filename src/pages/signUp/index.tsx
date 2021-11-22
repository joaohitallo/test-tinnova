
import { Form } from '@unform/web';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container } from './styles';

import * as Yup from 'yup'

import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import {mask} from '../../utils/getMaskInput'
import { useCallback, useRef, useState } from 'react';



interface Errors {
  [key: string]: string;
}



const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string()
    .required('O email é obrigatorio')
    .email('Esse email é invalido'),
  cpf: Yup.string()
    //.min(11, 'Digite um cpf valido')
    //.max(11, 'Digite um cpf valido')
    .required('O cpf é obrigatorio'),
  telefone: Yup.string()
  .min(14, 'Digite um telefone valido')
  .max(14, 'Digite um telefone valido')
  .required('O telefone é obrigatorio')
  ,
})

export function SignUp() {
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')



  const formRef = useRef<FormHandles>(null);
  const [errors, setErrors] = useState<Errors>({})

  function saveLS(data: object) {
    var newData = data

    if(localStorage.getItem('user') == null){
      localStorage.setItem('user', '[]');
    }

    var oldData = JSON.parse(localStorage.getItem('user') || '[]')
    oldData.push(newData);

    
    localStorage.setItem('user', JSON.stringify(oldData))
  }

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})
      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data)
      saveLS(data);
      
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
        <Input 
          name="name" 
          label="Nome Completo (sem abreviações)"
          err={errors.name}  
          type="text" 
        />
        <Input 
          name="email" 
          label="E-mail" 
          err={errors.email} 
          type="email" 
        />
        <Input 
          name="cpf" 
          label="CPF" 
          err={errors.cpf}  
          value={cpf}
          onChange={(e) => setCpf(mask(e.target.value,'cpf'))}
          maxLength={14}
        />
        <Input 
          name="telefone" 
          label="Telefone" 
          err={errors.telefone} 
          value={phone}
          onChange={(e) => setPhone(mask(e.target.value,'phone'))}
          maxLength={14}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}


