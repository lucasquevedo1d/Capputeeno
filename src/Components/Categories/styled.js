import styled from "styled-components";
import { mobile } from "../Responsive/Responsive";

export const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
margin-top: 20px;
${mobile({padding:"0", flexDirection:"column", flexWrap:"wrap"})}

`
export const Title = styled.h1`
font-size: xx-large;
display: flex;
margin-left: 45%;
margin-top: 150px;
${mobile({display:"none"})}
`