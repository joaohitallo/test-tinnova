
import { Form } from '@unform/web';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container } from './styles';
import { Loading} from '../../components/Loading'

import * as Yup from 'yup'

import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import { useHistory } from 'react-router-dom'
import { useCallback, useEffect, useRef, useState } from 'react';



interface Errors {
  [key: string]: string;
}

interface user {
  name: string;
  email: string;
  cpf: string;
  phone: string;
}


const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string()
    .required('O email é obrigatorio')
    .email('Esse email é invalido'),
  cpf: Yup.string()
    .min(14, 'Digite um cpf valido')
    .max(14, 'Digite um cpf valido')
    .required('O cpf é obrigatorio'),
  phone: Yup.string()
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
  const [users, setUsers] = useState<user[]>([])


  const formRef = useRef<FormHandles>(null);
  const [errors, setErrors] = useState<Errors>({})
  const [load, setLoad] = useState(false)

  const history = useHistory();

  function toDash(){
    history.push('/dashboard')
  }

  function changeForm() {
    if (name && email && cpf && phone ){
      setButtonDisable(false)
    }
  }

  async function saveLS(data: object) {
    var newData = data

    if(localStorage.getItem('user') == null){
      const response = await fetch("https://private-9d65b3-tinnova.apiary-mock.com/users")
      const data = await response.json()
      setUsers(await (data))
      
        localStorage.setItem('user', JSON.stringify(users))
      
      
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
        
      }, 3000)
      setLoad(true)
      setName('')
      setEmail('')
      setCpf('')
      setPhone('')
      
      setTimeout(() => {
        setButtonDisable(true)
      }, 2000)

    } catch (err) {
      console.log(err)
      setErrors(getValidationErrors(err as any)) 
      console.log(errors)
      formRef.current?.setErrors(errors)
    }
  }, []);

  useEffect(() =>{
    const fetchData = async () => {
      
    }
    fetchData()

  },[])
  
  return (
    <Container>
      
      <Form onChange={() => changeForm()} ref={formRef} onSubmit={handleSubmit}> 
        <h1>Cadastro</h1>
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
          onChange={(e) => setCpf(e.target.value)}
          maxLength={14}
        />
        <Input 
          name="phone" 
          label="Telefone" 
          err={errors.telefone} 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={14}
        />
        <Button type="submit" disable={buttonDisable}>
          {!!load ? <Loading /> : 'Cadastro'}
        </Button>
        <Button onClick={toDash} disable={false}>
          Usuarios
        </Button>
      </Form>
    </Container>
  );
}


