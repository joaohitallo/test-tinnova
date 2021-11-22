
import { useEffect, useState } from 'react';
import CardUser from '../../components/CardUser';

import { Container, Content } from './styles';

interface user {
  name: string;
  email: string;
  cpf: string;
  phone: string;
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
          setUsers(user)
        } else {
          fetch("https://private-9d65b3-tinnova.apiary-mock.com/users")
          .then(response => response.json())
          .then(data => setUsers(data));
        }
        
    }
    fetchData()
  }, [])
  
  
  return (
    <Container>
      <Content>
      {users.map(dados => (
      <div className="card-content" key={dados.name}>
        <CardUser 
          name={dados.name}
          email={dados.email}
          cpf={dados.cpf}
          telefone={dados.phone}
        />
        <button onClick={() => remove(dados.name)}>
          excluir
        </button>
      </div>
      ))}
      </Content>
    </Container>
  );
}


