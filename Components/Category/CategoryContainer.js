import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import Spinner from 'react-bootstrap/Spinner';

const CategoryContainer = ({loading,Category}) => {

    
    

    const Colors=['#F4DBA4','#F4DBA4','#0034FF','#F4DBA4','#FF6262','#F4DBA4']

   
    return (
        <Container >
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
            {   loading===false?(
                  Category?Category.map((item,index)=>
                   { return  <CategoryCard  key={index}title={item.name} img={item.image} background={Colors[Math.floor(Math.random()*5+2)]} />

             }):<h1>لا يوجد تصنبفات</h1>
                ):<Spinner animation="grow" />

             }
            </Row>
        </Container>
    )
}

export default CategoryContainer
