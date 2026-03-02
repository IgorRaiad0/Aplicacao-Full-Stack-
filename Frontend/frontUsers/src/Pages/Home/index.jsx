import './style.css'
import Lixo from '../../assets/react.svg'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'

function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  useEffect(() => {
    getUsers()
  }, [])

  async function getUsers() {
    const usersFromApi = await api.get('/home')
    setUsers(usersFromApi.data)
  }

  async function createUser() {

    await api.post('/create', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()

  }


  return (

    <div className='container'>

      <form >

        <h1>Cadastro de Users</h1>
        <input placeholder="Nome" type="text" name='nome' ref={inputName} />
        <input placeholder="Idade" type="number" idade='idade' ref={inputAge} />
        <input placeholder="Email" type="email" name='email' ref={inputEmail} />

        <button type='button' onClick={createUser}>Cadastrar</button>

      </form>

      <h2>Users Cadastrados</h2>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Id:{user.id}</p>
            <p>Nome:{user.name}</p>
            <p>Idade:{user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img src={Lixo} alt="" />
          </button>
        </div>

      ))}


    </div>

  )
}

export default Home
