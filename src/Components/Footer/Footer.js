import React from 'react'
import { Center, ContactItem, Container, Description, Left, LisItem, List, Logo, Payment, Right, SocialContainer, SocialIcon, Title } from './styled'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>Capputeeno.</Logo>
        <Description>O estilo que você busca, você encontra aqui.</Description>
        <SocialContainer>
            <SocialIcon>
               <a href='https://pt-br.facebook.com/' target='_blank'><FacebookOutlinedIcon style={{color:"black"}}/></a> 
            </SocialIcon>
            <SocialIcon>
            <a href='https://www.instagram.com/' target='_blank'><InstagramIcon style={{color:"black"}} /></a> 
            </SocialIcon>
            <SocialIcon>
            <a href='https://twitter.com/home/' target='_blank'><TwitterIcon style={{color:"black"}}/></a> 
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>Link para nossas páginas</Title>
            <List>
                <LisItem>Inico</LisItem>
                <LisItem>Canecas</LisItem>
                <LisItem>Camisetas</LisItem>
                <LisItem>Carrinho</LisItem>
            </List>
        </Center>
        <Right>
            <Title>Contato</Title>
            <ContactItem>
            <LocalPhoneIcon sx={{marginRight:"10px"}}/>
                Telefone: +55 (xx) xxxx-xxxx
            </ContactItem>
            <ContactItem>
                <LocationOnIcon sx={{marginRight:"10px"}}/>
                Endereço: Rua xxxxxxxxxxxxx
            </ContactItem>  
            <ContactItem>
            <EmailIcon sx={{marginRight:"10px"}}/>
                Email: capputeeno@gmail.com
            </ContactItem>
            <Payment  src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer