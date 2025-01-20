import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import Spinner from 'react-bootstrap/Spinner';
import {fetchAllCategory }from '../../reduxtoolkit/requests/CategoryRequest'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const HomeCategory = () => {

    const Category=useSelector((state)=>state.Category.Category)
    const loading=useSelector((state)=>state.Category.loading)
    
    

    const Colors=['#F4DBA4','#F4DBA4','#0034FF','#F4DBA4','#FF6262','#F4DBA4']

    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchAllCategory(1))
    },[])           
     

    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
             {   loading===false?(
                  Category?Category.slice(0,6).map((item,index)=>
                   { return  <CategoryCard key={index} title={item.name} id={item._id} img={item.image} background={Colors[index]} />

             }):<h1>لا يوجد تصنبفات</h1>
                ):<Spinner animation="grow" />

             }
            </Row>
        </Container>
    )
}

export default HomeCategory
