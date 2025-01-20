import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/Uitily/Pagination'
import {GetProducts} from '../../reduxtoolkit/requests/GetProducts'
import { useDispatch ,useSelector} from 'react-redux'


const AdminAllProductsPage = () => {
    const dispatch=useDispatch();
    const products=useSelector((state)=>state.ViewProducts.Products.data);

    useEffect(()=>{
        dispatch(GetProducts());
    },[])
console.log(products);
    

    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts  prod={products}/>
                    <Pagination />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage
