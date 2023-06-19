import React from 'react'
import { Button, Circle, Container, Icon, Image, Info } from './styled'

import { useNavigate } from 'react-router-dom';
import { goToProductDetail } from '../../../Router/Coordinator';

const ProductItem = ({item}) => {
  const navigate = useNavigate()

  return (
    <Container>
      <Circle>
        <Image src={item.image_url} />
        <p>{item.name}</p>
       <b> <p>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(item.price_in_cents / 100)}</p></b>
        <Info>
          <Button onClick={() => goToProductDetail(navigate, item.id)}>Ver mais</Button>
        </Info>
      </Circle>
    </Container>
  )
}

export default ProductItem