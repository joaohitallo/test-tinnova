
import { Form } from '@unform/web';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container } from './styles';
import { Loading} from '../../components/Loading'

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')
  const [buttonDisable, setButtonDisable] = useState(true)


  const formRef = useRef<FormHandles>(null);
  const [errors, setErrors] = useState<Errors>({})
  const [load, setLoad] = useState(false)

  function test() {
    if (name && email && cpf && phone ){
      setButtonDisable(false)
    }
  }

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
      setTimeout(() => {
        setLoad(false)
        formRef.current?.setErrors({})
        schema.validate(data, {
          abortEarly: false,
        });

        console.log(data)
        saveLS(data);
        
      }, 300)
      setLoad(true)

    } catch (err) {
      console.log(err)
      setErrors(getValidationErrors(err as any)) 
      console.log(errors)
      formRef.current?.setErrors(errors)
    }
  }, []);

  
  return (
    <Container>

      <Form onChange={() => test()} ref={formRef} onSubmit={handleSubmit}> 
        <Input 
          name="name" 
          label="Nome Completo (sem abreviações)"
          err={errors.name}  
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input 
          name="email" 
          label="E-mail" 
          err={errors.email} 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <Button type="submit" disable={buttonDisable}>
          {!!load ? <Loading /> : 'Cadastro'}
        </Button>
      </Form>
    </Container>
  );
}


