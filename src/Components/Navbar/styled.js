import styled from "styled-components";
import { mobile } from "../Responsive/Responsive";

export const Container = styled.div`
height: 60px;
${mobile({height:"50px"})}
position: sticky;
`

export const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
${mobile({padding:"10px 0px"})}

`

export const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`

export const Center = styled.div`
flex: 1;

`

export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2, justifyContent:"center"})}
`



export const Input = styled.input`
border: none;
background-color: white;
color: black;
${mobile({width:"50px", marginLeft:"-3px"})}

`

export const Logo = styled.h1`
font-weight: bold;
text-align: center;
&:hover{
    transition: all 1s ease;
    transform: scale(1.1);
    cursor: pointer;
}
${mobile({marginLeft:"12px", fontSize:"20px"})}
`
export const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
&:hover{
    transition: all 1s ease;
    transform: scale(1.1);
}
${mobile({fontSize:"12px", marginLeft:'10px'})}

`