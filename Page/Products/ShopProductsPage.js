import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainerAll from '../../Components/Products/CardProductsContainerAll'
import Pagination from '../../Components/Uitily/Pagination'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import SideFilter from '../../Components/Uitily/SideFilter'
import { useDispatch, useSelector } from 'react-redux'
import {SearchProducts} from '../../reduxtoolkit/requests/SerachProducts'
import UseSearch from '../../hooks/UseSearch'



const ShopProductsPage = () => {

    const[SearchWord ,setSearchWord,handlePage,sortdata]=UseSearch();
    // console.log(SearchWord);
    

    



     // define reduxtoolkit store 
     const dispatch=useDispatch();
     const Products=useSelector((state)=>state.searchProducts.data);
     

     let word=""; //start word request
     
 
     useEffect(()=>{
        localStorage.setItem("searchWord","")
        localStorage.setItem("SortBy","")
        localStorage.setItem("categoryfilter","")
        localStorage.setItem("pricefrom",0)
        localStorage.setItem("priceto",0)

         dispatch(SearchProducts(`limit=3&keyword=${word}`));
         
     },[])

     let pageCount = 0;
     if (Products.paginationResult)
         pageCount = Products.paginationResult.numberOfPages;


    
     const page=(p)=>{
        handlePage(p)
     }
     
     const onClick=(s)=>{
        sortdata()
     }
     
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult sortdata={onClick} title={`يوجد ${Products.results} منتجات `}/>
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                         <CardProductsContainerAll Products={Products.data} btntitle=""/>
                    </Col>
                </Row>
                    <Pagination PageCount={pageCount} handlePageClick={page} />
            </Container>
        </div>
    )
}

export default ShopProductsPage
