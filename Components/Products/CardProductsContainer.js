import React, { useEffect } from 'react'
import { Container,Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import {GetProducts} from '../../reduxtoolkit/requests/GetProducts'

const CardProductsContainer = ({title ,btntitle,pathText}) => {

    // define reduxtoolkit store 
    const dispatch=useDispatch();
    const Products=useSelector((state)=>state.ViewProducts.Products.data);    

    useEffect(()=>{
        dispatch(GetProducts());
        
        
    },[])    
    

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText={pathText}/>
            <Row className='my-2 d-flex justify-content-between'>
                {
                    Products? (
                        Products.slice(0,4).map((item)=>{
                            return <ProductCard key={item._id} item={item} />
                        })
                    ):null
                
                }

            </Row>
        </Container>
    )
}

export default CardProductsContainer
