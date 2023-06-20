import React, { useState } from 'react'
import { Agreement, Button, Container, Form, Input, Title, Wrapper } from './styled'
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToLogin, goToProductList } from '../../Router/Coordinator'
import Swal from 'sweetalert2'

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
  
  function formatFullName(value) {
    // Remove espaços em branco extras no início e no final do valor
    let fullName = value.trim() || undefined;
  
    // Remove espaços extras entre as palavras
    fullName = fullName.replace(/\s+/g, ' ');
  
    // Converte a primeira letra de cada palavra para maiúscula e as demais letras para minúscula
    fullName = fullName.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) {
      return $1.toUpperCase();
    });
  
    return fullName;
  }


  const onSubmitForm = () => {

    const signup = [{
      email: email,
      name: name,
      password: password
    }]

    const storedArrays = JSON.parse(localStorage.getItem("signup")) || [];
    if(name.length < 6){
      return  Swal.fire({
        icon: 'Error',
        title: "insira o nome completo",
        color: "black",
        iconColor: "green"
      })
    }else{
      storedArrays.push(signup)
    }

    localStorage.setItem("signup", JSON.stringify(storedArrays));
    Swal.fire({
      icon: 'success',
      title: "Usuário cadastrado com sucesso",
      color: "black",
      iconColor: "green"
    })
     formatFullName(name);
     
    goToHomePage(navigate)
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Criar Conta</Title>
          <Form onSubmit={onSubmitForm}>
            <Input
              placeholder='Nome'
              type='text'
              value={name}
              onChange={onchangeName}
              required
              id='fullNameInput'
              onBlur={() => setName(formatFullName(name))}
            />
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
            <br />
            <Button>Enviar</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Register