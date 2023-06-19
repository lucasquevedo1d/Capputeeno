import styled from "styled-components";
import { mobile } from "../Responsive/Responsive";

export const Container = styled.div`
display: flex;
background-color: #F5F5F5;
color: black;
padding: 20px;
height: 40vh;
${mobile({flexDirection:"column", minHeight:"55vh", marginTop:"25px"})}
margin-top: 200px;

`
export const Left = styled.div`
flex: 1;
`
export const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display:"none"})}

`

export const Title = styled.h3`
margin-bottom: 30px;

`
export const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
`
export const LisItem = styled.li`
margin-bottom: 20px;
`

export const Right = styled.div`
flex: 1;
padding: 20px;

`
export const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
export const Payment = styled.img`
width: 50%;
margin-top: 25px;
${mobile({marginTop:"-20px"})}

`
export const Logo = styled.h1`
margin-bottom: 40px;
${mobile({fontSize:"24px", marginLeft:"15px"})}

`

export const Description = styled.p`
margin: 20px 0px;
${mobile({marginTop:"-30px", marginLeft:"15px"})}


`
export const SocialContainer = styled.div`
display: flex;
margin-top: 75px;
${mobile({marginTop:"-10px"})}

`
export const SocialIcon = styled.div`
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
`