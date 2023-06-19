import React, { useEffect, useState } from 'react'
import { Bottom, Button, CartProductId, CartProductName, Container, ContainerTopText, Description, Details, Hr, Image, Info, PriceDetail, Product, ProductDetail, ProductPrice, Select, SpaceProduct, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton, TopText, Trash, Wrapper } from './styled'
import Announcement from '../../Components/Announcement/Announcement'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { goToHomePage } from '../../Router/Coordinator'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const [item, setItem] = useState([]);
    const navigate = useNavigate()


    const localCart = JSON.parse(localStorage.getItem("arr"));
    const subTotal = item.reduce((sum, item) => {
        return sum += item[0].price_in_cents * item[0].quantity;
    }, 0);

    const getLocalCart = () => {
        const arrayObject = localCart.map((item) => (item));
        return arrayObject;
    };

    const removeItemFromArray = (itemToRemove) => {
        const storedArr = JSON.parse(localStorage.getItem("arr")) || [];
        // Filtra o array removendo o item desejado
        const filteredArr = storedArr.filter((item) => item[0].id !== itemToRemove);

        // Atualiza o estado removeItem com o array filtrado
        setItem(filteredArr);

        // Atualiza o localStorage com o array atualizado
        localStorage.setItem("arr", JSON.stringify(filteredArr));
    };

    useEffect(() => {
        const arrayObject = getLocalCart();
        if (arrayObject !== null) {
            setItem(arrayObject);
        }
    }, []);


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
                            <Button>Finalizar compra</Button>
                        </Summary>
                <Bottom>

                    {item.map((item) => {
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