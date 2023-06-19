import React, { useEffect, useState } from 'react'
import { Arrow, Button, Container, Description, Image, ImgContainer, InfoContainer, Slide, Title } from './styled'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { Wrapper } from '../Navbar/styled'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToProductDetail, goToProductListCategory } from '../../Router/Coordinator'
import { AllProducts } from '../../pages/data/AllProducts'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const navigate = useNavigate()
    const handleClick = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction='left' onClick={() => handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
        {AllProducts.map((item) => (
            <Slide slideIndex={slideIndex} id={item.id}>
            <ImgContainer>
                <Image src={item.image_url}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.name}</Title>
                <Description>O estilo que você busca, você encontra aqui.</Description>
                <Button onClick={( () => goToProductDetail(navigate, item.id))}>Comprar</Button>
            </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
         
        <Arrow direction='right' onClick={() => handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider