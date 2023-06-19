import React, { useState } from 'react'
import { Container, FilterContainer,Title, SearchContainer, Input, Right, Language } from './styled'
import Announcement from '../../Components/Announcement/Announcement'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { AllProducts } from '../data/AllProducts'
import { Search } from '@mui/icons-material'
import Products from '../../Components/Products/Products'
import { useParams } from 'react-router-dom'

const ProductList = () => {
const [searchValue, setSearchValue] = useState("")
const [optionValue, setOptionValue] = useState("")
const params = useParams()


const onChangeSerach = (event) =>{
   setSearchValue(event.target.value)
}



const lowerSearch = searchValue.toLocaleLowerCase()

const lowerOption = optionValue.toLocaleLowerCase()


const products = AllProducts.filter((item) => searchValue ? item.name.toLocaleLowerCase().includes(lowerSearch) : true)
.filter((item) => optionValue ? item.category.toLocaleLowerCase().includes(lowerOption) : true)

  return (
    <Container>
      
        <Navbar/>
        {/* <Announcement/> */}
        <Right>
        <Language>PT</Language>
        <SearchContainer>
                        <Input 
                        placeholder='Buscar' 
                        value={searchValue}
                        onChange={onChangeSerach}
                        />
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                    </Right>
        <Title>Produtos</Title>
        <FilterContainer>
        </FilterContainer>
        <Products product={products} params={params.category} key={products.id}/>          
        <Footer/>
    </Container>
  
  )
}

export default ProductList