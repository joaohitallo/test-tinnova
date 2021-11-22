
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
  const [users, setUsers] = useState<user[]>([])
  var user: user[] = [];

  function remove(name: string) {
    user = user.filter(item => 
      item.name !== name
      ) 
    setUsers(user)
    localStorage.setItem('user', JSON.stringify(user));  
  }

  useEffect(() => {
    const fetchData = async () => {
      
        if(localStorage.getItem('user') != null){
          let userLS = JSON.parse(localStorage.getItem('user') || '{}')
          for (const key in userLS) {
            user.push(userLS[key])
          } 
        }
        setUsers(user)

        
    }
    fetchData()
  }, [])
  
  
  return (
    <Container>
      <div>
      {users.map(dados => (
        <CardUser 
          key={dados.name}
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


