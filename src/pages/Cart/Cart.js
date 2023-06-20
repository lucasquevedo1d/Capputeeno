import React, { useEffect, useState } from 'react'
import { Bottom, Button, CartProductId, CartProductName, Container, ContainerTopText, Description, Details, Hr, Image, Info, PriceDetail, Product, ProductDetail, ProductPrice, Select, SpaceProduct, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton, TopText, Trash, Wrapper } from './styled'
import Announcement from '../../Components/Announcement/Announcement'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { goToHomePage } from '../../Router/Coordinator'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Cart = () => {
    const [item, setItem] = useState([]);
    const navigate = useNavigate();

    const localCart = JSON.parse(localStorage.getItem("arr")) || [];
    const subTotal = item.reduce((sum, item) => {
      return sum += item[0].price_in_cents * item[0].quantity;
    }, 0);
    
    const getLocalCart = () => {
      const arrayObject = localCart.map((item) => (item));
      return arrayObject;
    };
    const removeArray = () => {
      const cleanedArray = [];
      localStorage.setItem("arr", JSON.stringify(cleanedArray));
      setItem([]);
      Swal.fire({
        icon: 'success',
        title: "Pedido realizado com sucesso!",
        color:"black",
        iconColor:"green"
      })
      
    };
    const removeItemFromArray = (itemId) => {
        const arr = JSON.parse(localStorage.getItem("arr")) || [];
        
        const itemIndex = arr.findIndex(item => item[0].id === itemId);
        
        if (itemIndex !== -1) {
          arr.splice(itemIndex, 1);
          
          localStorage.setItem("arr", JSON.stringify(arr));
          
          setItem(arr);
        }
    }
        
    const getUser = JSON.parse(window.localStorage.getItem("signup")) || [];
    
    useEffect(() => {
      if (!getUser || !getUser.length) {
        goToHomePage(navigate);
      }else {
        const arrayObject = getLocalCart();
        if (arrayObject !== null) {
          setItem(arrayObject);
        }
      }
    }, []);
    
    if (!getUser.length) {
      Swal.fire({
        icon: 'error',
        title: "Cadastre-se ou realize o login para acessar o carrinho!",
        color:"black",
        iconColor:"red"
      })
      return null;
    }
   
    
    

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Seu Carrinho</Title>
                <Top>
                    <TopButton onClick={() => goToHomePage(navigate)}>Continuar Comprando</TopButton>
                    <ContainerTopText>

                    </ContainerTopText>
                </Top>
                <Summary>
                            <SummaryTitle>Resumo total de pedidos</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText><b>Subtotal:</b></SummaryItemText>
                                <SummaryItemPrice>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(subTotal / 100)}</SummaryItemPrice>
                            </SummaryItem>
                            <Hr/>
                            <Button onClick={() =>removeArray()}>Finalizar compra</Button>
                        </Summary>
                <Bottom>

                    { item.map((item) => {
                        return (


                            <Info>

                                <Product>
                                    <SpaceProduct>
                                    <ProductDetail>
                                        <Image src={item[0].image_url} />
                                        <Details>
                                            <CartProductName><b>{item[0].name}</b></CartProductName>
                                            <Description>{item[0].description}</Description>
                                            <CartProductId><b>Quantidade:</b> {item[0].quantity} 
                                            </CartProductId>
                                        </Details>


                                        <PriceDetail>
                                            <ProductPrice><b>{new Intl.NumberFormat('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            }).format(item[0].price_in_cents * item[0].quantity / 100)}</b></ProductPrice>
                                        </PriceDetail>
                                        <Trash onClick={() => removeItemFromArray(item[0].id)}>
                                        </Trash>
                                    </ProductDetail>
                                    </SpaceProduct>
                                </Product>
                            </Info>

                            
                        )
                    })
                    }


                </Bottom>
            </Wrapper>
            <Footer />
        </Container>)
}

export default Cart