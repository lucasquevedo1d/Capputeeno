import styled from "styled-components";
import Urban from "../../img/urban.jpg"
import { mobile } from "../../Components/Responsive/Responsive";

export const Container = styled.div`
height: 95vh;
width: 100%;
background: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.8)), 
url("https://images.unsplash.com/photo-1536640387894-cbc452a79a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=430&q=80");
display: flex;
align-items: center;
justify-content: center;
`

export const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({width:"75%"})}
`

export const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

export const Title = styled.h1`

`
export const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
${mobile({width:"80%", marginLeft:"10px"})}
`

export const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
export const Button = styled.button`
padding: 10px;
background-color: black;
color: orange;
font-weight: 500;
/* margin-top: 30px; */
:hover{
    background-color: white;
    color: black;
    cursor: pointer;
    font-weight: 500;
    transition: all calc(1s) ease;
}
`

