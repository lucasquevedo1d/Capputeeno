import styled from "styled-components";
import { mobile } from "../../Components/Responsive/Responsive";

export const Container = styled.div`

`

export const Title = styled.h1`
margin: 20px;
`
export const FilterContainer = styled.div`
display: flex;
`


export const Filter = styled.div`
margin: 20px;
`

export const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
`

export const Select = styled.select`
margin-right: 5px;
`

export const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-right: 20px;
padding: 5px;
`



export const Input = styled.input`
border: none;
background-color: white;
color: black;
${mobile({width:"50px", marginLeft:"-3px"})}

`

export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2, justifyContent:"center"})}
`

export const Language = styled.span`
font-size: 14px;
margin-right: 10px;
cursor: pointer;
${mobile({display:"none"})}
`
