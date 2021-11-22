
import { useEffect, useState } from 'react';
import CardUser from '../../components/CardUser';

import { Container } from './styles';

interface user {
  name: string;
  email: string;
  cpf: string;
  telefone: string;
}

export function Dashboard() {
  const [users, setUsers] = useState([])
  const user: user[] = [];
  
  useEffect(() => {
    const fetchData = async () => {
      
        if(localStorage.getItem('user') != null){
          let userLS = JSON.parse(localStorage.getItem('user') || '{}')
          for (const key in userLS) {
            user.push(userLS[key])
          } 
        }
        console.log(user[1].name)
      
    }
    fetchData()
  }, [])
  
  
  return (
    <Container>
      <div>
      { user.map(dados => (
        <CardUser
          //key={dados.cpf}
          name={dados.name}
          email={dados.email}
          cpf={dados.cpf}
          telefone={dados.telefone}
        />
      ))}
      </div>
    </Container>
  );
}


