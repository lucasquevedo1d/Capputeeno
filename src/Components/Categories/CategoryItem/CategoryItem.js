import React from 'react'
import { Button, Container, Image, Info, Title } from './styled'
import { useNavigate } from 'react-router-dom'
import { goToProductList, goToProductListCategory } from '../../../Router/Coordinator'


const CategoryItem = ({item}) => {

const navigate = useNavigate()


  return (
  
    <Container>
        <Image src={item.img}/>
        <Info>
        <Title>{item.title}</Title>
        <Button onClick={() => goToProductListCategory(navigate, item.category )}>Ver mais</Button>
        </Info>

    </Container>

  )
}

export default CategoryItem