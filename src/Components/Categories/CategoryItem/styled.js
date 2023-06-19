import styled from "styled-components";
import { mobile } from "../../Responsive/Responsive";



export const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
position: relative;
`

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({width: "97%",height: "25vh", objectFit: "cover"})}
`

export const Title = styled.h1`
background-color: black;
padding: 20px;
color: white;
margin-bottom: 20px;
`

export const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Button = styled.button`
background-color: white;
color: black;
border: none;
font-weight: 600;
padding: 10px;
:hover{
    background-color: black;
    color: white;
    transition: all calc(1s) ease;
    cursor: pointer;
}
`

