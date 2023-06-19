import React from 'react'
import { Center, Container, Left, Logo, MenuItem, Right, Wrapper } from './styled'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { goToCart, goToHomePage, goToLogin, goToRegister } from '../../Router/Coordinator';

const Navbar = () => {
const navigate = useNavigate()
    return (
        <Container>
            <Wrapper>
                <Left/>
                <Center>
                    <Logo onClick={() => goToHomePage(navigate)}>Capputeeno.</Logo>
                </Center>
                <Right>
                    <MenuItem onClick={() => goToLogin(navigate)}>Entrar</MenuItem>
                    <MenuItem onClick={() => goToRegister(navigate)}>Cadastro</MenuItem>
                    <MenuItem>
                    <Badge color="error" onClick={() => goToCart(navigate)}>
                    <ShoppingCartOutlinedIcon/>
                    </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar