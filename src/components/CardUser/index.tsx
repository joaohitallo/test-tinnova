

import { Container } from './styles';

interface CardUserProps {
  name: string;
  email: string;
  cpf: string;
  telefone: string;
}

function CardUser({ name, email, cpf, telefone}: CardUserProps) {
  return (
    <Container>
      <div>
          <section>
            <p>Nome: {name}</p>
            <p>E-mail: {email}</p>
          </section>
          <section>
            <p>Cpf: {cpf}</p>
            <p>Telefone: {telefone}</p>
          </section>
      </div>
    </Container>
  );
};

export default CardUser;
