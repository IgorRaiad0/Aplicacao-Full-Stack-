import './style.css'
import Lixo from '../../assets/react.svg'

function Home() {

  return (

    <div className='container'>

      <form >

        <h1>Cadastro de Users</h1>
        <input placeholder="Nome"type="text" name='nome' />
        <input placeholder="Idade" type="number" idade='idade' />
        <input placeholder="Email" type="email" name='email' />

        <button type='button'>Cadastrar</button>

      </form>

      <h2>Users Cadastrados</h2>

      <div className='card'>
        <div>
          <p>Id:</p>
          <p>Nome:</p>
          <p>Idade:</p>
          <p>Email:</p>
        </div>
        <button>
          <img src={Lixo} alt="" />
        </button>
      </div>
      
    </div>

  )
}

export default Home
