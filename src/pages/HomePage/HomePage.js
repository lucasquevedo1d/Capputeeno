import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'
import Categories from '../../Components/Categories/Categories'
import { Container } from "./styled.js"
import Footer from '../../Components/Footer/Footer'
import ProductFilter from "../../Components/Products/productFilter/ProductFilter.js"

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <Slider />
                <Categories />
                <ProductFilter />
                <Footer/>
            </Container>
        </div>
    )
}

export default HomePage