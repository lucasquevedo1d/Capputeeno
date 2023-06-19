import styled from "styled-components";
import { mobile } from "../../Components/Responsive/Responsive";

export const Container = styled.div`

`

export const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding:"10px", flexDirection:"column"})}
`
export const ImgContainer = styled.div`
flex:1;
`
export const Image = styled.img`
width: 70%;
height: 76vh;
object-fit: cover;
margin-left: 35px;
${mobile({height: "40vh", width:"300px"})}

`

export const InfoContainer = styled.div`
padding: 0px 50px;
margin-left: -105px;
${mobile({display:"flex", flexDirection:"column"})}


h2{
margin-left:-85px;
margin-top:30px;
${mobile({marginLeft:"20px"})}

}

h4{
margin-left:-85px;
margin-top:30px;
margin-bottom:30px;
color:black
}
${mobile({padding:"10px", margin:"10px"})}

`

export const Title = styled.h1`
font-weight: 800;
margin-left: -85px;
${mobile({marginLeft:"3px"})}

`
export const Description = styled.p`
margin: 20px 20px;
max-width: 500px;
height: 300px;
margin-left: -85px;
letter-spacing: 2px;
${mobile({marginLeft:"15px"})}
`

export const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 150px;
margin-left: -35px;
${mobile({marginLeft:"40px", padding:"10px", flexDirection:"column", marginTop:"60px", marginBottom:"30px"})}
`

export const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 500;
cursor: pointer;
`
export const Remove = styled.div`

`
export const Amount = styled.div`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid gainsboro;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px ;
`
export const Add = styled.span`
`

export const ContainerButton = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: -110px;
`
export const Button = styled.button`
padding: 10px;
background-color: black;
color: white;
font-weight: 800;
width: 500px;
margin-left: -85px;
letter-spacing: 2px;
margin-top: -40px;
margin: 0px 40px;
:hover{
    background-color: transparent;
    color: black;
    cursor: pointer;
    font-weight: 800;
    transition: all calc(1s) ease;
}
${mobile({padding:"10px", marginTop:"15px", width:"300px", marginLeft:"30px"})}

`
export const ButtonBack = styled.button`
padding: 10px;
background-color: transparent;
font-weight: 800;
width: 500px;
margin-left: -85px;
letter-spacing: 2px;
margin-top: -40px;
margin: 0px 40px;
:hover{
    background-color: black;
    color: white;
    cursor: pointer;
    font-weight: 800;
    transition: all calc(1s) ease;
}
${mobile({padding:"10px", marginTop:"15px", width:"300px", marginLeft:"30px"})}

`

export const Select = styled.select`
border-radius: 20px;
height: 30px;
width: 30px;
margin-bottom: 40px;
align-items: center;
margin-left: -30px;
`
export const Frete = styled.h4`
${mobile({display:"none"})}
`
