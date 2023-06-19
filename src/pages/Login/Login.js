import React, { useState } from 'react'
import { Agreement, Button, Container, Form, Input, Link, Title, Wrapper } from './styled'
import Navbar from '../../Components/Navbar/Navbar'
import { goToProductList, goToRegister } from '../../Router/Coordinator'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const onchangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onchangePassword = (event) => {
    setPassword(event.target.value)
  }


  const navigate = useNavigate()
  
  
  const onSubmitForm = () =>{
    // goToProductList(navigate)
  }
  return (
    <div>
    <Navbar/>
<Container>
    <Wrapper>
        <Title>Login</Title>
            <Form onSubmit={onSubmitForm}>
                <Input 
                placeholder='Email'
                type='email'
                value={email}
                onChange={onchangeEmail}
                />
                <Input 
                placeholder='Senha'
                type='password'
                value={password}
                onChange={onchangePassword}
                />
                <Agreement>
                Ao criar uma conta, dou consentimento ao tratamento dos meus dados pessoais com a política de <b>Politica de Privacidade</b>
                </Agreement>
                <Button>Entrar</Button>
                <Link onClick={() => goToRegister(navigate)}>Não tem cadastro? Clique aqui</Link>

            </Form>
    </Wrapper>
</Container>
</div>
  )
}

export default Login