import styled from "styled-components";
import { mobile } from "../Responsive/Responsive";

export const Container = styled.div`
width: 100%;
height: 80.5vh;
display: flex;
position: relative;
overflow: hidden;
background-color: #F5F5F5;
${mobile({display:"none"})}
`

export const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
bottom: 0;
margin: auto;
cursor: pointer;
opacity: 0.3;
z-index: 999999;
`

export const Wrapper = styled.div`
height: 100%;
display: flex;
;
`

export const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
transform: translateX(${(props) => props.slideIndex * -100}vw);
transition:  all calc(1.5s) ease;
`

export const ImgContainer = styled.div`
flex: 1;
height: 100%;
margin-top:-15px;
`

export const Image = styled.img`
height: 80%;
margin-left: -15px;
`

export const InfoContainer = styled.div`
flex: 1;
`

export const Title = styled.h1`
font-size: 70px;
`

export const Description = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`

export const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
:hover{
    background-color: black;
    color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all calc(1s) ease;
}
`