import React from 'react'
import { Container, Title } from './styled'
import CategoryItem from './CategoryItem/CategoryItem'
import { CategoriesData } from '../../pages/data/Data'


const Categories = () => {
 
  return (
    <div>
        <Title>Categorias</Title>
    <Container>
    {CategoriesData.map((item) =>{
        return <CategoryItem item={item} key={item.id}/>
    })
    }
    </Container>
    </div>
  )
}

export default Categories