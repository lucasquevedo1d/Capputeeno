import React, { useState } from 'react'
import { Agreement, Button, Container, Form, Input, Link, Title, Wrapper } from './styled'
import Navbar from '../../Components/Navbar/Navbar'
import { goToHomePage, goToProductList, goToRegister } from '../../Router/Coordinator'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


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
    const storedArray = JSON.parse(window.localStorage.getItem(("signup")))
    const getUserEmail = storedArray.map((i) =>{
      return i[0].email === email
    })

    const getUserPassword = storedArray.map((i) =>{
      return i[0].password === password
    })

   if(!getUserEmail){
    return Swal.fire({  
    icon: 'Error',
    title: "Usuário não encontrado",
    color:"black",
    iconColor:"green"
  })
   }else if(!getUserPassword){
    return Swal.fire({  
      icon: 'Error',
      title: "Usuário não encontrado",
      color:"black",
      iconColor:"green"
    })
   }else{
    goToHomePage(navigate) 
    Swal.fire({  
      icon: 'success',
      title: "Bem vindo a Capputeeno",
      color:"black",
      iconColor:"green"
    })
   }

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
                required
                />
                <Input 
                placeholder='Senha'
                type='password'
                value={password}
                onChange={onchangePassword}
                required
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