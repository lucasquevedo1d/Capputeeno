import styled from "styled-components";
import { mobile } from "../../Responsive/Responsive";
export const Info = styled.div`
opacity: 0;
margin-top: -9px;
width: 102.5%;
height: 93%;
top: 0;
left: 0;
position: absolute;
z-index: 3;
background-color: rgb(0,0,0,0.2);
display: flex;
align-items: center;
justify-content: center;
`

export const Container = styled.div`
flex: 1;
margin: 15px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
&:hover ${Info}{
    opacity: 1;
    transition: all calc(1.5s) ease;
    cursor: pointer;
}
`
export const Image = styled.img`
height: 325px;
z-index: 2;
${mobile({width:"98%"})}
`

export const Circle = styled.div`
p{
    ${mobile({marginLeft:"20px"})}

}
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

export const Title = styled.h1`
display: flex;
align-items: center;
margin-left: 45%;
margin-top: 120px;
${mobile({marginLeft:"35%"})}

`