import React, { useEffect } from 'react'
import { Container,Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'


const CardProductsContainerAll = ({title ,btntitle,pathText,Products}) => {

       

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText={pathText}/>
            <Row className='my-2 d-flex justify-content-between'>
                {
                    Products? (
                        Products.map((item)=>{
                            return <ProductCard key={item._id} item={item} />
                        })
                    ):null
                
                }
            </Row>
        </Container>
    )
}

export default CardProductsContainerAll
