import React from 'react'
import { Container } from './styled'
import ProductItem from './ProductItem/ProductItem'

const Products = ({product, params}) => {
const products = (product.filter((i) => {
return i.category === params
}))  
return (
    <div>
    <Container>
   {products && products.map((item) =>{
    return (<ProductItem item={item} id={item.id}/>)
   }
         
    
    )}
    </Container>
    </div>
  )
}

export default Products