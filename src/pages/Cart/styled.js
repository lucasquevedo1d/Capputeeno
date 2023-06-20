import styled from "styled-components";
import { mobile } from "../../Components/Responsive/Responsive";
import DeleteIcon from '@mui/icons-material/Delete';


export const Container = styled.div`
${mobile({maxWidth:"390px"})}

`
export const Wrapper = styled.div`
padding: 20px;
min-height: 400px;
${mobile({minHeight:"400px"})}

`
export const Title = styled.h1`
font-weight: 300;
text-align: center;
`
export const Top = styled.div`
display: flex; 
align-items: center;
justify-content: space-between;
padding: 20px;
${mobile({display: "flex", justifyContent: "column"})}

`

export const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === 'filled' && 'none' };
background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
&:hover{
    background-color: black;
    color: white;
    transition: all 1s ease;
}
`

export const ContainerTopText = styled.div``

export const TopText = styled.span`
cursor: pointer;
margin: 0px 80px;
${mobile({display:"none"})}
`

export const Bottom = styled.div`
margin-top: -60vh;
${mobile({ flexDirection: "column" })}

`;
export const Info = styled.div`
flex: 2;
display: flex;
flex-direction:column;
width: 800px;
margin-top: 50px;
${mobile({marginTop:"-220px" })}

`


export const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ padding:"10px", marginTop:"230px", display:"flex"})}

`;


export const SpaceProduct = styled.div`
${mobile({ marginTop:"-190px"})}

`

export const ProductDetail = styled.div`
flex: 2;
display: flex;
border: 0.5px solid lightgray;
box-shadow: 20px;
${mobile({ display:"flex",flexDirection:"column", maxWidth:"300px", marginTop:"270px"})}
`;

export const Image = styled.img`
width: 250px;
${mobile({ width:"300px"})}
`

export const CartProductDetail = styled.div`
flex: 1;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({flexDirection:"column", marginBottom:"-35px"})}
`

export const Details = styled.div`
 padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ padding:"30px" })}

`



export const CartProductName = styled.span`
flex: 2;
display: flex;
`

export const CartProductId = styled.span`
flex:3;
margin: 5px;
`
export const Description = styled.div`
width: 300px;
margin: 10px;
${mobile({ width:"150px" })}
`
export const Price = styled.div`
flex: 1;
margin-top: 20px;
margin-bottom:20px;

`
export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
  ${mobile({ marginLeft:"-70px" })}

`;



export const Trash = styled(DeleteIcon)`
color:red;
margin: 80px;
${mobile({ marginTop:"-50px", marginLeft:"200px" })}
&:hover{
transform: scale(1.1);
transition: all calc(1s) ease;
cursor: pointer;
}
`

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin:"5px 15px"})}

`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

export const Hr = styled.hr`
  background-color: black; 
  border: none;
  height: 2px;
  margin-bottom:10px;
`

export const Summary = styled.div`
  border: 0.5px solid lightgray;  
  background-color: lightgreen;
  color: black;
  border-radius: 10px;
  padding: 20px;
  min-height: 60vh;
  width: 300px;
  margin-left:600px;
  margin-left: 1000px;
  ${mobile({ marginLeft:"-10px",   minHeight: "10vh", marginBottom:"80px" })}
`

export const SummaryTitle = styled.h1`
  font-weight: 600;
`

export const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
`

export const SummaryItemText = styled.span``

export const SummaryItemPrice = styled.span``


export const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
border: none;
margin-top: 16px;
&:hover{
    cursor: pointer;
    border: 0.5px solid black;
    background-color: white;
    color: black;
    transition: all 1s ease;
}
`
