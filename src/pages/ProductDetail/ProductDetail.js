import React, { useState } from 'react'
import { Button, ButtonBack, Container, ContainerButton, Description, Frete, Image, ImgContainer, InfoContainer, Label, Select, Title, Wrapper } from './styled'
import Announcement from '../../Components/Announcement/Announcement'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { AllProducts } from '../data/AllProducts'
import { goToCart, goToHomePage, goToProductListCategory } from '../../Router/Coordinator'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Swal from 'sweetalert2'

const ProductDetail = () => {

    const [quantity, setQuantity] = useState(1)

    const params = useParams()
    const navigate = useNavigate()

    const productsDetail = AllProducts.filter((index) => {
        const detail = index.id === params.id
        return detail
    })

    const addPropertyToObjects = (array, propertyName, propertyValue) => {
        return productsDetail.map(obj => {
          return { ...obj, [propertyName]: propertyValue };
        });
      };


    const AddProduct = async () => {
        const addCart = JSON.stringify(productsDetail);
        const newArray = addPropertyToObjects(addCart, "quantity", Number(quantity) )

        const storedArr = JSON.parse(localStorage.getItem("arr")) || [];
        storedArr.push(newArray);
      
       await localStorage.setItem("arr", JSON.stringify(storedArr));
        await Swal.fire({  
            icon: 'success',
            title: "Produto adicionado ao carrinho com sucesso!",
            color:"black",
            iconColor:"green"
          })
      await goToCart(navigate)
      };
      


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>

                <ImgContainer>
                    <Image src={productsDetail[0].image_url} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{productsDetail[0].name}</Title>
                    <h2>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(productsDetail[0].price_in_cents / 100)}</h2>

                    <Frete>* Frete grátis em todos os produtos para compras acima de R$500,00 *</Frete>
                    <Description>
                        {productsDetail[0].description}
                    </Description>
                    <Select onChange={(e) => setQuantity(e.target.value)}>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                        </Select>
                                        {/* <Label><b>Quantidade</b></Label> */}
                    <ContainerButton>
                    <Button onClick={AddProduct}>Adicionar ao carrinho <ShoppingBagOutlinedIcon/></Button>
                    <br/>
                    <ButtonBack onClick={() => goToHomePage(navigate)}>Voltar</ButtonBack>
                    </ContainerButton>
                   

                </InfoContainer>

            </Wrapper>
            <Footer />
        </Container>
    )
}

export default ProductDetail