


import { Form } from '@unform/web';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container } from './styles';

export function SignUp() {
  
  function handleSubmit(data: object): void {
    console.log(data)
  }

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


