import React, { useState } from 'react'
import { Agreement, Button, Container, Form, Input, Title, Wrapper } from './styled'
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { goToProductList } from '../../Router/Coordinator'

const Register = () => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")


  const onchangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onchangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onchangeName = (event) => {
    setName(event.target.value)
  }
  const navigate = useNavigate()
  const onSubmitForm = () =>{
    
    const storedArr = JSON.parse(localStorage.getItem("arr")) || [];
    // storedArr.push(newArray);
  
    localStorage.setItem("arr", JSON.stringify(storedArr));
  
     alert("Usuário cadastrado com sucesso")
  }
  return (
    <div>
        <Navbar/>
    <Container>
        <Wrapper>
            <Title>Criar Conta</Title>
                <Form onSubmit={onSubmitForm}>
                    <Input 
                    placeholder='Nome'
                    type='text'
                    value={name}
                    onChange={onchangeName}
                    />
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
                    <br/>
                    <Button>Enviar</Button>
                </Form>
        </Wrapper>
    </Container>
    </div>
  )
}

export default Register