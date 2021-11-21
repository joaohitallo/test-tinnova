
import { Form } from '@unform/web';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container } from './styles';
import * as Yup from 'yup';
import { useCallback } from 'react';



const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string()
    .required('O email é obrigatorio')
    .email('Esse email é invalido'),
  cpf: Yup.number()
    .required('O cpf é obrigatorio')
    .min(11, 'Digite um cpf valido')
    .max(11, 'Digite um cpf valido'),
  telefone: Yup.number()
  .required('O telefone é obrigatorio')
  ,
})


export function SignUp() {
  
  const handleSubmit = useCallback(async (data: object) => {
    try {
      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (err) {
      console.log(err)
    }
  }, []);

  
  return (
    <Container>

      <Form onSubmit={handleSubmit}> 
        <Input name="Nome completo (sem abreviações)" type="text" />
        <Input name="E-mail" type="email" />
        <Input name="CPF" type="text" />
        <Input name="Telefone" type="tel" />
        <Button type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}


