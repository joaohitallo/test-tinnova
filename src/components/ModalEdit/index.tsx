import { useState, useRef, useCallback, useEffect } from 'react';
import Modal from 'react-modal'


import { Form } from '@unform/web';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


import * as Yup from 'yup'

import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import {mask} from '../../utils/getMaskInput'

interface ModalEditProps {
  isOpen: boolean;
  isRequestClose: boolean;
}

interface user {
  name: string;
  email: string;
  cpf: string;
  phone: string;
}


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
  phone: Yup.string()
  .min(14, 'Digite um telefone valido')
  .max(14, 'Digite um telefone valido')
  .required('O telefone é obrigatorio')
  ,
})


export function ModalEdit({isOpen, isRequestClose}: ModalEditProps) {
  const [users, setUsers] = useState<user[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')

  const formRef = useRef<FormHandles>(null);
  const [errors, setErrors] = useState<Errors>({})
  const [modalIsOpen, setIsOpen] = useState(false);

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
        formRef.current?.setErrors({})
        schema.validate(data, {
          abortEarly: false,
        });

        console.log(data)
        saveLS(data);
        
      }, 3000)
      
      setName('')
      setEmail('')
      setCpf('')
      setPhone('')
      

    } catch (err) {
      console.log(err)
      setErrors(getValidationErrors(err as any)) 
      console.log(errors)
      formRef.current?.setErrors(errors)
    }
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    > 
      <button onSubmit={closeModal}>X</button>
      <Form ref={formRef} onSubmit={handleSubmit} > 
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
          onChange={(e) => setPhone(mask(e.target.value,'phone'))}
          maxLength={14}
        />
        <Button type="submit" disable={false}>
          Salvar
        </Button>
      </Form>

    </Modal>

  );
};

