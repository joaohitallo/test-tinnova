import { Container } from './styles';
import loading from '../../assets/Rolling-1s-200px.svg'



export function Loading() {
  return (
    <Container>
      <img src={loading} alt="loading" />
    </Container>
  );
};


