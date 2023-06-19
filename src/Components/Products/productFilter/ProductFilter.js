import { Circle, Image, Info, Container, Paragraph, Button, Title } from "../ProductItem/styled"
import styled from "styled-components";
import { HomeProducts } from "../../../pages/data/Data";
import { goToProductDetail } from "../../../Router/Coordinator";
import { useNavigate } from "react-router-dom";


export const ContainerFilter = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const ProductFilter = () => {

    const navigate = useNavigate()
    return (
        <>
            <Title>Populares</Title>
            <br/>
            <ContainerFilter>
                {
                    HomeProducts.map((item) => {
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
                    })
                }

            </ContainerFilter>
        </>
    )
}

export default ProductFilter