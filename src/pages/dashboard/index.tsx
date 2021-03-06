import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import CardUser from '../../components/CardUser';
import { Button } from '../../components/Button';

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

  const history = useHistory();

  function toSignIn(){
    history.push('/')
  }

  async function remove(cpf: string) {
    setTimeout(() => {
      user = user.filter(item => 
        item.cpf !== cpf
        ) 
      
      setUsers(user)
      localStorage.setItem('user', JSON.stringify(user));
      console.log('ahhh')
    }, 2000)
      
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
          await fetch("https://private-9d65b3-tinnova.apiary-mock.com/users")
          .then(response => response.json())
          .then(data => setUsers(data));
          for (const key in users) {
            user.push(users[key])
          } 

        }
        
    }
    fetchData()
  }, [user])
  
  
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
        <button onClick={() => remove(dados.cpf)}>
          excluir
        </button>
        <button >
          Editar
        </button>
      </div>
      ))}
      <Button onClick={toSignIn} disable={false}>
          Cadastro
        </Button>
      </Content>
      
    </Container>
  );
}


